import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const ActiveLoansPage = () => {
  return <PlaceholderPage title="Active Loans" path="/dashboard/loans" />;
};

ActiveLoansPage.getLayout = (page) => <Default pageName="Active Loans">{page}</Default>;

export default ActiveLoansPage;
