import React from 'react';
import PropTypes from 'prop-types';
import { PacmanLoader } from 'react-spinners';
import styled, { withTheme } from 'styled-components';

const StyledLoader = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThemedLoader = ({ theme }) => (
  <StyledLoader>
    <PacmanLoader color={theme.primary.main} />
  </StyledLoader>
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
