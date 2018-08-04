import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledProductTable = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.primary.main};
  border-right: none;
`;

const StyledRow = styled.div`
  display: flex;
`;

const ProductTable = ({ vacancies }) => (
  <StyledProductTable>
    <StyledRow>
      <div>
        Abonnement
      </div>
      <div>
        Periode
      </div>
      <div>
        Normale Prijs
      </div>
      <div>
        Prijs
      </div>
    </StyledRow>
  </StyledProductTable>
);

ProductTable.propTypes = {
  vacancies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    period: PropTypes.number.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired
  })).isRequired
};

export default ProductTable;
