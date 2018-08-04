import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OrderValues from './OrderValues';
import Button from './Button';
import { Link } from 'react-router-dom';
import FeatureList from './FeatureList';

export const StyledOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.primary.main};
  color: ${props => props.theme.primary.contrastText};
  padding: ${props => 2 * props.theme.spacingUnit}px;
`;

const StyledExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobImg = styled.img`
  width: 100%;
  margin: ${props => 4 * props.theme.spacingUnit}px 0;
`;

export const StyledButton = styled(Button)`
  margin-top: ${props => 2 * props.theme.spacingUnit}px;
`;

const Order = ({
  vacancy: {
    id,
    name,
    features,
    originalPrice,
    discount,
    image
  }
}) => (
  <StyledOrder>
    <StyledExtraInfo>
      Bestelling
      <JobImg src={image} alt="Job Image" />
      {name}
      <FeatureList features={features} />
    </StyledExtraInfo>
    <div>
      <OrderValues
        name={name}
        originalPrice={originalPrice}
        discount={discount}
      />
      <Link to={`/${id}`}>
        <StyledButton fullWidth>
          Bestellen
        </StyledButton>
      </Link>
    </div>
  </StyledOrder>
);

Order.propTypes = {
  vacancy: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
};

export default Order;
