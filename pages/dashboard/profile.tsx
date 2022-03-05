import { getDownloadURL, ref } from 'firebase/storage';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loading, PrimaryButton, TextField } from 'src/components';
import { imagesRef, storage } from 'src/config/firebaseConfig';
import useAuth from 'src/hooks/useAuth';
import useUploadFile from 'src/hooks/useUploadFile';
import { useStoreAuth } from 'src/store/authStore';
import styles from 'styles/Profile.module.css';

interface IFormLogin {
  name: string
  email   : string
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const Profile = () => {

  const [imageProfile, setImageProfile] = useState<string>('https://via.placeholder.com/150')

  const { user } = useStoreAuth( auth => auth )
  const { updateUserProfile, loadAuthenticate, showMessageError } = useAuth()
  const { loadingFile, uploadFile } = useUploadFile()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormLogin>({
    defaultValues: {
      name  : user?.name,
      email : user?.email,
    },
  });

  useEffect(() => {
    user?.photo && setImageProfile(user?.photo)
    reset({
      name  : user?.name,
      email : user?.email,
    })
  }, [user])
  

  const onSubmit = (data: IFormLogin) => {
    const { name } = data
    updateUserProfile({
      displayName: name,
      photoURL   : user?.photo || '',
    })
  }

  const uploadImage = async ( event: ChangeEvent<HTMLInputElement> ) => {
    if( event.target.files && event.target.files.length ) {
      const file = event.target.files[0]
      if( file.size > MAX_FILE_SIZE ) {
        showMessageError({
          text: 'El tamaño del archivo es demasiado grande',
        })
        return
      }
      const reader = new FileReader();
      const imagesRef = ref(storage, `images/${file.name}`);
      reader.readAsDataURL(file);
      const url = await uploadFile(imagesRef, file )
      setImageProfile(url!)
      updateUserProfile({
        photoURL: url,
      })
    }
  }


  return (
    <div className={styles.container}>

      <div className={styles.contentProfile}>
        
        <div className={styles.contentInfo}>
          <div className={styles.contentImage}>
            <Image
              className={styles.avatar}
              src={ imageProfile } 
              alt={user?.name}
              width={100}
              height={100}
              />
            <input 
              className={styles.inputFile}
              onChange={uploadImage} 
              type="file" 
              accept='image/png, image/jpg' 
              multiple={false}
              />
          </div>
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            autoComplete='off'
          >
            <TextField
              {...register('name')} 
              label='Nombre'
              placeholder='Ingresa tu nombre'
            />

            <TextField
              disabled
              {...register('email')} 
              label='Correo electrónico'
              placeholder='Ingresa tu correo electrónico'
            />
      
            <PrimaryButton 
              type='submit'
              disabled={loadAuthenticate || loadingFile}
            >
              {loadAuthenticate || loadingFile ? <Loading /> : 'Actualizar'}
            </PrimaryButton>
          </form>

        </div>
        <div className={styles.contentDescription}>
          <div>
          </div>
          <div>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;
