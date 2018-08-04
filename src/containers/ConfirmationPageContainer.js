import { connect } from 'react-redux';
import { branch, compose, lifecycle, renderComponent } from 'recompose';
import ConfirmationPage from '../components/ConfirmationPage';
import { getVacancyById, getVacanciesLoading } from '../selectors';
import { fetchVacancy } from '../actions/vacanciesActions';
import Loader from '../components/Loader';

export const mapStateToProps = (state, { id }) => ({
  vacancy: getVacancyById(state, id),
  loading: getVacanciesLoading(state)
});

const withFetch = connect(mapStateToProps, {
  fetchVacancy
});

export const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.fetchVacancy(this.props.id)
  }
});

export const withLoader = branch(
  ({ loading, vacancy }) => loading || !vacancy,
  renderComponent(Loader)
);

const ConfirmationPageContainer = compose(
  withFetch,
  withLifecycle,
  withLoader
)(ConfirmationPage);

export default ConfirmationPageContainer;
