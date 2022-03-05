import React, { useState } from 'react'
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { BiCurrentLocation } from 'react-icons/bi';
import { TextField } from 'src/components';
import { Map, Marker } from "pigeon-maps"
import styles from './AutoComplete.module.css';
const AutoCompleteInput = () => {
  
  const [closeList, setCloseList] = useState(false);
  const [value, setValue] = useState("")
  const [locationState, setLocationState] = useState<[number, number]>([3.3658895, -76.5950555])
  
  const {
    placePredictions,
    getPlacePredictions,
    placesService,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY,
    debounce: 600,
  });

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(( data: GeolocationPosition ) => {
      setLocationState([data.coords.latitude, data.coords.longitude]);
    }, () => {
      console.log("error");
    });
    
  }

  return (
    <div style={{ width: '100%' }}>
      <div className={styles.contentLocation}>
        <div>
          <TextField
            value={value}
            loading={isPlacePredictionsLoading}
            label='Dirección'
            placeholder='Ingresa tu dirección'
            onChange={(evt: any) => {
              getPlacePredictions({ input: evt.target.value });
              setValue(evt.target.value);
              setCloseList(false);
            }}
          />
        </div>
        <button 
          className={styles.buttonLocation}
          onClick={getLocation}
        >
            <BiCurrentLocation size={25} />
        </button>
      </div>
      <div className={styles.containerList}>
        { !closeList && placePredictions.map((item, index) => (
            <li 
              className={styles.list} 
              key={index} 
              onClick={() => { 
                placesService.getDetails({ placeId: item.place_id }, (data: any) => {
                  setLocationState([data.geometry.location.lat(), data.geometry.location.lng()]);
                });
                setValue(item.description);
                setCloseList(true);
              }}
            >
              {item.description}
            </li>
        ))}
      </div>

      <Map 
        height={300}
        defaultCenter={locationState} 
        center={locationState}
        defaultZoom={11}
      >
        <Marker width={50} anchor={locationState} />
      </Map>
    </div>
  )
}

export default AutoCompleteInput