import { CSSProperties, DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import { Loading } from 'src/components';
import styles from './TextField.module.css';

interface TextFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label     : string;
  error?    : boolean;
  style?    : CSSProperties;
  loading?  : boolean;
}

const TextField = forwardRef<any, any>(( props: TextFieldProps, ref ) => {

  const { label, error, disabled, loading,...rest } = props

  return (
    <>
      <label className={styles.label}>
        { label }
      </label>
      <span style={{ position: 'relative' }}>
        <input 
          className={`${styles.field} ${error && styles.error } ${disabled && styles.disabled}`} 
          {...rest}
          disabled={disabled}
          ref={ref}
          />
        { loading && <div className={styles.loading}> <Loading /> </div> }
      </span>
    </>
  );
});

TextField.displayName = 'TextField';

export default TextField;
