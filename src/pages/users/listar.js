import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from '../../config/apiUsers';

class ListarUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    async componentDidMount() {
        try {
            const response = await api.get('/users');
            console.log(response.data);
            this.setState({users: response.data});
        } catch (e) {
            this.setState({users: []});
        }
    }

    handleButtonChange = event => {
        const target = event.target;
        const value = target.value;

        api.delete(`/delete/${value}`)
            .then(response => {
                if (!response.error) {
                   window.location.reload();
                }
            }).catch(
                erro => this.setState({erro: erro})
            );

        event.preventDefault();
    }

    render() {

        const {users} = this.state;

        return (
            <div class="my-5 container">
                <h1>Listar Usuários</h1>
                <div class="text-right"><a href="/novo-usuario" class="btn btn-outline-info" value="Editar">Novo Usuário</a></div>
                <div class="my-5">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr class="text-center bg-info">
                            <th>Código</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Tipo Usuário</th>
                            <th>Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td className={'text-center'}>{index + 1}</td>
                                <td>{user.name}</td>
                                <td className={'text-center'}>{user.cpf}</td>
                                <td>{user.isFaceta ? "Entregador" : "Usuário Comum"}</td>
                                <td class="text-center">
                                    <Link to={`/alter-password/${user._id}`} className="btn btn-outline-warning">Alterar
                                        Senha</Link>&nbsp;
                                    <button onClick={this.handleButtonChange} refresh="true" value={user._id}
                                            className="btn btn-outline-danger">Deletar
                                    </button>
                                    &nbsp;
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

export default ListarUsers;