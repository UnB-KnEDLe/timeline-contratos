import React from 'react';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import AppProvider from './hooks/index';

export const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Home />
      </AppProvider>
      <GlobalStyle />
    </>
  );
};
