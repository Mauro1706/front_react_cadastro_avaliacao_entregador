import React, { Component } from 'react';

class Header extends Component {

    render(){
    
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <a class="navbar-brand text-warning" href="#">EatTasty</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Início <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/listarusuarios">Usuários</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/listaravaliacao">Avaliações</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <a className="btn btn-outline-success my-2 my-sm-0" href="/login">Login</a>
                        </form>
                    </div>
                </nav>
            </div>
        )
    };            
};

export default Header;