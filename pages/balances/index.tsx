import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const BalancesPage = () => {
  return <PlaceholderPage title="Balances" path="/balances" />;
};

BalancesPage.getLayout = (page: ReactNode) => <Default pageName="Balances">{page}</Default>;

export default BalancesPage;
