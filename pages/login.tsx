import { TextField } from 'src/components';
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
              label="Correo electrónico" 
              placeholder='Ingresa tu correo electrónico'
            />
            <TextField 
              label="Contraseña" 
              placeholder='Ingresa tu contraseña'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
