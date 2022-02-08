import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './PrimaryButton.module.css';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: React.ReactNode;
}

const PrimaryButton = ( { children, disabled , ...rest }: Props ) => {
  return (
    <button 
      className={`${styles.primaryButton} ${disabled && styles.disabled }`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
