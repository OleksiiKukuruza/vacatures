import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { configureStore } from '../store/configureStore';
import theme from '../theme';
import MainContainer from '../containers/MainContainer';

const store = configureStore();

const StyledApp = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <StyledApp>
        <MainContainer />
      </StyledApp>
    </ThemeProvider>
  </Provider>
);

export default App;
