import '../../../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap";

import { api } from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faAddressCard);

export const VisualizarCliente = () => {

    const [bitaoDeleteIsVisible, setBitaoDeleteIsVisible] = useState(true);
    const [bitaoDeleteSimIsVisible, setBitaoDeleteSimIsVisible] = useState(true);
    const [bitaoDeleteNaoIsVisible, setBitaoDeleteNaoIsVisible] = useState(true);
    const [bitaoDeleteCtzaIsVisible, setBitaoDeleteCtzaIsVisible] = useState(true);

    function mudarBitaoDeleteInvisivel() { setBitaoDeleteIsVisible(!bitaoDeleteIsVisible) }
    function mudarBitaoDeleteSimInvisivel() { setBitaoDeleteSimIsVisible(!bitaoDeleteSimIsVisible) }
    function mudarBitaoDeleteNaoInvisivel() { setBitaoDeleteNaoIsVisible(!bitaoDeleteNaoIsVisible) }
    function mudarBitaoDeleteCtzaInvisivel() { setBitaoDeleteCtzaIsVisible(!bitaoDeleteCtzaIsVisible) }

    function juntarFunctions() {
        mudarBitaoDeleteInvisivel();
        mudarBitaoDeleteSimInvisivel();
        mudarBitaoDeleteNaoInvisivel();
        mudarBitaoDeleteCtzaInvisivel();
    }

    const [data, setData] = useState([]);

    const [numClientes, setNumClientes] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getClientes = async () => {
        await axios.get(api + radio)
            .then((response) => {
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
        const getNumClientes = async () => {
            await axios.get(api + "/numclientes")
                .then((response) => {
                    setNumClientes(response.data.clientes);
                })
                .catch(() => {
                    setStatus({
                        type: 'error',
                        message: 'Erro: Não foi possível conectar a API.'
                    })
                });
        }
        getNumClientes();
    },[]);


    const apagarCliente = async (idCliente) => {
        console.log(idCliente);

        juntarFunctions();

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.delete(api + "/apagarcliente/" + idCliente, { headers })
            .then((response) => {
                console.log(response.data.error);
                getClientes();
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível acessar a API.'
                })
            })
    }

    useEffect(() => {
        getClientes();
    }, []);


    const [radio, setRadio] = useState("/listaclientes");

    while ((radio !== "/listaclientes") || (radio !== "/listaclientesnome") || (radio !== "/listaclientescidade") ||
        (radio !== "/listaclientesuf") || (radio !== "/listaclientesidade")) {
        getClientes();
        break;
    }

    return (
        <div>
            <Container>
                <div className="w-100 d-flex justify-content-center align-items-center" style={{ marginTop: '2.5%' }}>
                    <div className="w-75 p-4 border d-flex justify-content-center align-items-center headerTabela cor-branca">
                        <div className="w-100 d-flex p-2 justify-content-center align-items-center">
                            <div>
                                <FontAwesomeIcon icon="address-card" className="fonte-responsiva-icon" style={{ color: 'var(--azul)' }} />
                            </div>
                            <div style={{ marginLeft: '5%', fontSize: 'var(--fontegrande)' }}>
                                Tabela dos Clientes
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-2 d-flex justify-content-center" style={{ marginTop: '2.5%' }}>
                    <div className="p-2">
                        <label className="btn btn-outline-primary disabled" htmlFor="option1">Ordenar por</label>
                    </div>
                    <div className="p-2">
                        <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off"
                            checked={radio === "/listaclientes"} value="/listaclientes" onChange={(e) => { setRadio(e.target.value) }}></input>
                        <label className="btn btn-outline-primary" htmlFor="option1">ID</label>
                    </div>
                    <div className="p-2">
                        <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off"
                            checked={radio === "/listaclientesnome"} value="/listaclientesnome" onChange={(e) => { setRadio(e.target.value) }}></input>
                        <label className="btn btn-outline-primary" htmlFor="option2">Nome</label>
                    </div>
                    <div className="p-2">
                        <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off"
                            checked={radio === "/listaclientescidade"} value="/listaclientescidade" onChange={(e) => { setRadio(e.target.value) }}></input>
                        <label className="btn btn-outline-primary" htmlFor="option3">Cidade</label>
                    </div>
                    <div className="p-2">
                        <input type="radio" className="btn-check" name="options" id="option4" autoComplete="off"
                            checked={radio === "/listaclientesuf"} value="/listaclientesuf" onChange={(e) => { setRadio(e.target.value) }}></input>
                        <label className="btn btn-outline-primary" htmlFor="option4">UF</label>
                    </div>
                    <div className="p-2">
                        <input type="radio" className="btn-check" name="options" id="option5" autoComplete="off"
                            checked={radio === "/listaclientesidade"} value="/listaclientesidade" onChange={(e) => { setRadio(e.target.value) }}></input>
                        <label className="btn btn-outline-primary" htmlFor="option5">Nascimento</label>
                    </div>
                </div>

                <div className="p-2 d-flex flex-column">
                    {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                    <Table striped dark hover>
                        <thead>
                            <tr className="text-center">
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Endereço</th>
                                <th>Cidade</th>
                                <th>UF</th>
                                <th>Nascimento</th>
                                <th>Criado em</th>
                                <th colSpan="3">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr className="text-center" key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.endereco}</td>
                                    <td>{item.cidade}</td>
                                    <td>{item.uf}</td>
                                    <td>{item.nascimento}</td>
                                    <td>{item.createdAt}</td>
                                    <td>
                                        <Link to={"/cliente/" + item.id} className="btn btn-outline-primary btn-sm">Consultar</Link>
                                    </td>
                                    <td>
                                        <Link to={"/editarcliente/" + item.id} className="btn btn-outline-warning btn-sm">Editar</Link>
                                    </td>
                                    <td>
                                        <span onClick={juntarFunctions} className={bitaoDeleteIsVisible ? "btn btn-outline-danger btn-sm"
                                            : "btn btn-outline-danger btn-sm d-none"}>Deletar</span>

                                        <span className={bitaoDeleteCtzaIsVisible ? "btn btn-outline-danger btn-sm disabled d-none"
                                            : "btn btn-outline-danger btn-sm disabled"}>Tem certeza?</span>

                                        <span onClick={() => apagarCliente(item.id)} className={bitaoDeleteSimIsVisible ? "btn btn-outline-danger btn-sm d-none"
                                            : "btn btn-outline-danger btn-sm"} style={{ marginLeft: '0.5rem' }}>Sim</span>

                                        <span onClick={juntarFunctions} className={bitaoDeleteNaoIsVisible ? "btn btn-outline-success btn-sm d-none"
                                            : "btn btn-outline-success btn-sm"} style={{ marginLeft: '0.5rem' }}>Não</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <div className="text-center fonte-responsiva-pequena">
                        <span className="cor-texto-azul">Número de clientes</span> - {numClientes}
                    </div>

                    <div className="p-2 d-flex justify-content-center">
                        <div className="p-2">
                            <a href="/cadastrarcliente" className="btn btn-outline-success btn-lg">Criar novo cliente</a>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center" style={{ marginBottom: '2%' }}>
                        <div className="p-2">
                            <a href="/" className="btn btn-outline-primary btn-lg">Voltar</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarservico" className="btn btn-outline-primary btn-lg">Serviços</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarpedido" className="btn btn-outline-primary btn-lg">Pedidos</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}