import { ReactElement } from 'react';
import { Layout } from 'src/components';
import LayoutDashboard from 'src/components/LayoutDasboard';

const Dashboard = () => {
  return (
    <>
      <h1>Dasboard</h1>
    </>
  )
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutDashboard>{page}</LayoutDashboard>
  )
}