import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const ReportsPage = () => {
  return <PlaceholderPage title="Reports" path="/admin/reports" />;
};

ReportsPage.getLayout = (page) => <Default pageName="Reports">{page}</Default>;

export default ReportsPage;
