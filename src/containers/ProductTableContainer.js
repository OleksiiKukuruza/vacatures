import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import Loader from '../components/Loader';
import Error from '../components/Error';
import ProductTable from '../components/ProductTable';
import { selectVacancy } from '../actions/vacanciesActions';

const mapStateToProps = ({ vacancies }) => ({
  vacancies: vacancies.list,
  selectedVacancyId: vacancies.selectedVacancyId,
  error: vacancies.error,
  loading: vacancies.loading
});

const withData = connect(mapStateToProps, {
  selectVacancy
});

const withLoader = branch(
  ({ loading }) => loading,
  renderComponent(Loader)
);

const withError = branch(
  ({ error }) => !!error,
  renderComponent(Error)
);

const ProductTableContainer = compose(
  withData,
  withLoader,
  withError
)(ProductTable);

export default ProductTableContainer;
