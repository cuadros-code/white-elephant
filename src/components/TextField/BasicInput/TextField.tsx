import { CSSProperties, DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import { Loading } from 'src/components';
import styles from './TextField.module.css';

interface TextFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label     : string;
  error?    : boolean;
  style?    : CSSProperties;
  loading?  : boolean;
  children? : JSX.Element | JSX.Element[];
}

const TextField = forwardRef<any, any>(( props: TextFieldProps, ref ) => {

  const { label, error, disabled, loading, children,...rest } = props

  return (
    <>
      <label className={styles.label} htmlFor={label}>
        { label }
      </label>
      <span style={{ position: 'relative' }}>
        <input
          id={label}
          className={`${styles.field} ${error && styles.error } ${disabled && styles.disabled}`} 
          disabled={disabled}
          ref={ref}
          {...rest}
        />
        { loading && <div className={styles.loading}> <Loading /> </div> }
      </span>
    </>
  );
});

TextField.displayName = 'TextField';

export default TextField;
