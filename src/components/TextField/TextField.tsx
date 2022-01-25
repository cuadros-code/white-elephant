import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './TextField.module.css';

interface TextFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label: string;
}

const TextField = ( { label, ...rest }: TextFieldProps ) => {
  return (
    <>
      <label className={styles.label}>
        { label }
      </label>
      <input className={styles.field} {...rest}/>
    </>
  );
};

export default TextField;
