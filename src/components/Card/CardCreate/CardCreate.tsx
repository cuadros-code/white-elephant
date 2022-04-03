import Image from 'next/image';
import { PrimaryButton } from 'src/components';
import { IResponsePost } from 'src/interfaces/ICommon';
import styles from './CardCreate.module.css';

interface IProps {
  item: IResponsePost
}

const CardCreate = ( { item }: IProps ) => {
  return (
    <div className={styles.containerCard} >
      <Image
        alt=''
        className={styles.image}
        src={item.files[0].url}
        width={220}
        height={120}
        objectFit="cover"
      />
      <div className={styles.containerText}>
        <h3>{item.title}</h3>
      </div>

      <div className={styles.containerText}>
        <p>{item.description.substring(0, 70).concat('...')}</p>
      </div>

      <PrimaryButton>
        Ver
      </PrimaryButton>
    </div>
  )
}

export default CardCreate