import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Cell, Row } from './Table';

const StyledProductTable = styled.div`
  display: flex;
  flex-direction: column;
  border-right: none;
`;

export const StyledRow = styled(Row)`
  cursor: pointer;
  background-color: ${({ active, theme }) => active ? theme.background : theme.primary.contrastText};
  padding: ${props => 2 * props.theme.spacingUnit}px;
`;

const StyledHeaderRow = styled(StyledRow)`
  font-size: 0.8rem;
`;

const StyledCrossedCell = styled(Cell)`
  text-decoration: line-through;
`;

const StyledBoldCell = styled(Cell)`
  font-weight: bold;
`;

export const StyledInput = styled.input`
  margin-right: ${props => props.theme.spacingUnit}px;
`;

const ProductTable = ({ vacancies, selectedVacancyId, selectVacancy }) => (
  <StyledProductTable>
    <StyledHeaderRow>
      <Cell size={6}>
        Abonnement
      </Cell>
      <Cell size={2} justifyContent="center">
        Periode
      </Cell>
      <Cell size={2} justifyContent="center">
        Normale Prijs
      </Cell>
      <Cell size={2} justifyContent="flex-end">
        Prijs
      </Cell>
    </StyledHeaderRow>
    {vacancies.map(vacancy => (
      <StyledRow
        key={vacancy.id}
        onClick={() => selectVacancy(vacancy.id)}
        active={selectedVacancyId === vacancy.id}
      >
        <Cell size={6}>
          <StyledInput
            type="radio"
            readOnly
            checked={selectedVacancyId === vacancy.id}
          />
          {vacancy.name}
        </Cell>
        <Cell size={2} justifyContent="center">
          {vacancy.period}
        </Cell>
        <StyledCrossedCell size={2} justifyContent="center">
          € {vacancy.originalPrice}
        </StyledCrossedCell>
        <StyledBoldCell size={2} justifyContent="flex-end">
          € {vacancy.originalPrice - vacancy.discount}
        </StyledBoldCell>
      </StyledRow>
    ))}
  </StyledProductTable>
);

ProductTable.propTypes = {
  vacancies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    period: PropTypes.number.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired
  })).isRequired,
  selectedVacancyId: PropTypes.string,
  selectVacancy: PropTypes.func.isRequired
};

export default ProductTable;
