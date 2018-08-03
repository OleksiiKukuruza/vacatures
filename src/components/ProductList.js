import React from 'react';
import styled from 'styled-components';

const StyledProductList = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.primary.main};
  border-right: none;
`;

const ProductList = () => (
  <StyledProductList>
    Product List
  </StyledProductList>
);

export default ProductList;
