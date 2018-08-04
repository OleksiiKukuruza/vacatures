import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
`;

const Cell = styled.div`
  flex: ${props => props.size};
`;

Cell.propTypes = {
  size: PropTypes.number.isRequired,
};

export { Row, Cell };
