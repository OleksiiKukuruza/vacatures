import React from 'react';
import styled from 'styled-components';
import ProductTableContainer from '../containers/ProductTableContainer';

const StyledProductList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.primary.main};
  border-right: none;
`;

const StyledHeader = styled.h3`
  color: ${props => props.theme.primary.main};
`;

const ProductList = () => (
  <StyledProductList>
    <StyledHeader>
      Online Vacatures
    </StyledHeader>
    <div>
      Introductiepakketten
    </div>
    <ProductTableContainer />
  </StyledProductList>
);

export default ProductList;
