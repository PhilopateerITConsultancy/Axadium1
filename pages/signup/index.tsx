import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const SignUpPage = () => {
  return <PlaceholderPage title="Sign Up" path="/signup" />;
};

SignUpPage.getLayout = (page: ReactNode) => <Default pageName="Sign Up">{page}</Default>;

export default SignUpPage;
