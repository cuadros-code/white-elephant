import { DragEvent, useState } from 'react'
import styles from './DragAndDrop.module.css'

const DragAndDrop = () => {

  const [fileList, setFileList] = useState<any[]>([])

  const handleDragEnter = ( e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = ( e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = ( e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = ( e: DragEvent<any>) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files as any;
    if(!files) return
    setFileList([...files, ...fileList])
  };

  const handleChange = ( e: React.ChangeEvent<any>) => {
    const files = e.target.files;
    if(!files) return
    setFileList([...files, ...fileList])
  };


  const deleteFile = (index: number) => {
    const newFileList = [...fileList]
    newFileList.splice(index, 1)
    setFileList(newFileList)
  }

  return (
    <>
      <label className={styles.label}>Archivos </label>
      <div
        className={styles.dragAndDrop}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
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
              {file.name}
            </span>
            <button 
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