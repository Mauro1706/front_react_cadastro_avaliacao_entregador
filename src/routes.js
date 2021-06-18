import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ListarAvaliacao from './pages/avaliacao/listar';
import CadastroAvaliacao from './pages/avaliacao/cadastro';
import EditarAvaliacao from './pages/avaliacao/editar';
import DetalhesAvaliacao from './pages/avaliacao/detalhes';
import DeletarAvaliacao from './pages/avaliacao/deletar';
import Login from './pages/users/login';
import CadastroUsuario from './pages/users/cadastro';
import ListarUsers from './pages/users/listar';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/novo-usuario" component={CadastroUsuario} />
            <Route exact path="/listarusuarios" component={ListarUsers} />
            <Route exact path="/listaravaliacao" component={ListarAvaliacao} />
            <Route exact path="/detalhes/:id" component={DetalhesAvaliacao} />
            <Route exact path="/editar/:id" component={EditarAvaliacao} />
            <Route exact path="/cadastro" component={CadastroAvaliacao} />
            <Route exact path="/deletar/:id" component={DeletarAvaliacao} />
        </Switch>
    </BrowserRouter>
)

export default Routes;