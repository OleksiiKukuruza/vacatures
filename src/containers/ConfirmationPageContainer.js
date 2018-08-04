import { connect } from 'react-redux';
import ConfirmationPage from '../components/ConfirmationPage';
import { getSelectedVacancy } from '../selectors';

export const mapStateToProps = state => ({
  vacancy: getSelectedVacancy(state)
});

const ConfirmationPageContainer = connect(mapStateToProps)(ConfirmationPage);

export default ConfirmationPageContainer;
