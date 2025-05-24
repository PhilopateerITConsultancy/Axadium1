import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const ERC20TransfersPage = () => {
  return <PlaceholderPage title="ERC20 Transfers" path="/transfers/erc20" />;
};

ERC20TransfersPage.getLayout = (page: ReactNode) => <Default pageName="ERC20 Transfers">{page}</Default>;

export default ERC20TransfersPage;
