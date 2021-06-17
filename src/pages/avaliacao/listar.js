import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../config/api';

class Listar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avaliacoes: [],
    };
  }

  async componentDidMount() {
    try{
      const response = await api.get('/listar');
      this.setState({avaliacoes: response.data});
    } catch (e) {
      this.setState({avaliacoes: []});
    }
  }

  render(){

    const { avaliacoes } = this.state;

    return(
      <div class="my-5 container">
        <h1>Listar Avaliados</h1>
        <div class="text-right"><a href="/cadastro" class="btn btn-info" value="Editar">Nova Avaliação</a></div>
        <div class="my-5">
          <table class="table table-bordered table-hover">
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
            {avaliacoes.map((avaliacao, index) => (
              <tr key={index}>
                <td>{avaliacao._id}</td>
                <td>{avaliacao.nomeEntregador}</td>
                <td>{avaliacao.nomeAvaliador}</td>
                <td>{avaliacao.data}</td>
                <td>{avaliacao.observacao}</td>
                <td class="text-center">
                  <Link to={`/detalhes/${avaliacao._id}`} class="btn btn-warning">Detalhes</Link>
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

export default Listar;
