import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const IdentityVerificationsPage = () => {
  return <PlaceholderPage title="Identity Verifications" path="/admin/kyc/verifications" />;
};

IdentityVerificationsPage.getLayout = (page) => <Default pageName="Identity Verifications">{page}</Default>;

export default IdentityVerificationsPage;
