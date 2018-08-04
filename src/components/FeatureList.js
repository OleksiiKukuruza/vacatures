import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledFeatures = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => 2 * props.theme.spacingUnit}px 0;
`;

const FeatureList = ({ features }) => (
  <StyledFeatures>
    {features.map(feature => (
      <div key={feature}>
        > {feature}
      </div>
    ))}
  </StyledFeatures>
);

FeatureList.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FeatureList;
