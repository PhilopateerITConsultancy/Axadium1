import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const ERC20BalancesPage = () => {
  return <PlaceholderPage title="ERC20 Balances" path="/balances/erc20" />;
};

ERC20BalancesPage.getLayout = (page: ReactNode) => <Default pageName="ERC20 Balances">{page}</Default>;

export default ERC20BalancesPage;
