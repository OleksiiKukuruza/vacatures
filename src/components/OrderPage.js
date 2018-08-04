import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductList from './ProductList';
import OrderContainer from '../containers/OrderContainer';

const StyledOrderPage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const OrderPage = ({ selectedVacancyId }) => (
  <StyledOrderPage>
    <ProductList />
    {selectedVacancyId && <OrderContainer />}
  </StyledOrderPage>
);

OrderPage.propTypes = {
  selectedVacancyId: PropTypes.string
};

export default OrderPage;
