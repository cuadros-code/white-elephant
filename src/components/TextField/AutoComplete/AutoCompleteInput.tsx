import React, { useState } from 'react'
import usePlacesAutocompleteService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
import { TextField } from 'src/components';
import styles from './AutoComplete.module.css';

const AutoCompleteInput = () => {

  const [closeList, setCloseList] = useState(false);
  const [value, setValue] = useState("")

  const {
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesAutocompleteService({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY,
    debounce: 600,
  });
  ;

  return (
    <div style={{ width: '100%' }}>
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
      <div className={styles.containerList}>
        { !closeList && placePredictions.map((item, index) => (
            <li 
              className={styles.list} 
              key={index} 
              onClick={() => { 
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