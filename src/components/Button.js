import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  font-size: 1.3rem;
  background-color: ${props => props.theme.primary.contrastText};
  color: ${props => props.theme.primary.main};
  border: none;
  outline: none;
  border-radius: ${props => props.theme.spacingUnit / 2}px;
  padding: ${props => props.theme.spacingUnit}px 0;
  transition: filter 300ms ease-in;
  
  :hover {
    filter: brightness(85%);
  }
`;

Button.propTypes = {
  fullWidth: PropTypes.bool
};

export default Button;
