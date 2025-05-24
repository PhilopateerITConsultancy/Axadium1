import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const NotificationsPage = () => {
  return <PlaceholderPage title="Notifications" path="/support/notifications" />;
};

NotificationsPage.getLayout = (page: ReactNode) => <Default pageName="Notifications">{page}</Default>;

export default NotificationsPage;
