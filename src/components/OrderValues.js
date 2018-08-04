import React from 'react';
import PropTypes from 'prop-types';
import { Row, Cell } from './Table';
import styled from 'styled-components';

export const StyledOrderValues = styled.div`
  border-top: 1px solid ${props => props.theme.primary.contrastText};
  border-bottom: 1px solid ${props => props.theme.primary.contrastText};
  padding: ${props => 3 * props.theme.spacingUnit}px 0;
`;

export const StyledRow = styled(Row)`
  padding: ${props => props.theme.spacingUnit / 2}px 0;
`;

const StyledBoldCell = styled(Cell)`
  font-weight: bold;
`;

const OrderValues = ({ name, originalPrice, discount }) => (
  <StyledOrderValues>
    <StyledRow>
      <Cell size={10}>
        Prijs {name}
      </Cell>
      <Cell size={2} justifyContent="flex-end">
        € {originalPrice}
      </Cell>
    </StyledRow>
    <StyledRow>
      <Cell size={10}>
        Korting
      </Cell>
      <Cell size={2} justifyContent="flex-end">
        - € {discount}
      </Cell>
    </StyledRow>
    <StyledRow>
      <StyledBoldCell size={10}>
        Totaal
      </StyledBoldCell>
      <StyledBoldCell size={2} justifyContent="flex-end">
        € {originalPrice - discount}
      </StyledBoldCell>
    </StyledRow>
  </StyledOrderValues>
);

OrderValues.propTypes = {
  name: PropTypes.string.isRequired,
  originalPrice: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired
};

export default OrderValues;
