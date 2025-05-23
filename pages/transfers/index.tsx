import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const TransfersPage = () => {
  return <PlaceholderPage title="Transfers" path="/transfers" />;
};

TransfersPage.getLayout = (page) => <Default pageName="Transfers">{page}</Default>;

export default TransfersPage;
