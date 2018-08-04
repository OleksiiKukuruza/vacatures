import React from 'react';
import PropTypes from 'prop-types';
import { PacmanLoader } from 'react-spinners';
import { withTheme } from 'styled-components';

const ThemedLoader = ({ theme }) => (
  <PacmanLoader
    color={theme.primary.main}
  />
);

ThemedLoader.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.shape({
      main: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const Loader = withTheme(ThemedLoader);

export default Loader;
