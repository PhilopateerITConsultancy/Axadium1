import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const AboutPage = () => {
  return <PlaceholderPage title="About" path="/about" />;
};

AboutPage.getLayout = (page: ReactNode) => <Default pageName="About">{page}</Default>;

export default AboutPage;
