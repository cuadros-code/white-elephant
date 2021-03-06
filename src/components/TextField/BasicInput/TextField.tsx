import { CSSProperties, DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import { Loading } from 'src/components';
import { GiCancel } from 'react-icons/gi';
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

        {/* <div className={styles.resetField}> 
          <button>
            <GiCancel size={25} opacity={.3} />
          </button>
        </div>          */}
      </span>
    </>
  );
});

TextField.displayName = 'TextField';

export default TextField;
