import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const TransactionsPage = () => {
  return <PlaceholderPage title="Transactions" path="/transactions" />;
};

TransactionsPage.getLayout = (page: ReactNode) => <Default pageName="Transactions">{page}</Default>;

export default TransactionsPage;
