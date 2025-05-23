import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const MyLoansPage = () => {
  return <PlaceholderPage title="My Loans" path="/loans/my-loans" />;
};

MyLoansPage.getLayout = (page) => <Default pageName="My Loans">{page}</Default>;

export default MyLoansPage;
