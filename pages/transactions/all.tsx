import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const AllTransactionsPage = () => {
  return <PlaceholderPage title="All Transactions" path="/transactions/all" />;
};

AllTransactionsPage.getLayout = (page: ReactNode) => <Default pageName="All Transactions">{page}</Default>;

export default AllTransactionsPage;
