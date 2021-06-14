import React, { Component } from 'react';
import api from '../config/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aval: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/listar');    
    this.setState({aval: response.data});
  }

  render(){

    const { aval } = this.state;

    return(
      <div class="my-5 container">
        <h1>Listar Avaliados</h1>
        <div class="text-right"><a href="/cadastro" class="btn btn-primary" value="Editar">Nova Avaliação</a></div>
        <div class="my-5">
          <table class="table table-responsive table-hover">
            <thead>
              <tr class="text-center bg-info"> 
                <th>Código</th>
                <th>Entregador</th>
                <th>Avaliador</th>
                <th>Data</th>
                <th>Observações</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
            {aval.map(avaliacao => (
              <tr key="{avaliacao._id}">
                <td>{avaliacao._id}</td>
                <td>{avaliacao.nomeEntregador}</td>
                <td>{avaliacao.nomeAvaliador}</td>
                <td>{avaliacao.data}</td>
                <td>{avaliacao.observacao}</td>
                <td class="text-center">
                  <a href="/editar/60c2abd836d4c1312cab1063" class="btn btn-warning" value="Editar">Editar</a>
                  <a href="/editar" class="btn btn-danger" value="Editar">Excluir</a>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
};

export default App;
