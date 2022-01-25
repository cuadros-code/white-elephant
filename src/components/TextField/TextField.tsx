import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import styles from './TextField.module.css';

interface TextFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label: string;
  error? : boolean;
}

const TextField = forwardRef<any, any>(( props: TextFieldProps, ref ) => {

  const { label, error, ...rest } = props

  return (
    <>
      <label className={styles.label}>
        { label }
      </label>
      <input 
        className={`${styles.field} ${error && styles.error }`} 
        {...rest} 
        ref={ref}
      />
    </>
  );
});

TextField.displayName = 'TextField';

export default TextField;
