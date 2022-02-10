import { getDownloadURL, StorageReference, uploadBytes } from "firebase/storage"
import { useState } from "react"

const metadata = {
  contentType: 'image/png',
};

const useUploadFile = () => {

  const [loadingFile, setLoadingFile] = useState(false)


  const uploadFile = async ( reference: StorageReference, file: any) => { 
    try {
      setLoadingFile(true)
      await uploadBytes(reference, file, metadata )
      const downloadURL = await getDownloadURL(reference)
      return downloadURL
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingFile(false)
    }
  }

  return {
    uploadFile,
    loadingFile
  }
}

export default useUploadFile