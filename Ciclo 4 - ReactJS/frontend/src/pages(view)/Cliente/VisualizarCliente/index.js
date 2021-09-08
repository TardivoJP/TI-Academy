import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap";

import { api } from '../../../config';

export const VisualizarCliente = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getClientes = async () => {
        await axios.get(api + "/listaclientes")
            .then((response) => {
                console.log(response.data.clientes);
                setData(response.data.clientes);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar a API.'
                })
            });
    }

    useEffect(() => {
        getClientes();
    }, []);

    return (
        <div className="p-3">
            <Container>
                <div className="d-flex flex-column">
                    {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                    <Table striped dark hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Endereço</th>
                                <th>Cidade</th>
                                <th>UF</th>
                                <th>Nascimento</th>
                                <th>Primeira Compra</th>
                                <th colspan="2" className="text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.endereco}</td>
                                    <td>{item.cidade}</td>
                                    <td>{item.uf}</td>
                                    <td>{item.nascimento}</td>
                                    <td>{item.createdAt}</td>
                                    <td className="text-center">
                                        <Link to={"/cliente/" + item.id} className="btn btn-outline-primary btn-sm">Consultar Cliente</Link>
                                    </td>
                                    <td className="text-center">
                                        <Link to={"/clientepedidos/" + item.id} className="btn btn-outline-primary btn-sm">Consultar Pedidos</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-center">
                        <div className="p-2">
                            <a href="/" className="btn btn-outline-primary btn-md">Voltar</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarservico" className="btn btn-outline-primary btn-md">Serviço</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarpedido" className="btn btn-outline-primary btn-md">Pedido</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}