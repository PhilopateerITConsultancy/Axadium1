import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const FiltersSearchPage = () => {
  return <PlaceholderPage title="Filters & Search" path="/transactions/search" />;
};

FiltersSearchPage.getLayout = (page: ReactNode) => <Default pageName="Filters & Search">{page}</Default>;

export default FiltersSearchPage;
