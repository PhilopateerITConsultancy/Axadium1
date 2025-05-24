import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const SystemLogsPage = () => {
  return <PlaceholderPage title="System Logs" path="/admin/logs" />;
};

SystemLogsPage.getLayout = (page: ReactNode) => <Default pageName="System Logs">{page}</Default>;

export default SystemLogsPage;
