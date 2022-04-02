import { DragEvent, useState } from 'react'
import { UseFormSetValue, UseFormSetError } from 'react-hook-form'
import styles from './DragAndDrop.module.css'

const FilesOk = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'video/mp4',
]

interface IDragAndDrop {
  setValueForm  : UseFormSetValue<any>
  setError      : UseFormSetError<any>
}

const DragAndDrop = ( { setValueForm,setError }: IDragAndDrop ) => {

  const [fileList, setFileList] = useState<any[]>([])

  const handleDragOver = ( e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = ( e: DragEvent<any>) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files as any;
    if(!files) return
    const joinFiles = [...files, ...fileList];
    const validateType = joinFiles.filter(item => FilesOk.includes(item.type) == true )
    setValueForm('files', validateType);
    setFileList(validateType)
    setError('files', {
      message: '',
      type: 'success'
    });
  };

  const handleChange = ( e: React.ChangeEvent<any>) => {
    const files = e.target.files;
    if(!files) return
    const joinFiles = [...files, ...fileList];
    const validateType = joinFiles.filter(item => FilesOk.includes(item.type) == true )
    setValueForm('files', validateType);
    setFileList(validateType)
    setError('files', {
      message: '',
      type: 'success'
    });
  };


  const deleteFile = (index: number) => {
    const newFileList = [...fileList]
    newFileList.splice(index, 1)
    setValueForm('files', newFileList);
    setFileList(newFileList)
    if(newFileList.length === 0){
      setError('files', {
        message: 'Ingrese un al menos un archivo',
        type: 'required'
      });
    }
  }

  return (
    <>
      <label className={styles.label}>Archivos </label>
      <div
        className={styles.dragAndDrop}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className={styles.contentActions}>
          <p>Arrastra tus archivos</p>
          <input 
            type="file"
            multiple
            className={styles.customFileInput} 
            accept='video/*, image/*' 
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.files}>
        {fileList && fileList.length > 0 && fileList.map((file, index) => (
          <li className={styles.filesItem} key={index}> 
            <span>
              {file?.name}
            </span>
            <button
              type='button'
              className={styles.deleteButton}
              onClick={() => deleteFile(index)}
            >
              eliminar
            </button>
          </li>
        ))}
      </div>
    </>
  )
}

export default DragAndDrop