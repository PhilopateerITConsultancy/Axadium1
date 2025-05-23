import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const EFTBalancesPage = () => {
  return <PlaceholderPage title="EFT Balances" path="/balances/eft" />;
};

EFTBalancesPage.getLayout = (page) => <Default pageName="EFT Balances">{page}</Default>;

export default EFTBalancesPage;
