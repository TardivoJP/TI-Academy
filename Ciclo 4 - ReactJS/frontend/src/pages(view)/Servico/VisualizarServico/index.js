import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap";

import { api } from '../../../config';

export const VisualizarServico = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getServicos = async () => {
        await axios.get(api + "/listaservicos")
            .then((response) => {
                console.log(response.data.servicos);
                setData(response.data.servicos);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar a API.'
                })
            });
    }

    useEffect(() => {
        getServicos();
    }, []);

    return (
        <div className="p-3">
            <Container>
                <div className="w-100 m-auto mt-3 p-3 border rounded-pill d-flex justify-content-center align-items-center" style={{ background: 'rgba(16,100,199,0.33)' }}>
                    <div className="m-auto p-2">
                        <h1>Tabela dos Serviços</h1>
                    </div>
                </div>
                <div className="p-2 d-flex justify-content-center">
                    <div className="p-2">
                        <a href="/cadastrarservico" className="btn btn-outline-primary btn-md">Criar novo serviço</a>
                    </div>
                </div>
                <div className="p-2 d-flex flex-column">
                    {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                    <Table striped dark hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Serviço</th>
                                <th>Descrição</th>
                                <th colspan="2" className="text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.descricao}</td>
                                    <td className="text-center">
                                        <Link to={"/servico/" + item.id} className="btn btn-outline-primary btn-sm">Consultar Serviço</Link>
                                    </td>
                                    <td className="text-center">
                                        <Link to={"/servicopedidos/" + item.id} className="btn btn-outline-primary btn-sm">Consultar Pedidos</Link>
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
                            <a href="/visualizarcliente" className="btn btn-outline-primary btn-md">Cliente</a>
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