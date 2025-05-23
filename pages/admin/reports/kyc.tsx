import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const KYCStatsPage = () => {
  return <PlaceholderPage title="KYC Stats" path="/admin/reports/kyc" />;
};

KYCStatsPage.getLayout = (page: ReactNode) => <Default pageName="KYC Stats">{page}</Default>;

export default KYCStatsPage;
