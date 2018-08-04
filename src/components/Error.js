import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledError = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.error}
`;

const Error = ({ error }) => (
  <StyledError>
    Oops, something went wrong
    <div>
      {error}
    </div>
  </StyledError>
);

Error.propTypes = {
  error: PropTypes.string.isRequired
};

export default Error;
