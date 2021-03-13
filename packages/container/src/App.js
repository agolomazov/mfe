import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MarketingApp from './components/MarketingApp';
import AutApp from './components/AuthApp';
import Header from './components/Header';

import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import AuthApp from './components/AuthApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthApp} />
          <Route path="/" component={MarketingApp} />
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
};