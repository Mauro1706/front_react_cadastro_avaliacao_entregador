import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import api from '../config/api';

class Deletar extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      avaliacao: {},
      erro: null,
      redirect: false
    };
  }

  exibeErro() {
    const { erro } = this.state;
    if (erro) {
      return (
        <div className="alert alert-danger" role="alert">
            Erro de conexão com o servidor
        </div>
      );
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    api.get(`/buscar/${id}`).then(
      avaliacao => { this.setState({ avaliacao: avaliacao.data }) }
    ).catch(
      erro => this.setState({ messageError: erro })
    );
  }

  handleClick = event => {
    const { id } = this.props.match.params;
    api.delete(`/deletar/${id}`)
    .then(response => {
      if (!response.error){
        this.setState({ redirect: true });
      } else {
        this.setState({ erro: response.message });
      }
    }).catch(
      erro => this.setState({ erro: erro })
    );   

    event.preventDefault();
  };

  render(){

    const { redirect, avaliacao, index } = this.state;

    if (redirect) {
        return <Redirect to="/" />;
    } else {
      return(
        <div class="my-5 container">
          <h1>Deletar  Avaliação</h1>
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
              <div class="form-group row">
                <label class="col-sm-12 col-form-label">Tem certeza que deseja deletar este registro?</label>
              </div>
              <br />
              
              <Link to={`/detalhes/${avaliacao._id}`} class="btn btn-info mx-2"> Voltar </Link>  
              <button onClick={this.handleClick} class="btn btn-danger mx-2"> Remover </button>
            </div >
          </div>
        </div>
      );
    }
  };

};

export default Deletar;
