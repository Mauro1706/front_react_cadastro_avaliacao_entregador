import React, { Component, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import api from '../../config/api';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      aval: {
        avaliacao: 0,
        nomeEntregador: "",
        nomeAvaliador: "",
        observacao: "",
      },
      messageError: null,
      redirect: false,
    };
  }

  exibeErro() {
    const { messageError } = this.state;
    if (messageError) {
        return (
            <div className="alert alert-danger" role="alert">
                Erro de conexão com o servidor
            </div>
        );
    }
  }

  handleInputChange = event =>{
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState(prevState => ({
      aval: {...prevState.aval, [name]: value }
    }));
  }

  hendlerSubmint = event => {
    
    api.post('/cadastrar', this.state.aval)
      .then(response => {
        if (!response.error){
          this.setState({ redirect: true });
        } else {
          this.setState({ messageError: response.message });
        }
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      });    

    event.preventDefault();
  };

  render(){

    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    } else {
      return(
        <div class="my-5 container">
          <h1 className={'text-center bg-light'}>Cadastro de Usuário</h1>
          <div>{this.state.messageError}</div>
          <div class="my-5">
            <form class="form" onSubmit= { this.hendlerSubmint }>
              <div class="form-group row">
                <label htmlFor="nomeAvaliador" class="col-sm-4 col-form-label text-right">Nome Usuário:</label>
                <div class="col-sm-6">
                  <input type="input" required="required" class="form-control" name="nomeAvaliador" id="nomeAvaliador" 
                  placeholder="Nome Completo do Usuário"
                  value={this.state.aval.nomeAvaliador}
                  onChange={ this.handleInputChange } />
                </div>
              </div>
              <div class="form-group row">
                <label htmlFor="nomeEntregador" class="col-sm-4 col-form-label text-right">Nome Entregador:</label>
                <div class="col-sm-6">
                  <input type="input" required="required" class="form-control" name="nomeEntregador" id="nomeEntregador" 
                  placeholder="Nome Completo do avaliado" 
                  value={this.state.aval.nomeEntregador}
                  onChange={ this.handleInputChange } />
                </div>
              </div>
              <div class="form-group row">
                <label htmlFor="avaliacao" class="col-sm-4 col-form-label text-right"></label>
                <div class="col-sm-6">
                  <input type="radio" name="avaliacao" value="1"
                  checked={ this.state.aval.avaliacao == 1 }
                  onChange={ this.handleInputChange } /> 1 &nbsp;&nbsp;&nbsp;
                  <input type="radio" name="avaliacao" value="2"
                  checked={ this.state.aval.avaliacao == 2 }
                  onChange={ this.handleInputChange } /> 2 &nbsp;&nbsp;&nbsp;
                  <input type="radio" name="avaliacao" value="3"
                  checked={ this.state.aval.avaliacao == 3 }
                  onChange={ this.handleInputChange } /> 3 &nbsp;&nbsp;&nbsp;
                  <input type="radio" name="avaliacao" value="4"
                  checked={ this.state.aval.avaliacao == 4 }
                  onChange={ this.handleInputChange } /> 4 &nbsp;&nbsp;&nbsp;
                  <input type="radio" name="avaliacao" value="5"
                  checked={ this.state.aval.avaliacao == 5 }
                  onChange={ this.handleInputChange } /> 5 &nbsp;&nbsp;&nbsp;
                </div>
              </div>
              <div class="form-group row">
                  <label htmlFor="observacao" class="col-sm-4 col-form-label text-right">Observação:</label>
                  <div class="col-sm-6">
                    <textarea required class="form-control" rows="8" name="observacao" id="observacao"
                    value={this.state.aval.observacao}
                    onChange={ this.handleInputChange } ></textarea>
                  </div>
              </div>
              <br/>
              <div class="text-center col-md-12">
                  <button type="submit" class="btn btn-success">Gravar</button>
                  <Link to={`/`} class="btn btn-warning mx-2"> Voltar </Link>  
              </div>
            </form>
          </div>
        </div>
      );
    }
  };

};

export default App;
