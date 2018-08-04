import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { fetchVacancies } from '../actions/vacanciesActions';
import Main from '../components/Main';

const withFetch = connect(null, {
  fetchVacancies
});

export const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.fetchVacancies();
  }
});

const MainContainer = compose(
  withFetch,
  withLifecycle
)(Main);

export default MainContainer;
