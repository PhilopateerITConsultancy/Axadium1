import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const StakingAPYConfigPage = () => {
  return <PlaceholderPage title="Staking/APY Config" path="/admin/settings/staking" />;
};

StakingAPYConfigPage.getLayout = (page: ReactNode) => <Default pageName="Staking/APY Config">{page}</Default>;

export default StakingAPYConfigPage;
