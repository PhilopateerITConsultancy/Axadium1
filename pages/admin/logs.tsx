import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const SystemLogsPage = () => {
  return <PlaceholderPage title="System Logs" path="/admin/logs" />;
};

SystemLogsPage.getLayout = (page) => <Default pageName="System Logs">{page}</Default>;

export default SystemLogsPage;
