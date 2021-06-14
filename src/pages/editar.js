import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import api from '../config/api';

class Editar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      avaliacao: {
        avaliacao: 0,
        nomeEntregador: "",
        nomeAvaliador: "",
        observacao: "",
      },
      messageError: null,
      redirect: false,
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

  handleInputChange = event =>{
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState(prevState => ({
      avaliacao: {...prevState.avaliacao, [name]: value }
    }));
  }

  hendlerSubmint = event => {
    const { id } = this.state.avaliacao;
    const response = api.put(`/alterar/${id}`, JSON.stringify(this.state.avaliacao))
      .then(response => {
        if (!response.error){
          this.setState({ redirect: true });
        } else {
          this.setState({ messageError: response.message });
        }
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
          <h1>Atualizar Avaliação</h1>
          <div class="my-5">
            <form class="form" onSubmit= { this.hendlerSubmint }>
              <div class="form-group row">
                <label htmlFor="nomeAvaliador" class="col-sm-4 col-form-label text-right">Nome Avaliador:</label>
                <div class="col-sm-6">
                  <input type="input" required="required" class="form-control" name="nomeAvaliador" id="nomeAvaliador" 
                  placeholder="Nome Completo do avaliador" 
                  value={this.state.avaliacao.nomeAvaliador}
                  onChange={ this.handleInputChange } />
                </div>
              </div>
              <div class="form-group row">
                <label htmlFor="nomeEntregador" class="col-sm-4 col-form-label text-right">Nome Entregador:</label>
                <div class="col-sm-6">
                  <input type="input" required="required" class="form-control" name="nomeEntregador" id="nomeEntregador" 
                  placeholder="Nome Completo do avaliado" 
                  value={this.state.avaliacao.nomeEntregador}
                  onChange={ this.handleInputChange } />
                </div>
              </div>
              <div class="form-group row">
                <label htmlFor="avaliacao" class="col-sm-4 col-form-label text-right"></label>
                <div class="col-sm-6">
                  <input type="radio" name="avaliacao" value="1"
                  checked={ this.state.avaliacao.avaliacao == 1 }
                  onChange={ this.handleInputChange } /> 1 &nbsp;&nbsp;&nbsp;
                  <input type="radio" name="avaliacao" value="2"
                  checked={ this.state.avaliacao.avaliacao == 2 }
                  onChange={ this.handleInputChange } /> 2 &nbsp;&nbsp;&nbsp;
                  <input type="radio" name="avaliacao" value="3"
                  checked={ this.state.avaliacao.avaliacao == 3 }
                  onChange={ this.handleInputChange } /> 3 &nbsp;&nbsp;&nbsp;
                  <input type="radio" name="avaliacao" value="4"
                  checked={ this.state.avaliacao.avaliacao == 4 }
                  onChange={ this.handleInputChange } /> 4 &nbsp;&nbsp;&nbsp;
                  <input type="radio" name="avaliacao" value="5"
                  checked={ this.state.avaliacao.avaliacao == 5 }
                  onChange={ this.handleInputChange } /> 5 &nbsp;&nbsp;&nbsp;
                </div>
              </div>
              <div class="form-group row">
                  <label htmlFor="observacao" class="col-sm-4 col-form-label text-right">Observação:</label>
                  <div class="col-sm-6">
                    <textarea required class="form-control" rows="8" name="observacao" id="observacao"
                    value={this.state.avaliacao.observacao}
                    onChange={ this.handleInputChange } ></textarea>
                  </div>
              </div>
              <br/>
              <div class="text-center col-md-12">
                  <button type="submit" class="btn btn-success mx-2">Gravar</button>
                  <Link to={`/`} class="btn btn-warning mx-2"> Voltar </Link> 
              </div>
            </form>
          </div>
        </div>
      );
    }
  };

};

export default Editar;
