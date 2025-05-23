import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const PrivacyPolicyPage = () => {
  return <PlaceholderPage title="Privacy Policy" path="/legal/privacy" />;
};

PrivacyPolicyPage.getLayout = (page) => <Default pageName="Privacy Policy">{page}</Default>;

export default PrivacyPolicyPage;
