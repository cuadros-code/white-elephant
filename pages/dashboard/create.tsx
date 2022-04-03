import React, { ReactElement, useState } from 'react'
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { ref } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import LayoutDashboard from 'src/components/LayoutDasboard'
import styles from 'styles/CreateComplaint.module.css'
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCreate } from 'src/validation/schemeCreate';
import useUploadFile from 'src/hooks/useUploadFile';
import { storage,db } from 'src/config/firebaseConfig';
import { PrimaryButton, TextField, TextArea, DragAndDrop, RequiredMessage } from 'src/components';
import { useStoreAuth } from 'src/store/authStore';
import { useMessageError } from 'src/store/messageStore';

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

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset,
    setValue, 
    setError 
  } = useForm<IFormCreate>({
    resolver: yupResolver(schemaCreate)
  });
  const [loading, setLoading] = useState(false)
  const { uploadFile } = useUploadFile()
  const { user } = useStoreAuth( auth => auth )
  const message = useMessageError( state => state );


  const onSubmit = async (data: IFormCreate) => {
    setLoading(true)
    try {
      const { files, description, location, title } = data
      const directionFiles = files.map( async (file: any) => {
        const reader = new FileReader();
        const imagesRef = ref(storage, `files/${file.name}`);
        reader.readAsDataURL(file);
        const url = await uploadFile(imagesRef, file )
        return {
          name: file.name,
          url,
          size: file.size,
          type: file.type
        }
      })
  
      const listFiles = await Promise.all(directionFiles)
  
      await addDoc(collection( db, 'post' ), {
        uid: user?.id,
        title,
        description,
        location,
        files: listFiles,
      })
      message.setError({
        error: true,
        message: 'Registro creado con exito',
        type: 'success',
      })
      
    } catch (error) {
      message.setError({
        error: true,
        message: 'No se pudo crear el registro',
        type: 'error',
      })
    } finally {
      setLoading(false)
      reset()
    }
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

          <PrimaryButton disabled={loading}  type='submit'>
            { loading ? 'Creando...' : 'Crear Denuncia' }
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