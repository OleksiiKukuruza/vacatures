import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import Loader from '../components/Loader';
import Error from '../components/Error';
import ProductTable from '../components/ProductTable';
import { selectVacancy } from '../actions/vacanciesActions';
import {
  getSelectedVacancyId,
  getVacancies,
  getVacanciesError,
  getVacanciesLoading
} from '../selectors';

export const mapStateToProps = state => ({
  vacancies: getVacancies(state),
  selectedVacancyId: getSelectedVacancyId(state),
  error: getVacanciesError(state),
  loading: getVacanciesLoading(state)
});

const withData = connect(mapStateToProps, {
  selectVacancy
});

export const withLoader = branch(
  ({ loading }) => loading,
  renderComponent(Loader)
);

export const withError = branch(
  ({ error }) => !!error,
  renderComponent(Error)
);

const ProductTableContainer = compose(
  withData,
  withLoader,
  withError
)(ProductTable);

export default ProductTableContainer;
