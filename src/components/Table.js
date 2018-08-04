import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
`;

const Cell = styled.div`
  flex: ${props => props.size};
  display: flex;
  justify-content: ${props => props.justifyContent || 'flex-start'};
`;

Cell.propTypes = {
  size: PropTypes.number.isRequired,
  justifyContent: PropTypes.string
};

export { Row, Cell };
