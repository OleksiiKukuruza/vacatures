import React from 'react';
import styled from 'styled-components';
import Order from './Order';
import ProductList from './ProductList';

const StyledMain = styled.div`
  display: flex;
`;

const Main = () => (
  <StyledMain>
    <ProductList />
    <Order />
  </StyledMain>
);

export default Main;
