import { IconButton, PrimaryButton, RequiredMessage, TextField } from 'src/components';
import styles from '../styles/Register.module.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRegister } from 'src/validation/schemeForm';
import { useEffect } from 'react';
import useAuth from 'src/hooks/useAuth';
interface IFormRegister {
  name    : string
  lastname: string
  email   : string
  password: string
}

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormRegister>({
    resolver: yupResolver(schemaRegister)
  });
  const { createUser } = useAuth()

  useEffect(() => {

  }, []);
  
  const onSubmit = (data: IFormRegister) => {
    const { name, lastname, email, password } = data
    const fullname = `${name} ${lastname}`
    createUser( fullname, email, password )
  };

  return (
    <>
       <div className={styles.container}>

        <div className={styles.containerForm}>
          <div className={styles.form}>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
              <div className={styles.names}>
                <div>
                  <TextField
                    label='Nombres'
                    placeholder='Nombres'
                    {...register('name')}
                    error={errors.name}
                    />
                  <RequiredMessage>{errors.name?.message}</RequiredMessage>
                </div>
                <div>
                  <TextField
                    label='Apellidos'
                    placeholder='Apellidos'
                    {...register('lastname')}
                    error={errors.lastname}
                    />
                  <RequiredMessage>{errors.lastname?.message}</RequiredMessage>
                </div>
              </div>

              <TextField 
                label='Correo electrónico' 
                placeholder='Ingresa tu correo electrónico'
                {...register('email')}
                error={errors.email}
                />
              <RequiredMessage>{errors.email?.message}</RequiredMessage>

              <TextField 
                label='Contraseña' 
                type='password'
                placeholder='Ingresa tu contraseña'
                {...register('password')}
                error={errors.password}
                />
              <RequiredMessage>{errors.password?.message}</RequiredMessage>

              <PrimaryButton type='submit'>Registrarse</PrimaryButton>
            </form>

            <p className={styles.divider}><span>Registro con</span></p>
            <div className={styles.socialMedia}>
              <IconButton icon='Google' />
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <h1>
            Registrate y comparte con tus amigos la aplicación 
            para sumar nuestras voces.
          </h1>
        </div>

      </div>
    </>
  );
};

export default Register;
