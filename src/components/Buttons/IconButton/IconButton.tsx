import { FcGoogle } from 'react-icons/fc'
import styles from './IconButton.module.css';

type Icon = 'Google'


interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  icon : Icon;
}

const IconButton = ( { icon, ...rest }: Props ) => {

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
        className={styles.iconButton}
        {...rest}
        >
        <IconComponent />
      </button>
      <span className={styles.description} >{ icon }</span>
    </>
  );
};

export default IconButton;
