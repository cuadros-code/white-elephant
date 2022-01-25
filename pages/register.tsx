import { IconButton, PrimaryButton, TextField } from 'src/components';
import styles from '../styles/Register.module.css'

const Register = () => {
  return (
    <>
       <div className={styles.container}>

        <div className={styles.form} >
          <h1>Registro</h1>
          <form>
            <div className={styles.names}>
              <div>
                <TextField
                  label='Nombres'
                  placeholder='Nombres'
                />
              </div>
              <div>
                <TextField
                  label='Apellidos'
                  placeholder='Apellidos'
                />
              </div>
            </div>

            <TextField 
              label='Correo electrónico' 
              placeholder='Ingresa tu correo electrónico'
            />
            <TextField 
              label='Contraseña' 
              type='password'
              placeholder='Ingresa tu contraseña'
            />
            <PrimaryButton>Registrarse</PrimaryButton>
          </form>

          <p className={styles.divider}><span>Registro con</span></p>
          <div className={styles.socialMedia}>
            <IconButton icon='Google' />
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
