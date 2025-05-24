import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const PrivacyPolicyPage = () => {
  return <PlaceholderPage title="Privacy Policy" path="/legal/privacy" />;
};

PrivacyPolicyPage.getLayout = (page: ReactNode) => <Default pageName="Privacy Policy">{page}</Default>;

export default PrivacyPolicyPage;
