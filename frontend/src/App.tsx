import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import AppProvider from './hooks/index';

import { Home } from './pages/Home';
import { TimelineActs } from './pages/TimeLine';
import { WithoutProcess } from './pages/WithoutProcess';

export const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Router>
          <Route path="/alterar" exact component={Home} />
          <Route path="/" component={TimelineActs} />
          <Route path="/404" component={WithoutProcess} />
        </Router>
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
};
