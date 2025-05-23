import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const KYCCreditPage = () => {
  return <PlaceholderPage title="KYC & Credit" path="/kyc" />;
};

KYCCreditPage.getLayout = (page) => <Default pageName="KYC & Credit">{page}</Default>;

export default KYCCreditPage;
