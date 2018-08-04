import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OrderValues from './OrderValues';
import Button from './Button';

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

export const StyledFeatures = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => 2 * props.theme.spacingUnit}px 0;
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
      <StyledFeatures>
        {features.map(feature => (
          <div key={feature}>
            > {feature}
          </div>
        ))}
      </StyledFeatures>
    </StyledExtraInfo>
    <div>
      <OrderValues
        name={name}
        originalPrice={originalPrice}
        discount={discount}
      />
      <StyledButton fullWidth>
        Bestellen
      </StyledButton>
    </div>
  </StyledOrder>
);

Order.propTypes = {
  vacancy: PropTypes.shape({
    name: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
};

export default Order;
