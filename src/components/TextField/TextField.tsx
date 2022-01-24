import styles from './TextField.module.css';

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
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
