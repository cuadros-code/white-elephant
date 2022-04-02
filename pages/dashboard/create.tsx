import React, { ReactElement,  } from 'react'
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import LayoutDashboard from 'src/components/LayoutDasboard'
import styles from 'styles/CreateComplaint.module.css'
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryButton, TextField, TextArea, DragAndDrop, RequiredMessage } from 'src/components';
import { schemaCreate } from 'src/validation/schemeCreate';

const AutoCompleteInput = dynamic(() => import("src/components/TextField/AutoComplete/AutoCompleteInput"), { ssr:false})
interface IFormCreate {
  lat          : number
  lng          : number
  location     : string
  description  : string
  title        : string
  files        : any
}

const Create = () => {

  const { register, handleSubmit, formState: { errors }, setValue, setError } = useForm<IFormCreate>({
    resolver: yupResolver(schemaCreate)
  });

  const onSubmit = (data: IFormCreate) => {
    console.log(data)
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <TextField
            {...register('title')} 
            label='Titulo de la denuncia'
            placeholder='Ingresa el titulo de la denuncia'
          />
          <RequiredMessage>{errors.title?.message}</RequiredMessage>

          <AutoCompleteInput
            hiddenCurrentLocation={true}
            setError={setError}
            setValueForm={setValue}
          />
          <RequiredMessage>{errors.location?.message}</RequiredMessage>

          <TextArea 
            {...register('description')}
            label='Descripción de la denuncia'
            placeholder='Ingresa la descripción de la denuncia'
            rows={5}
          />
          <RequiredMessage>{errors.description?.message}</RequiredMessage>

          <DragAndDrop
            setValueForm={setValue}
            setError={setError}
          />
          <RequiredMessage>{errors.files?.message}</RequiredMessage>

          <PrimaryButton  type='submit'>
            Crear Denuncia
          </PrimaryButton>
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