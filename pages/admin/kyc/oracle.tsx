import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const OracleSimulationsPage = () => {
  return <PlaceholderPage title="Oracle Simulations" path="/admin/kyc/oracle" />;
};

OracleSimulationsPage.getLayout = (page: ReactNode) => <Default pageName="Oracle Simulations">{page}</Default>;

export default OracleSimulationsPage;
