import React from 'react';
<<<<<<< HEAD
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
=======
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
          <Route path="/" exact component={Home} />
          <Route path="/timeline/:contract" component={TimelineActs} />
          <Route path="/404" component={WithoutProcess} />
        </Router>
      </AppProvider>
      <GlobalStyle />
    </Router>
>>>>>>> 602963973cae396a962cc7d45c2ad9e9ca4c9cfb
  );
};
