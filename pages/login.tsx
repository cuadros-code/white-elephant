import Link from 'next/link';
import { IconButton, PrimaryButton, TextField, RequiredMessage } from 'src/components';
import styles from '../styles/Login.module.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
interface IFormLogin {
  email   : string
  password: number
}

const schema = yup.object({
  email   : yup.string()
              .email('Ingrese un correo valido')
              .required('Ingresa tu correo electrónico'),
  password: yup.string()
              .min(6, 'La contraseña debe tener al menos 6 caracteres')
              .required('Ingresa tu contraseña')
}).required();

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormLogin>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IFormLogin) => console.log(data);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1>
            Registra tu denuncia y ayuda a visibilizar la corrupción.
          </h1>
        </div>
        <div className={styles.form} >
          <h1>Iniciar sesión</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register('email')} 
              label='Correo electrónico'
              placeholder='Ingresa tu correo electrónico'
              error={errors.email}
            />
            <RequiredMessage>{errors.email?.message}</RequiredMessage>
            <TextField 
              {...register('password')} 
              label='Contraseña'
              type='password'
              placeholder='Ingresa tu contraseña'
              error={errors.password}
            />
            <RequiredMessage>{errors.password?.message}</RequiredMessage>
            <PrimaryButton type='submit'>Iniciar sesión</PrimaryButton>
            <Link href='/register'>
              <a className={styles.link} >Recuperar contraseña</a>
            </Link>
          </form>
          <p className={styles.divider}><span>Iniciar sesión con</span></p>
          <div className={styles.socialMedia}>
            <IconButton icon='Google' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
