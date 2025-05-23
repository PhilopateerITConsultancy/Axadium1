import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const EFTTransfersPage = () => {
  return <PlaceholderPage title="EFT Transfers" path="/transfers/eft" />;
};

EFTTransfersPage.getLayout = (page) => <Default pageName="EFT Transfers">{page}</Default>;

export default EFTTransfersPage;
