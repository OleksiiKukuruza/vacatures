import React from 'react';
import styled from 'styled-components';
import Order from './Order';
import ProductList from './ProductList';

const StyledMain = styled.div`
  flex: 1;
  display: flex;
  margin: 0 10%;
`;

const Main = () => (
  <StyledMain>
    <ProductList />
    <Order />
  </StyledMain>
);

export default Main;
