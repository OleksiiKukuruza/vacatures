import React from 'react';
import styled from 'styled-components';
import ProductTableContainer from '../containers/ProductTableContainer';

export const StyledProductList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.primary.main};
  padding: ${props => 2 * props.theme.spacingUnit}px;
`;

export const StyledHeader = styled.h3`
  margin: 0 0 ${props => 2 * props.theme.spacingUnit}px;
  color: ${props => props.theme.primary.main};
`;

export const StyledSubHeader = styled.div`
  margin-bottom: ${props => 2 * props.theme.spacingUnit}px;
`;

const ProductList = () => (
  <StyledProductList>
    <StyledHeader>
      Online Vacatures
    </StyledHeader>
    <StyledSubHeader>
      Introductiepakketten
    </StyledSubHeader>
    <ProductTableContainer />
  </StyledProductList>
);

export default ProductList;
