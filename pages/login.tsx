import Link from 'next/link';
import { IconButton, PrimaryButton, TextField } from 'src/components';
import styles from '../styles/Login.module.css'

const Login = () => {


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
          <form>
            <TextField 
              label='Correo electrónico'
              placeholder='Ingresa tu correo electrónico'
            />
            <TextField 
              label='Contraseña'
              type='password'
              placeholder='Ingresa tu contraseña'
            />
            <PrimaryButton>Iniciar sesión</PrimaryButton>
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
