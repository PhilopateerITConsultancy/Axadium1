import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const StakingAPYPage = () => {
  return <PlaceholderPage title="Staking APY" path="/dashboard/apy" />;
};

StakingAPYPage.getLayout = (page: ReactNode) => <Default pageName="Staking APY">{page}</Default>;

export default StakingAPYPage;
