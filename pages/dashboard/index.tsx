import { ReactElement } from 'react';
import { LayoutDashboard, CardCreate } from 'src/components';
import styles from 'styles/DashboardIndex.module.css';

const Dashboard = () => {
  return (
    <>
      <div className={styles.container}>
        <CardCreate />
      </div>
    </>
  )
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>
}