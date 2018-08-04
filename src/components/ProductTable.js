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
`;

const ProductTable = ({ vacancies, selectedVacancyId, selectVacancy }) => (
  <StyledProductTable>
    <Row>
      <Cell size={6}>
        Abonnement
      </Cell>
      <Cell size={2}>
        Periode
      </Cell>
      <Cell size={2}>
        Normale Prijs
      </Cell>
      <Cell size={2}>
        Prijs
      </Cell>
    </Row>
    {vacancies.map(vacancy => (
      <StyledRow
        key={vacancy.id}
        onClick={() => selectVacancy(vacancy.id)}
        active={selectedVacancyId === vacancy.id}
      >
        <Cell size={6}>
          <input
            type="radio"
            readOnly
            checked={selectedVacancyId === vacancy.id}
          />
          {vacancy.name}
        </Cell>
        <Cell size={2}>
          {vacancy.period}
        </Cell>
        <Cell size={2}>
          {vacancy.originalPrice}
        </Cell>
        <Cell size={2}>
          {vacancy.originalPrice - vacancy.discount}
        </Cell>
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
