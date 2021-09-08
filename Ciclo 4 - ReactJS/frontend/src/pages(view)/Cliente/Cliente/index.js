import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { api } from '../../../config';

export const Cliente = (props) => {
    console.log(props.match.params.id);

    const [data, setData] = useState([]);
    const [id, setID] = useState(props.match.params.id);

    useEffect(() => {
        const getCliente = async () => {
            await axios.get(api + "/cliente/" + id)
                .then((response) => {
                    console.log(response.data.cliente);
                    setData(response.data.cliente);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar a API.");
                })
        }
        getCliente();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="w-100 m-auto mt-3 p-3 border rounded-pill d-flex justify-content-center align-items-center" style={{ background: 'rgba(16,100,199,0.33)' }}>
                        <div className="m-auto p-2">
                            <h1>Informações do Cliente</h1>
                        </div>
                    </div>
                    <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
                        <div className="p-5 border border-dark rounded" style={{ background: 'rgba(16,199,154,0.33)' }}>
                            <dl className="row">
                                <dt className="col-sm-3">Nome</dt>
                                <dd className="col-sm-9">{data.nome}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-3">Endereço</dt>
                                <dd className="col-sm-9">{data.endereco}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-3">Cidade</dt>
                                <dd className="col-sm-9">{data.cidade}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-3">UF</dt>
                                <dd className="col-sm-9">{data.uf}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-3">Nascimento </dt>
                                <dd className="col-sm-9">{data.nascimento}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-3">Data de Criação</dt>
                                <dd className="col-sm-9">{data.createdAt}</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="mt-2 d-flex justify-content-center">
                        <div className="p-2">
                            <Link to="/visualizarcliente" className="btn btn-outline-primary btn-sm">Voltar</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}