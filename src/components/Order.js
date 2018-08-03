import React from 'react';
import styled from 'styled-components';
import jobImg from '../assets/job.jpg';

const StyledOrder = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.primary.main};
  color: ${props => props.theme.primary.contrastText};
  padding: ${props => 2 * props.theme.spacingUnit}px;
`;

const JobImg = styled.img`
  height: 100px;
  margin: ${props => 4 * props.theme.spacingUnit}px 0;
`;

const Order = () => (
  <StyledOrder>
    Bestelling
    <JobImg src={jobImg} alt="Job" />
    Standaard Vacature
    <div>
      > 60 dagen online
    </div>
  </StyledOrder>
);

export default Order;
