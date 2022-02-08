import { useEffect } from 'react';
import styles from './MessageAlert.module.css'
import { MdError } from 'react-icons/md'
import { MessageType, useMessageError } from 'src/store/messageStore';

interface MessageAlertProps {
  message : string;
  type    : MessageType;
}

const MessageAlert = ( { message, type }: MessageAlertProps ) => {

  const setError = useMessageError( state => state.setError )
  
  useEffect(() => {
    const interval = setTimeout(() => {
      setError({
        error: false,
        message: '',
        type: 'info'
      })
    }
    , 4000)
    return () => clearTimeout(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
