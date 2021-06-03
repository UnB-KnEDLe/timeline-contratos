import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import AppProvider from './hooks/index';

import { Home } from './pages/Home';
import { Timeline } from './pages/TimeLine';
import { WithoutProcess } from './pages/WithoutProcess';

export const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/timeline" exact component={Timeline} />
          <Route path="/404" exact component={WithoutProcess} />
        </Router>
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
};
