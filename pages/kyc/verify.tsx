import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const IdentityVerificationPage = () => {
  return <PlaceholderPage title="Identity Verification" path="/kyc/verify" />;
};

IdentityVerificationPage.getLayout = (page: ReactNode) => <Default pageName="Identity Verification">{page}</Default>;

export default IdentityVerificationPage;
