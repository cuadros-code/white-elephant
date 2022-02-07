import styles from './MessageAlert.module.css'
import { MdError } from 'react-icons/md'
import { useMessageError } from 'src/store/messageStore';
import { useEffect, useState } from 'react';

interface MessageAlertProps {
  message : string;
  type    : 'error' | 'success' | 'warning' | 'info';
}

const MessageAlert = ( { message, type }: MessageAlertProps ) => {

  const setError = useMessageError( state => state.setError )
  
  useEffect(() => {
    const interval = setTimeout(() => {
      setError(false, '', null)
    }
    , 4000)
    return () => clearTimeout(interval)
  }, []);

  return (
    <div 
      className={`${styles.alert } ${ [`${styles[type]}`] }`}
    >
      <div className={styles.message}>
        <MdError color='#fff' /> <span> { message } </span>
      </div>

      <div className={styles.meter}>
        <span style={{ width : '100%' }}>
          <span className={styles.progress}></span>
        </span>
      </div>

    </div>
  );
};

export default MessageAlert;
