import React, {Component, useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import api from '../../config/api';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                login: "",
                password: "",
            },
            messageError: null,
            redirect: false,
        };
    }

    exibeErro() {
        const {messageError} = this.state;
        if (messageError) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
                </div>
            );
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            user: {...prevState.aval, [name]: value}
        }));
    }

    hendlerSubmint = event => {

        api.post('/authenticate', this.state.user)
            .then(response => {
                if (!response.error) {
                    this.setState({redirect: true});
                } else {
                    this.setState({messageError: response.message});
                }
            })
            .catch(error => {
                this.setState({errorMessage: error.message});
            });

        event.preventDefault();
    };

    render() {

        const {redirect} = this.state;
        if (redirect) {
            return <Redirect to="/"/>;
        } else {
            return (
                <div class="my-5 container">
                    <div>{this.state.messageError}</div>
                    <div class="text-center">
                        <form className="form-signin" onSubmit={this.hendlerSubmint}>
                            <img className="mb-4" src=""
                                 alt="" width="72" height="72"/>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group text-center row">
                                <label htmlFor="inputEmail" class="col-sm-3 col-form-label text-right"></label>
                                <div className="col-sm-6">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword"
                                       className="col-sm-3 col-form-label text-right"></label>
                                <div className="col-sm-6">
                                <input type="password" id="inputPassword" className="form-control"
                                       placeholder="Password"
                                       required=""/>
                                </div>
                            </div>
                            <div className="checkbox mb-3">
                                <label>
                                    Não tem conta? <Link to={`/novo-usuario`} class="">Inscrever-se</Link>
                                </label>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary" type="submit">Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    };

};

export default App;
