import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import OrderPageContainer from '../containers/OrderPageContainer';
import ConfirmationPageContainer from '../containers/ConfirmationPageContainer';

const StyledMain = styled.div`
  width: 80%;
  height: 80%;
`;

const Main = () => (
  <StyledMain>
    <Switch>
      <Route
        path="/:id"
        render={(props) => <ConfirmationPageContainer id={props.match.params.id} />}
      />
      <Route
        path="/"
        render={() => <OrderPageContainer />}
      />
    </Switch>
  </StyledMain>
);

export default Main;
