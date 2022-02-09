import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { PrimaryButton, TextField } from 'src/components';
import { useStoreAuth } from 'src/store/authStore';
import styles from 'styles/Profile.module.css';

interface IFormLogin {
  name: string
  email   : string
}

const Profile = () => {

  const { user } = useStoreAuth( auth => auth )

  const { register, handleSubmit, formState: { errors } } = useForm<IFormLogin>({
    defaultValues: {
      name  : user?.name,
      email : user?.email,
    }
  });

  return (
    <div className={styles.container}>

      <div className={styles.contentProfile}>
        <div className={styles.contentInfo}>
          <Image
            className={styles.avatar}
            src={user?.photo || 'https://via.placeholder.com/150'} 
            alt={user?.name}
            width={100}
            height={100}
          />
          <form autoComplete='off'>
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
      
            <PrimaryButton type='submit'>
              Actualizar
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
