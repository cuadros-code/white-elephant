import { forwardRef, CSSProperties, DetailedHTMLProps,  TextareaHTMLAttributes  } from 'react'
import styles from './TextArea.module.css';

interface TextFieldProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>{
  label     : string;
  error?    : boolean;
  style?    : CSSProperties;
}

const TextArea = forwardRef<any, any>(( props: TextFieldProps, ref ) => {

  const { label, error, disabled, ...rest } = props

  return (
    <div className={styles.contentTextArea}>
      <label className={styles.label} htmlFor={label}> 
        { label } 
      </label>
      <textarea 
        id={label}
          className={`${styles.textArea} ${error && styles.error }`}
        disabled={disabled} 
        ref={ref} 
        {...rest} 
      />
    </div>
  )
});

TextArea.displayName = 'TextAreaField';

export default TextArea;