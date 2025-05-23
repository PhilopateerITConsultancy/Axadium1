import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const ApplyforLoanPage = () => {
  return <PlaceholderPage title="Apply for Loan" path="/loans/apply" />;
};

ApplyforLoanPage.getLayout = (page) => <Default pageName="Apply for Loan">{page}</Default>;

export default ApplyforLoanPage;
