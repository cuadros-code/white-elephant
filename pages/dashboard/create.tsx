import React, { ReactElement, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import LayoutDashboard from 'src/components/LayoutDasboard'
import styles from 'styles/CreateComplaint.module.css'
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { AutoCompleteInput, TextField } from 'src/components';
interface IFormCreate {
  email   : string
  password: string
}

const Create = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm<IFormCreate>({
    // resolver: yupResolver(schemaLogin)
  });

  const onSubmit = (data: IFormCreate) => {

  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <AutoCompleteInput />
          <TextField
            {...register('email')} 
            label='Titulo de la denuncia'
            placeholder='Ingresa el titulo de la denuncia'
            error={errors.email}
          />
      </form>
    </div>
  )
}

export default Create

Create.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutDashboard>{page}</LayoutDashboard>
  )
}