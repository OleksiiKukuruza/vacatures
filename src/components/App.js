import React from 'react';
import styled from 'styled-components';
import { configureStore } from '../store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

const AppWrapper = styled.div`
  height: 100%;
  padding: 16px;
`;

const App = () => (
  <Provider store={store}>
    <AppWrapper>
    </AppWrapper>
  </Provider>
);

export default App;
