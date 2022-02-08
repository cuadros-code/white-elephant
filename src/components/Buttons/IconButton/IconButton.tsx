import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { Loading } from 'src/components';
import styles from './IconButton.module.css';

type Icon = 'Google'
interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  icon : Icon;
}

const IconButton = ( { icon, disabled,...rest }: Props ) => {

  const IconComponent = () => {
    switch ( icon ) {
      case 'Google':
        return <FcGoogle size={25} />;
      default:
        return null;
    }
  };
  
  return (
    <>  
      <button 
        className={`${styles.iconButton} ${disabled && styles.disabled }`}
        disabled={disabled}
        {...rest}
        >
         {disabled ? <Loading /> : <IconComponent />}
      </button>
      <span className={styles.description} >{ icon }</span>
    </>
  );
};

export default IconButton;
