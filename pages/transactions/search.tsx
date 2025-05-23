import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const FiltersSearchPage = () => {
  return <PlaceholderPage title="Filters & Search" path="/transactions/search" />;
};

FiltersSearchPage.getLayout = (page) => <Default pageName="Filters & Search">{page}</Default>;

export default FiltersSearchPage;
