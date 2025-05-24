import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const ContactSupportPage = () => {
  return <PlaceholderPage title="Contact Support" path="/support/contact" />;
};

ContactSupportPage.getLayout = (page: ReactNode) => <Default pageName="Contact Support">{page}</Default>;

export default ContactSupportPage;
