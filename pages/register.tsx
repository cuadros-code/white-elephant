import { IconButton, PrimaryButton, RequiredMessage, TextField } from 'src/components';
import styles from '../styles/Register.module.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormRegister {
  name    : string
  lastname: string
  email   : string
  password: number
}

const schema = yup.object({
  name    : yup.string().required('Ingresa tu nombre'),
  lastname: yup.string().required('Ingresa tu apellido'),
  email   : yup.string()
              .email('Ingrese un correo valido')
              .required('Ingresa tu correo electrónico'),
  password: yup.string()
              .min(6, 'La contraseña debe tener al menos 6 caracteres')
              .required('Ingresa tu contraseña')
}).required();

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormRegister>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IFormRegister) => console.log(data);

  return (
    <>
       <div className={styles.container}>

        <div className={styles.containerForm}>
          <div className={styles.form}>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
