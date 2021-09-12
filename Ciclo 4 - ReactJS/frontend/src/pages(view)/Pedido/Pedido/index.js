import '../../../App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import { api } from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faFunnelDollar, faPoll, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faAddressCard, faFunnelDollar, faPoll, faTrashAlt, faPencilAlt);

export const Pedido = (props) => {
    console.log(props.match.params.id);

    const [data, setData] = useState([]);

    const [nomeCliente, setNomeCliente] = useState('');
    const [enderecoCliente, setEnderecoCliente] = useState('');
    const [cidadeCliente, setCidadeCliente] = useState('');
    const [ufCliente, setUfCliente] = useState('');
    const [nascimentoCliente, setNascimentoCliente] = useState('');
    const [createdAtCliente, setCreatedAtCliente] = useState('');
    const [clienteGastou, setClienteGastou] = useState('');

    const [nomeServico, setNomeServico] = useState('');
    const [descricaoServico, setDescricaoServico] = useState('');
    const [createdAtServico, setCreatedAtServico] = useState('');
    const [servicoLucroBruto, setServicoLucroBruto] = useState('');

    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

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

    useEffect(() => {
        const getCliente = async () => {
            await axios.get(api + "/cliente/" + data.ClienteId)
                .then((response) => {
                    setNomeCliente(response.data.cliente.nome);
                    setEnderecoCliente(response.data.cliente.endereco);
                    setCidadeCliente(response.data.cliente.cidade);
                    setUfCliente(response.data.cliente.uf);
                    setNascimentoCliente(response.data.cliente.nascimento);
                    setCreatedAtCliente(response.data.cliente.createdAt);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar a API.");
                })
        }
        getCliente();
    }, [data.ClienteId]);

    useEffect(() => {
        const getClienteGastou = async () => {
            await axios.get(api + "/clientegastou/" + data.ClienteId)
                .then((response) => {
                    setClienteGastou(response.data.totalGastoCliente);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar a API.");
                })
        }
        getClienteGastou();
    }, [data.ClienteId]);

    useEffect(() => {
        const getServico = async () => {
            await axios.get(api + "/servico/" + data.ServicoId)
                .then((response) => {
                    setNomeServico(response.data.servico.nome);
                    setDescricaoServico(response.data.servico.descricao);
                    setCreatedAtServico(response.data.servico.createdAt);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar a API.");
                })
        }
        getServico();
    }, [data.ServicoId]);

    useEffect(() => {
        const getServicoLucroBruto = async () => {
            await axios.get(api + "/servicolucroubruto/" + data.ServicoId)
                .then((response) => {
                    setServicoLucroBruto(response.data.totalLucroBrutoServico);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar a API.");
                })
        }
        getServicoLucroBruto();
    }, [data.ServicoId]);


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

    const apagarPedido = async (idPedido) => {

        juntarFunctions();

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.delete(api + "/apagarpedido/" + idPedido, { headers })
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
            {voltarTabela.redirect ? (<Redirect push to="/visualizarpedido" />) : null}
            <Container>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="w-100 d-flex justify-content-center align-items-center" style={{ marginTop: '1.5%', marginBottom: '2%' }}>
                        <div className="w-75 p-4 border d-flex justify-content-center align-items-center headerTabela cor-branca">
                            <div className="w-100 d-flex p-2 justify-content-center align-items-center">
                                <div>
                                    <FontAwesomeIcon icon="poll" className="fonte-responsiva-icon" style={{ color: 'var(--azul)' }} />
                                </div>
                                <div className="fonte-responsiva" style={{ marginLeft: '5%' }}>
                                    {id} - R$ {data.valor}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 d-flex justify-content-center">
                        <a href={"/editarpedido/" + id} className="d-flex text-center align-items-center btn btn-outline-warning btn-lg">
                            <div>
                                <FontAwesomeIcon icon="pencil-alt" className="fonte-responsiva-icon-pequena warning" />
                            </div>
                            <div className="p-2 fonte-responsiva-pequena">
                                Editar este pedido
                            </div>
                        </a>

                        <div className="d-flex justify-content-center align-items-center" style={{ marginLeft: '0.75rem' }}>
                            <span onClick={juntarFunctions} className={bitaoDeleteIsVisible ? "d-flex text-center align-items-center btn btn-outline-danger btn-lg"
                                : "d-flex text-center align-items-center btn btn-outline-danger btn-lg d-none"}>
                                <div>
                                    <FontAwesomeIcon icon="trash-alt" className="fonte-responsiva-icon-pequena danger" />
                                </div>
                                <div className="p-2 fonte-responsiva-pequena">
                                    Excluir este pedido
                                </div>
                            </span>

                            <span className={bitaoDeleteCtzaIsVisible ? "btn btn-outline-danger btn-lg disabled d-none"
                                : "btn btn-outline-danger btn-lg disabled"}>Tem certeza?</span>

                            <span onClick={() => apagarPedido(id)} className={bitaoDeleteSimIsVisible ? "btn btn-outline-danger btn-lg d-none"
                                : "btn btn-outline-danger btn-lg"} style={{ marginLeft: '0.5rem' }}>Sim</span>

                            <span onClick={juntarFunctions} className={bitaoDeleteNaoIsVisible ? "btn btn-outline-success btn-lg d-none"
                                : "btn btn-outline-success btn-lg"} style={{ marginLeft: '0.5rem' }}>Não</span>
                        </div>
                    </div>

                    <div className="w-75 m-3 d-flex">
                        <div className="w-100 p-4 border d-flex headerTabela cor-branca">
                            <div className="w-100 d-flex flex-column p-2 text-center fonte-responsiva-pequena">
                                <div>
                                    <span className="cor-texto-azul">ID Cliente</span> - {data.ClienteId}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Nome do Cliente</span> - {nomeCliente}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Consultar</span> - <Link to={"/cliente/" + data.ClienteId}
                                        className="btn btn-outline-primary btn-md">Cliente</Link>
                                </div>
                                <div>
                                    <span className="cor-texto-azul"> <br /> </span>
                                </div>
                                <div>
                                    <span className="cor-texto-azul">ID Serviço</span> - {data.ServicoId}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Nome do Serviço</span> - {nomeServico}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Consultar</span> - <Link to={"/servico/" + data.ServicoId}
                                        className="btn btn-outline-primary btn-md">Serviço</Link>
                                </div>
                                <div>
                                    <span className="cor-texto-azul"> <br /> </span>
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Valor do Pedido</span> - R$ {data.valor}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Data do Pedido</span> - {data.data}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Data de criação</span> - {data.createdAt}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-100 d-flex justify-content-center align-items-center" style={{ marginTop: '1.5%', marginBottom: '2%' }}>
                        <div className="w-75 p-4 border d-flex flex-column justify-content-center align-items-center headerTabela cor-branca">
                            <div className="w-100 d-flex p-2 justify-content-center align-items-center">
                                <div className="fonte-responsiva">
                                    Detalhes
                                </div>
                            </div>

                            <div className="w-100 d-flex p-2 justify-content-center align-items-center">
                                <div className="w-50 d-flex p-2 justify-content-center align-items-center">
                                    <div>
                                        <FontAwesomeIcon icon="address-card" className="fonte-responsiva-icon-media" style={{ color: 'var(--azul)' }} />
                                    </div>
                                    <div className="fonte-responsiva-media" style={{ marginLeft: '5%' }}>
                                        {data.ClienteId} - {nomeCliente}
                                    </div>
                                </div>
                                <div className="w-50 d-flex p-2 justify-content-center align-items-center">
                                    <div>
                                        <FontAwesomeIcon icon="funnel-dollar" className="fonte-responsiva-icon-media" style={{ color: 'var(--azul)' }} />
                                    </div>
                                    <div className="fonte-responsiva-media" style={{ marginLeft: '5%' }}>
                                        {data.ServicoId} - {nomeServico}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-75 m-3 d-flex">
                        <div className="w-50 p-4 border d-flex headerTabela cor-branca">
                            <div className="w-100 d-flex flex-column p-2 text-center fonte-responsiva-pequena">
                                <div>
                                    <span className="cor-texto-azul">Nome</span> - {nomeCliente}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Endereço</span> - {enderecoCliente}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Cidade</span> - {cidadeCliente}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">UF</span> - {ufCliente}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Nascimento</span> - {nascimentoCliente}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Data de criação</span> - {createdAtCliente}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Total gasto</span> - R$ {clienteGastou}
                                </div>
                            </div>
                        </div>

                        <div className="w-50 p-4 border d-flex headerTabela cor-branca" style={{ marginLeft: "0.75em" }}>
                            <div className="w-100 d-flex flex-column p-2 text-center fonte-responsiva-pequena">
                                <div>
                                    <span className="cor-texto-azul">Nome</span> - {nomeServico}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Descrição</span> - {descricaoServico}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Data de criação</span> - {createdAtServico}
                                </div>
                                <div>
                                    <span className="cor-texto-azul">Total bruto recebido</span> - R$ {servicoLucroBruto}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="m-3 d-flex justify-content-center" style={{ marginBottom: '2%' }}>
                        <div className="p-2">
                            <Link to="/visualizarpedido" className="btn btn-outline-primary btn-lg">Voltar</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}