import React, { useState } from 'react'
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { TextField } from 'src/components';
import styles from './AutoComplete.module.css';
import { BiCurrentLocation } from 'react-icons/bi';

const AutoCompleteInput = () => {

  const [closeList, setCloseList] = useState(false);
  const [value, setValue] = useState("")

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
      console.log(data.coords)
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
                console.log(item)
                placesService.getDetails({ placeId: item.place_id }, (data: any) => {
                  console.log(data.geometry.location.lng())
                  console.log(data.geometry.location.lat())
                });
                setValue(item.description);
                setCloseList(true);
              }}
            >
              {item.description}
            </li>
        ))}
      </div>
    </div>
  )
}

export default AutoCompleteInput