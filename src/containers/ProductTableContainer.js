import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import Loader from '../components/Loader';
import ProductTable from '../components/ProductTable';

const mapStateToProps = ({ vacancies }) => ({
  vacancies: vacancies.list,
  loading: vacancies.loading
});

const withData = connect(mapStateToProps);

const withLoader = branch(
  ({ loading }) => loading,
  renderComponent(Loader)
);

const ProductTableContainer = compose(
  withData,
  withLoader
)(ProductTable);

export default ProductTableContainer;
