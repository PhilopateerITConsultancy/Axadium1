import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const OracleSimulationsPage = () => {
  return <PlaceholderPage title="Oracle Simulations" path="/admin/kyc/oracle" />;
};

OracleSimulationsPage.getLayout = (page) => <Default pageName="Oracle Simulations">{page}</Default>;

export default OracleSimulationsPage;
