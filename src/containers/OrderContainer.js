import { connect } from 'react-redux';
import Order from '../components/Order';
import { getSelectedVacancy } from '../selectors';

export const mapStateToProps = state => ({
  vacancy: getSelectedVacancy(state),
});

const withData = connect(mapStateToProps);

const OrderContainer = withData(Order);

export default OrderContainer;
