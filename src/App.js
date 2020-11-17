import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import NotFound from './components/NotFound';
import Controle from './components/Controle';
import Despesas from './components/Despesas';
import Receitas from './components/Receitas';
import ControleReceitas from './components/ControleReceitas';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/main" component={Main} />
      <Route exact path="/controle-despesas" component={Controle} />
      <Route exact path="/controle-receitas" component={ControleReceitas} />
      <Route exact path="/despesas" component={Despesas} />
      <Route exact path="/receitas" component={Receitas} />
      <Route path="/" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
