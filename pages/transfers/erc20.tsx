import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const ERC20TransfersPage = () => {
  return <PlaceholderPage title="ERC20 Transfers" path="/transfers/erc20" />;
};

ERC20TransfersPage.getLayout = (page) => <Default pageName="ERC20 Transfers">{page}</Default>;

export default ERC20TransfersPage;
