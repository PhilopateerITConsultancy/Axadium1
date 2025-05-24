import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const StakingPage = () => {
  return <PlaceholderPage title="Staking" path="/staking" />;
};

StakingPage.getLayout = (page: ReactNode) => <Default pageName="Staking">{page}</Default>;

export default StakingPage;
