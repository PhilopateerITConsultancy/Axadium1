import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const IdentityVerificationPage = () => {
  return <PlaceholderPage title="Identity Verification" path="/kyc/verify" />;
};

IdentityVerificationPage.getLayout = (page) => <Default pageName="Identity Verification">{page}</Default>;

export default IdentityVerificationPage;
