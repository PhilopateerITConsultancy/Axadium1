import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const SignInPage = () => {
  return <PlaceholderPage title="Sign In" path="/signin" />;
};

SignInPage.getLayout = (page: ReactNode) => <Default pageName="Sign In">{page}</Default>;

export default SignInPage;
