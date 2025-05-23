import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const LoanTermsLTVPage = () => {
  return <PlaceholderPage title="Loan Terms & LTV" path="/admin/settings/loans" />;
};

LoanTermsLTVPage.getLayout = (page) => <Default pageName="Loan Terms & LTV">{page}</Default>;

export default LoanTermsLTVPage;
