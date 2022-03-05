import React, { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { BiCurrentLocation } from 'react-icons/bi';
import { TextField } from 'src/components';
import { Map, Marker } from "pigeon-maps"
import styles from './AutoComplete.module.css';
import { useMessageError } from 'src/store/messageStore';
import { UseFormSetValue } from 'react-hook-form';

interface TextFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  error?    : boolean;
  reference?: any;
  setValueForm  : UseFormSetValue<any>
}

const AutoCompleteInput = (props: TextFieldProps) => {
  const { error, children, reference, setValueForm, ...rest } = props;
  const message = useMessageError( state => state );
  const [closeList, setCloseList] = useState(false);
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
      sendCoordinates(data.coords.latitude, data.coords.longitude);
    }, () => {
      message.setError({
        error: true,
        message: 'Tiene aplicaciones que no permiten obtener su ubicación',
        type: 'warning'
      })
    });
  }

  const onClickItemLocation = (item: { place_id: string, description: string }) => {
    placesService.getDetails({ placeId: item.place_id }, (data: any) => {
      setLocationState([data.geometry.location.lat(), data.geometry.location.lng()]);
      sendCoordinates(data.geometry.location.lat(), data.geometry.location.lng());
    });
    setValueForm('location', item.description);
    setCloseList(true);
  }

  const sendCoordinates = (lat: number, lng: number) => {
    setValueForm('lat', lat);
    setValueForm('lng', lng);
  }

  return (
    <div style={{ width: '100%' }}>
      <div className={styles.contentLocation}>
        <div>
          <TextField
            {...reference}
            loading={isPlacePredictionsLoading}
            label='Dirección'
            placeholder='Ingresa tu dirección'
            onChange={(evt: any) => {
              getPlacePredictions({ input: evt.target.value });
              setCloseList(false);
            }}
          />
        </div>
        <button 
          className={styles.buttonLocation}
          onClick={getLocation}
          type='button'
        >
            <BiCurrentLocation size={25} />
        </button>
      </div>

      <div className={styles.containerList}>
        { !closeList && placePredictions.map((item, index) => (
            <li 
              className={styles.list} 
              key={index} 
              onClick={() => onClickItemLocation(item)}
            >
              {item.description}
            </li>
        ))}
      </div>

      
      <Map
        boxClassname={styles.boxLocation}
        height={250}
        defaultCenter={locationState} 
        center={locationState}
        defaultZoom={11}
        >
        <Marker width={50} anchor={locationState} color='#005cd4'/>
      </Map>
    </div>
  )
}

export default AutoCompleteInput