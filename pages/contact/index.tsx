import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const ContactPage = () => {
  return <PlaceholderPage title="Contact" path="/contact" />;
};

ContactPage.getLayout = (page: ReactNode) => <Default pageName="Contact">{page}</Default>;

export default ContactPage;
