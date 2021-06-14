import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Listar from './pages/listar';
import Cadastro from './pages/cadastro';
import Editar from './pages/editar';
import Detalhes from './pages/detalhes';

const Routes = () => (
    
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Listar} />
      <Route exact path="/detalhes/:id" component={Detalhes} />
      <Route exact path="/editar/:id" component={Editar} />
      <Route exact path="/cadastro" component={Cadastro} />
    </Switch>
  </BrowserRouter>
)

export default Routes;