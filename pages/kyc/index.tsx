import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const KYCCreditPage = () => {
  return <PlaceholderPage title="KYC & Credit" path="/kyc" />;
};

KYCCreditPage.getLayout = (page: ReactNode) => <Default pageName="KYC & Credit">{page}</Default>;

export default KYCCreditPage;
