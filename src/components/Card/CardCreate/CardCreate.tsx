import Image from 'next/image';
import styles from './CardCreate.module.css';

const CardCreate = () => {
  return (
    <div className={styles.containerCard} >
      <Image
        alt=''
        className={styles.image}
        src='/city.jpg' 
        width={220}
        height={120}
        objectFit="cover"
      />
    </div>
  )
}

export default CardCreate