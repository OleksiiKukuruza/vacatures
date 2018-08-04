import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '../store/configureStore';
import theme from '../theme';
import Main from '../components/Main';

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
      <BrowserRouter>
        <StyledApp>
          <Main />
        </StyledApp>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
