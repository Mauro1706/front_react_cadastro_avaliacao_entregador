import React, { Component } from 'react';
import { Link } from "react-router-dom";
import api from '../../config/api';

class Detalhes extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      avaliacao: {},
      messageError: "",
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    api.get(`/buscar/${id}`).then(
      avaliacao => { this.setState({ avaliacao: avaliacao.data }) }
    ).catch(
      erro => this.setState({ messageError: erro })
    );
  }

  render(){

    const { avaliacao, index } = this.state;

    return(
      <div class="my-5 container">
        <h1>Visualizar Avaliação</h1>
        <div class="my-5">
        <div className="usuario-info">
          <div class="form-group row">
            <label class="col-sm-12 col-form-label"><b>Nome do Avaliador:</b> {avaliacao.nomeAvaliador}</label>
          </div>
          <div class="form-group row">
            <label class="col-sm-12 col-form-label"><b>Nome do Entregador:</b> {avaliacao.nomeEntregador}</label>
          </div>
          <div class="form-group row">
            <label class="col-sm-12 col-form-label"><b>Avaliação:</b> {avaliacao.avaliacao}</label>
          </div>
          <div class="form-group row">
            <label class="col-sm-12 col-form-label"><b>Observações:</b> {avaliacao.observacao}</label>
          </div>
              <br />
              <Link to={`/listaravaliacao`} class="btn btn-info mx-2"> Voltar </Link>
              <Link to={`/editar/${avaliacao._id}`} class="btn btn-warning mx-2"> Editar </Link> 
              <Link to={`/deletar/${avaliacao._id}`} class="btn btn-danger mx-2">Excluir</Link>
          </div >
        </div>
      </div>
    );
  };

};

export default Detalhes;
