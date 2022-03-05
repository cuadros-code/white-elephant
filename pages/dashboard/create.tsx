import React, { ReactElement,  } from 'react'
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import LayoutDashboard from 'src/components/LayoutDasboard'
import styles from 'styles/CreateComplaint.module.css'
import { PrimaryButton, TextField } from 'src/components';
const AutoCompleteInput = dynamic(() => import("src/components/TextField/AutoComplete/AutoCompleteInput"), { ssr:false})
interface IFormCreate {
  email      : string
  location   : string
  lat: number
  lng: number
}

const Create = () => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<IFormCreate>({
    // resolver: yupResolver(schemaLogin)
  });

  const onSubmit = (data: IFormCreate) => {
    console.log(data)
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <TextField
            {...register('email')} 
            label='Titulo de la denuncia'
            placeholder='Ingresa el titulo de la denuncia'
            error={errors.email}
          />
          <AutoCompleteInput 
            reference={{...register('location')}}
            setValueForm={setValue}
          />

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