import '../../../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap";

import { api } from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoll } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faPoll);

export const VisualizarPedido = () => {

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
    const [dataClientes, setDataClientes] = useState([]);
    const [dataServicos, setDataServicos] = useState([]);

    const [numPedidos, setNumPedidos] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getPedidos = async () => {
        await axios.get(api + radio)
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

    const getClientes = async () => {
        await axios.get(api + "/listaclientes")
            .then((response) => {
                console.log(response.data.clientes);
                setDataClientes(response.data.clientes);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar a API.'
                })
            });
    }

    const getServicos = async () => {
        await axios.get(api + "/listaservicos")
            .then((response) => {
                console.log(response.data.servicos);
                setDataServicos(response.data.servicos);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar a API.'
                })
            });
    }

    useEffect(() => {
        const getNumPedidos = async () => {
            await axios.get(api + "/numpedidos")
                .then((response) => {
                    setNumPedidos(response.data.pedidos);
                })
                .catch(() => {
                    setStatus({
                        type: 'error',
                        message: 'Erro: Não foi possível conectar a API.'
                    })
                });
        }
        getNumPedidos();
    },[]);

    const apagarPedido = async (idPedido) => {
        console.log(idPedido);

        juntarFunctions();

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.delete(api + "/apagarpedido/" + idPedido, { headers })
            .then((response) => {
                console.log(response.data.error);
                getPedidos();
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível acessar a API.'
                })
            })
    }

    useEffect(() => {
        getPedidos();
        getClientes();
        getServicos();
    }, []);


    /* Aqui temos um loop while para adicionar novas propriedades na matriz "data" dos pedidos
    Em síntese, estamos colocando o nome dos Clientes e Serviços ao lado de seus IDs na tabela*/
    var x = 0;
    var y = 0;
    var z = 0;

    var i = data.length;
    var j = dataClientes.length;
    var k = dataServicos.length;

    if ((data[x] !== undefined) && (dataClientes[y] !== undefined)) {
        while (x < i) {
            while (y < j) {
                if (data[x].ClienteId === dataClientes[y].id) {
                    data[x].nomeCliente = dataClientes[y].nome;
                }
                y++;
            }

            while (z < k) {
                if (data[x].ServicoId === dataServicos[z].id) {
                    data[x].nomeServico = dataServicos[z].nome;
                }
                z++;
            }

            z = 0;
            y = 0;
            x++;
        }
    }

    const [radio, setRadio] = useState("/listapedidos");

    while ((radio !== "/listapedidos") || (radio !== "/listapedidosclienteid") || (radio !== "/listapedidosservicoid") ||
        (radio !== "/listapedidosvalor") || (radio !== "/listapedidosdata")) {
        getPedidos();
        break;
    }

    return (
        <div>
            <Container>
                <div className="w-100 d-flex justify-content-center align-items-center" style={{ marginTop: '2.5%' }}>
                    <div className="w-75 p-4 border d-flex justify-content-center align-items-center headerTabela cor-branca">
                        <div className="w-100 d-flex p-2 justify-content-center align-items-center">
                            <div>
                                <FontAwesomeIcon icon="poll" className="fonte-responsiva-icon" style={{ color: 'var(--azul)' }} />
                            </div>
                            <div style={{ marginLeft: '5%', fontSize: 'var(--fontegrande)' }}>
                                Tabela dos Pedidos
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-2 d-flex justify-content-center" style={{ marginTop: '2.5%' }}>
                    <div className="p-2">
                        <label class="btn btn-outline-primary disabled" for="option1">Ordenar por</label>
                    </div>
                    <div className="p-2">
                        <input type="radio" className="btn-check" name="options" id="option1" autocomplete="off"
                            checked={radio === "/listapedidos"} value="/listapedidos" onChange={(e) => { setRadio(e.target.value) }}></input>
                        <label class="btn btn-outline-primary" for="option1">ID</label>
                    </div>
                    <div className="p-2">
                        <input type="radio" className="btn-check" name="options" id="option2" autocomplete="off"
                            checked={radio === "/listapedidosclienteid"} value="/listapedidosclienteid" onChange={(e) => { setRadio(e.target.value) }}></input>
                        <label class="btn btn-outline-primary" for="option2">ID Cliente</label>
                    </div>
                    <div className="p-2">
                        <input type="radio" className="btn-check" name="options" id="option3" autocomplete="off"
                            checked={radio === "/listapedidosservicoid"} value="/listapedidosservicoid" onChange={(e) => { setRadio(e.target.value) }}></input>
                        <label class="btn btn-outline-primary" for="option3">ID Serviço</label>
                    </div>
                    <div className="p-2">
                        <input type="radio" className="btn-check" name="options" id="option4" autocomplete="off"
                            checked={radio === "/listapedidosvalor"} value="/listapedidosvalor" onChange={(e) => { setRadio(e.target.value) }}></input>
                        <label class="btn btn-outline-primary" for="option4">Valor</label>
                    </div>
                    <div className="p-2">
                        <input type="radio" className="btn-check" name="options" id="option5" autocomplete="off"
                            checked={radio === "/listapedidosdata"} value="/listapedidosdata" onChange={(e) => { setRadio(e.target.value) }}></input>
                        <label class="btn btn-outline-primary" for="option5">Data</label>
                    </div>
                </div>

                <div className="p-2 d-flex flex-column">
                    {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                    <Table striped dark hover>
                        <thead>
                            <tr className="text-center">
                                <th>ID Pedido</th>
                                <th>ID Cliente</th>
                                <th>ID Serviço</th>
                                <th>Valor</th>
                                <th>Data</th>
                                <th colSpan="3">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr className="text-center" key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.ClienteId} - {item.nomeCliente}</td>
                                    <td>{item.ServicoId} - {item.nomeServico}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.data}</td>
                                    <td>
                                        <Link to={"/pedido/" + item.id} className="btn btn-outline-primary btn-sm">Consultar</Link>
                                    </td>
                                    <td>
                                        <Link to={"/editarpedido/" + item.id} className="btn btn-outline-warning btn-sm">Editar</Link>
                                    </td>
                                    <td>
                                        <span onClick={juntarFunctions} className={bitaoDeleteIsVisible ? "btn btn-outline-danger btn-sm"
                                            : "btn btn-outline-danger btn-sm d-none"}>Deletar</span>

                                        <span className={bitaoDeleteCtzaIsVisible ? "btn btn-outline-danger btn-sm disabled d-none"
                                            : "btn btn-outline-danger btn-sm disabled"}>Tem certeza?</span>

                                        <span onClick={() => apagarPedido(item.id)} className={bitaoDeleteSimIsVisible ? "btn btn-outline-danger btn-sm d-none"
                                            : "btn btn-outline-danger btn-sm"} style={{ marginLeft: '0.5rem' }}>Sim</span>

                                        <span onClick={juntarFunctions} className={bitaoDeleteNaoIsVisible ? "btn btn-outline-success btn-sm d-none"
                                            : "btn btn-outline-success btn-sm"} style={{ marginLeft: '0.5rem' }}>Não</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <div className="text-center fonte-responsiva-pequena">
                        <span className="cor-texto-azul">Número de pedidos</span> - {numPedidos}
                    </div>

                    <div className="p-2 d-flex justify-content-center">
                        <div className="p-2">
                            <a href="/cadastrarpedido" className="btn btn-outline-success btn-lg">Criar novo pedido</a>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center" style={{ marginBottom: '2%' }}>
                        <div className="p-2">
                            <a href="/" className="btn btn-outline-primary btn-lg">Voltar</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarcliente" className="btn btn-outline-primary btn-lg">Clientes</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarservico" className="btn btn-outline-primary btn-lg">Serviços</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}