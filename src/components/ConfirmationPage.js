import React from 'react';
import PropTypes from 'prop-types';
import OrderValues from './OrderValues';
import FeatureList from './FeatureList';

const ConfirmationPage = ({
  vacancy: {
    name,
    originalPrice,
    discount,
    features
  }
}) => (
  <div>
    {name}
    <FeatureList features={features} />
    <OrderValues
      name={name}
      originalPrice={originalPrice}
      discount={discount}
    />
  </div>
);

ConfirmationPage.propTypes = {
  vacancy: PropTypes.shape({
    name: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default ConfirmationPage;
