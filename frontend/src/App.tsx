import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import AppProvider from './hooks/index';

export const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/contract" exact component={Home} />
        </Router>
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
};
