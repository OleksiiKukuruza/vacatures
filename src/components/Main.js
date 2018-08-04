import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductList from './ProductList';
import OrderContainer from '../containers/OrderContainer';

const StyledMain = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
`;

const Main = ({ selectedVacancyId }) => (
  <StyledMain>
    <ProductList />
    {selectedVacancyId && <OrderContainer />}
  </StyledMain>
);

Main.propTypes = {
  selectedVacancyId: PropTypes.string
};

export default Main;
