import '../../../App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import { Alert, Container, Table } from 'reactstrap';
import { api } from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFunnelDollar, faPoll, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faFunnelDollar, faPoll, faTrashAlt, faPencilAlt);

export const Servico = (props) => {
    console.log(props.match.params.id);

    const [data, setData] = useState([]);

    const [dataServicoPedidos, setDataServicoPedidos] = useState([]);

    const [dataClientes, setDataClientes] = useState([]);

    const [nome, setNome] = useState('');
    const [servicoLucroBruto, setServicoLucroBruto] = useState('');

    const [tabelaPedidosIsVisible, setTabelaPedidosIsVisible] = useState(true);
    const [msgNaoTemPedidosIsVisible, setMsgNaoTemPedidosIsVisible] = useState(true);

    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    useEffect(() => {
        const getServico = async () => {
            await axios.get(api + "/servico/" + id)
                .then((response) => {
                    console.log(response.data.servico);
                    setData(response.data.servico);
                    setNome(response.data.servico.nome);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar a API.");
                })
        }
        getServico();
    }, [id]);

    useEffect(() => {
        const getServicoLucroBruto = async () => {
            await axios.get(api + "/servicolucroubruto/" + id)
                .then((response) => {
                    setServicoLucroBruto(response.data.totalLucroBrutoServico);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar a API.");
                })
        }
        getServicoLucroBruto();
    }, [id]);

    useEffect(() => {
        const getServicoPedidos = async () => {
            await axios.get(api + "/listarpedidoss/" + id)
                .then((response) => {
                    let temPedido = (response.data.pedidos);
                    if (temPedido.length === 0) {
                        setTabelaPedidosIsVisible(!tabelaPedidosIsVisible);
                    } else {
                        setMsgNaoTemPedidosIsVisible(!msgNaoTemPedidosIsVisible);
                    }
                    console.log(response.data.pedidos);
                    setDataServicoPedidos(response.data.pedidos);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar a API.");
                    setStatus({
                        type: 'error',
                        message: 'Erro: Não foi possível conectar a API.'
                    })
                })
        }
        getServicoPedidos();
    }, [id]);

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

    useEffect(() => {
        getClientes();
    }, []);


    var x = 0;
    var y = 0;

    var i = dataServicoPedidos.length;
    var j = dataClientes.length;

    if ((dataServicoPedidos[x] !== undefined) && (dataClientes[y] !== undefined)) {
        while (x < i) {
            while (y < j) {
                if (dataServicoPedidos[x].ClienteId === dataClientes[y].id) {
                    dataServicoPedidos[x].nomeCliente = dataClientes[y].nome;
                }
                y++;
            }
            y = 0;
            x++;
        }
    }


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

    const [voltarTabela, setVoltarTabela] = useState({
        redirect: false
    });

    const apagarServico = async (idServico) => {

        juntarFunctions();

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.delete(api + "/apagarservico/" + idServico, { headers })
            .then((response) => {
                console.log(response.data.error);
                setVoltarTabela({ redirect: true })
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível acessar a API.'
                })
            })
    }

    return (
        <div>
            {voltarTabela.redirect ? (<Redirect push to="/visualizarservico" />) : null}
            <Container>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="w-100 d-flex justify-content-center align-items-center" style={{ marginTop: '1.5%', marginBottom: '2%' }}>
                        <div className="w-75 p-4 border d-flex justify-content-center align-items-center headerTabela cor-branca">
                            <div className="w-100 d-flex p-2 justify-content-center align-items-center">
                                <div>
                                    <FontAwesomeIcon icon="funnel-dollar" className="fonte-responsiva-icon" style={{ color: 'var(--azul)' }} />
                                </div>
                                <div className="fonte-responsiva" style={{ marginLeft: '5%' }}>
                                    {id} - {nome}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 d-flex justify-content-center">
                        <a href={"/editarservico/" + id} className="d-flex text-center align-items-center btn btn-outline-warning btn-lg">
                            <div>
                                <FontAwesomeIcon icon="pencil-alt" className="fonte-responsiva-icon-pequena warning" />
                            </div>
                            <div className="p-2 fonte-responsiva-pequena">
                                Editar este serviço
                            </div>
                        </a>

                        <div className="d-flex justify-content-center align-items-center" style={{ marginLeft: '0.75rem' }}>
                            <span onClick={juntarFunctions} className={bitaoDeleteIsVisible ? "d-flex text-center align-items-center btn btn-outline-danger btn-lg"
                                : "d-flex text-center align-items-center btn btn-outline-danger btn-lg d-none"}>
                                <div>
                                    <FontAwesomeIcon icon="trash-alt" className="fonte-responsiva-icon-pequena danger" />
                                </div>
                                <div className="p-2 fonte-responsiva-pequena">
                                    Excluir este serviço
                                </div>
                            </span>

                            <span className={bitaoDeleteCtzaIsVisible ? "btn btn-outline-danger btn-lg disabled d-none"
                                : "btn btn-outline-danger btn-lg disabled"}>Tem certeza?</span>

                            <span onClick={() => apagarServico(id)} className={bitaoDeleteSimIsVisible ? "btn btn-outline-danger btn-lg d-none"
                                : "btn btn-outline-danger btn-lg"} style={{ marginLeft: '0.5rem' }}>Sim</span>

                            <span onClick={juntarFunctions} className={bitaoDeleteNaoIsVisible ? "btn btn-outline-success btn-lg d-none"
                                : "btn btn-outline-success btn-lg"} style={{ marginLeft: '0.5rem' }}>Não</span>
                        </div>
                    </div>

                    <div className="w-75 m-3 d-flex">
                        <div className="w-100 p-4 border d-flex headerTabela cor-branca">
                            <div className="w-100 d-flex flex-column p-2 text-center fonte-responsiva-pequena">
                                <div>
                                    <span className="cor-texto-azul">Nome</span> - {data.nome}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Descrição</span> - {data.descricao}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Data de criação</span> - {data.createdAt}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Total bruto recebido</span> - R$ {servicoLucroBruto}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={tabelaPedidosIsVisible ? "p-5 d-flex flex-column tabelaPedidoClientes"
                        : "p-5 d-flex flex-column d-none tabelaPedidoClientes"}>
                        {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                        <div className="w-100 p-4 border d-flex justify-content-center align-items-center headerTabela cor-branca text-center"
                            style={{ marginBottom: '5%' }}>
                            <div>
                                <FontAwesomeIcon icon="poll" className="fonte-responsiva-icon" style={{ color: 'var(--azul)' }} />
                            </div>
                            <div className="fonte-responsiva" style={{ marginLeft: '5%' }}>
                                Pedidos deste serviço
                            </div>
                        </div>
                        <Table striped dark hover>
                            <thead>
                                <tr className="text-center">
                                    <th>ID Pedido</th>
                                    <th>ID Cliente</th>
                                    <th>ID Serviço</th>
                                    <th>Valor</th>
                                    <th>Data</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataServicoPedidos.map(item => (
                                    <tr key={item.id} className="text-center">
                                        <td>{item.id}</td>
                                        <td>{item.ClienteId} - {item.nomeCliente}</td>
                                        <td>{item.ServicoId} - {data.nome}</td>
                                        <td>{item.valor}</td>
                                        <td>{item.data}</td>
                                        <td >
                                            <Link to={"/pedido/" + item.id} className="btn btn-outline-primary btn-sm">Consultar</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="text-center fonte-responsiva-pequena">
                            <span className="cor-texto-azul">Valor total</span> - R$ {servicoLucroBruto}
                        </div>
                    </div>

                    <div className={msgNaoTemPedidosIsVisible ? "p-5 d-flex flex-column tabelaPedidoClientes"
                        : "p-5 d-flex flex-column d-none tabelaPedidoClientes"}>
                        {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                        <div className="w-100 p-4 border d-flex justify-content-center align-items-center headerTabela cor-branca text-center"
                            style={{ marginBottom: '5%' }}>
                            <div>
                                <FontAwesomeIcon icon="poll" className="fonte-responsiva-icon" style={{ color: 'var(--azul)' }} />
                            </div>
                            <div className="fonte-responsiva" style={{ marginLeft: '5%' }}>
                                Esse serviço não tem pedidos!
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 d-flex justify-content-center" style={{ marginBottom: '2%' }}>
                        <div className="p-2">
                            <Link to="/visualizarservico" className="btn btn-outline-primary btn-lg">Voltar</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}