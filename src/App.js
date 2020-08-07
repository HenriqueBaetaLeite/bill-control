import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import NotFound from './components/NotFound';
import Controle from './components/Controle';
import Despesas from './components/Despesas';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/controle" component={Controle} />
      <Route exact path="/despesas" component={Despesas} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
