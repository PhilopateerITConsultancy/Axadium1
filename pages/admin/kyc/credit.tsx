import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const CreditScoreSubmissionsPage = () => {
  return <PlaceholderPage title="Credit Score Submissions" path="/admin/kyc/credit" />;
};

CreditScoreSubmissionsPage.getLayout = (page) => <Default pageName="Credit Score Submissions">{page}</Default>;

export default CreditScoreSubmissionsPage;
