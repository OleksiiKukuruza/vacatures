import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { fetchVacancies } from '../actions/vacanciesActions';
import { getSelectedVacancyId } from '../selectors';
import OrderPage from '../components/OrderPage';

export const mapStateToProps = state => ({
  selectedVacancyId: getSelectedVacancyId(state)
});

const withFetch = connect(mapStateToProps, {
  fetchVacancies
});

export const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.fetchVacancies();
  }
});

const OrderPageContainer = compose(
  withFetch,
  withLifecycle
)(OrderPage);

export default OrderPageContainer;
