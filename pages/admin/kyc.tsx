import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const KYCAdminPage = () => {
  return <PlaceholderPage title="KYC Admin" path="/admin/kyc" />;
};

KYCAdminPage.getLayout = (page) => <Default pageName="KYC Admin">{page}</Default>;

export default KYCAdminPage;
