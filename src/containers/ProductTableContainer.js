import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import Loader from '../components/Loader';
import ProductTable from '../components/ProductTable';
import { selectVacancy } from '../actions/vacanciesActions';

const mapStateToProps = ({ vacancies }) => ({
  vacancies: vacancies.list,
  selectedVacancyId: vacancies.selectedVacancyId,
  loading: vacancies.loading
});

const withData = connect(mapStateToProps, {
  selectVacancy
});

const withLoader = branch(
  ({ loading }) => loading,
  renderComponent(Loader)
);

const ProductTableContainer = compose(
  withData,
  withLoader
)(ProductTable);

export default ProductTableContainer;
