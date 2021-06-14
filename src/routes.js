import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Listar from './pages/listar';
import Cadastro from './pages/cadastro';
import Editar from './pages/editar';

class Routes extends Component {
  render(){
    return(
      <Router>
        <Switch>
            <Route exact path="/">
              <Listar />
            </Route>
            <Route exact path="/editar/:id">
              <Editar />  
            </Route>
            <Route exact path="/cadastro">
              <Cadastro />
            </Route>
        </Switch>
      </Router>
    );
  };
};

export default Routes;