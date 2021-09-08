import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap";

import { api } from '../../../config';

export const VisualizarPedido = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getPedidos = async () => {
        await axios.get(api + "/listapedidos")
            .then((response) => {
                console.log(response.data.pedidos);
                setData(response.data.pedidos);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar a API.'
                })
            });
    }

    useEffect(() => {
        getPedidos();
    }, []);


    return (
        <div className="p-3">
            <Container>
                <div className="d-flex flex-column">
                    {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                    <Table striped dark hover>
                        <thead>
                            <tr>
                                <th>ID Pedido</th>
                                <th>ID Cliente</th>
                                <th>ID Serviço</th>
                                <th>Valor</th>
                                <th>Data</th>
                                <th className="text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.ClienteId}</td>
                                    <td>{item.ServicoId}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.data}</td>
                                    <td className="text-center">
                                        <Link to={"/pedido/" + item.id} className="btn btn-outline-primary btn-sm">Consultar</Link>
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
                            <a href="/visualizarservico" className="btn btn-outline-primary btn-md">Serviço</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}