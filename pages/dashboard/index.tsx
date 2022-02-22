import { ReactElement } from 'react';
import LayoutDashboard from 'src/components/LayoutDasboard';
import styles from 'styles/DashboardIndex.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      
    </div>
  )
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>
}