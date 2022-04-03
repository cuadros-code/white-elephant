import { ReactElement, useEffect, useState } from 'react';
import { LayoutDashboard, CardCreate } from 'src/components';
import styles from 'styles/DashboardIndex.module.css';
import { collection, query, where, getDocs } from "firebase/firestore";
import { useStoreAuth } from 'src/store/authStore';
import { db } from 'src/config/firebaseConfig';
import { IResponsePost } from 'src/interfaces/ICommon';

const Dashboard = () => {

  const { user } = useStoreAuth( auth => auth )
  const [ post, setPost ] = useState<IResponsePost[] | null >(null)

  useEffect(() => {
    
    const getPost = async () => {
      const q = query(collection(db, "post"), where("uid", "==", user?.id));
      const post = await getDocs(q)
      if(!post) return
      let data: IResponsePost[] = []
      post.forEach( (item: any) => {
         data.push(item.data())
      })
      data && setPost(data)
    }
    getPost()

  }, [])
  


  return (
    <>
      <div className={styles.container}>
        {
          post && post.map( (item: IResponsePost, index: number) => (
            <CardCreate key={index} item={item} />
          ))
        }
      </div>
    </>
  )
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>
}