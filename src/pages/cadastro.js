import React, { Component, useState } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../config/api';

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
      messageError: "",
      redirect: false,
    };
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
    
    const response = api.post('/cadastrar', JSON.stringify(this.state.aval))
      .then(response => {
        if (!response.error){
          this.setState({ redirect: true });
        } else {
          this.setState({ messageError: response.message });
        }
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
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
          <h1>Nova Avaliação</h1>
          <div>{this.state.messageError}</div>
          <div class="my-5">
            <form class="form" onSubmit= { this.hendlerSubmint }>
              <div class="form-group row">
                <label htmlFor="nomeAvaliador" class="col-sm-4 col-form-label text-right">Nome Avaliador:</label>
                <div class="col-sm-6">
                  <input type="input" required="required" class="form-control" name="nomeAvaliador" id="nomeAvaliador" 
                  placeholder="Nome Completo do avaliador" 
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
                  <button type="submit" class="btn btn-primary">Gravar</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  };

};

export default App;
