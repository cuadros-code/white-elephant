import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './PrimaryButton.module.css';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: React.ReactNode;
}

const PrimaryButton = ( { children, ...rest }: Props ) => {
  return (
    <button 
      className={styles.primaryButton}
      {...rest}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
