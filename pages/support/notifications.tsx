import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const NotificationsPage = () => {
  return <PlaceholderPage title="Notifications" path="/support/notifications" />;
};

NotificationsPage.getLayout = (page) => <Default pageName="Notifications">{page}</Default>;

export default NotificationsPage;
