import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const StatusTrackerPage = () => {
  return <PlaceholderPage title="Status Tracker" path="/kyc/status" />;
};

StatusTrackerPage.getLayout = (page) => <Default pageName="Status Tracker">{page}</Default>;

export default StatusTrackerPage;
