import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { api } from '../../../config';

export const Pedido = (props) => {
    console.log(props.match.params.id);

    const [data, setData] = useState([]);
    const [id, setID] = useState(props.match.params.id);

    useEffect(() => {
        const getPedido = async () => {
            await axios.get(api + "/pedido/" + id)
                .then((response) => {
                    console.log(response.data.pedido);
                    setData(response.data.pedido);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar a API.");
                })
        }
        getPedido();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="w-100 m-auto mt-3 p-3 border rounded-pill d-flex justify-content-center align-items-center" style={{ background: 'rgba(16,100,199,0.33)' }}>
                        <div className="m-auto p-2">
                            <h1>Informações do Pedido</h1>
                        </div>
                    </div>
                    <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
                        <div className="p-5 border border-dark rounded" style={{ background: 'rgba(16,199,154,0.33)' }}>
                            <dl className="row">
                                <dt className="col-sm-3">ID do Cliente</dt>
                                <dd className="col-sm-9">{data.ClienteId}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-3">ID do Serviço</dt>
                                <dd className="col-sm-9">{data.ServicoId}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-3">Valor</dt>
                                <dd className="col-sm-9">{data.valor}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-3">Data</dt>
                                <dd className="col-sm-9">{data.data}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-3">Data de Criação</dt>
                                <dd className="col-sm-9">{data.createdAt}</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="mt-2 d-flex justify-content-center">
                        <div className="p-2">
                            <Link to="/visualizarpedido" className="btn btn-outline-primary btn-sm">Voltar</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}