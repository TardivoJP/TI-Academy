import '../../../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap";

import { api } from '../../../config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFunnelDollar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faFunnelDollar);

export const VisualizarServico = () => {


    /* Implementação de um evento para confirmar se o usuário realmente quer deletar algum item da lista
    
    Ou seja, ao clicar no botão "Deletar serviço", ele se transforma em uma mensagem perguntando se
    o usuário tem certeza, seguido de dois botões "Sim" e "Não".

    Caso o usuário clicar no botão "Não", esses três elementos se transformam novamente em um único botão
    "Deletar serviço".

    Caso o usuário clicar no botão "Sim", a função apagarServico é executado e o serviço selecionado é excluído


    Em síntese, para atinger este efeito, criamos várias contantes para todos os quatro elementos:
    "Deletar Serviço", "Tem certeza?", "Sim" e "Não"
    Essas constantes utilizam a função useState do react com a lógica booleana "true" ou "false"

    Dessa forma, conseguimos criar uma pequena lógica para controlar a visibilidade desses elementos

    Inicialmente, apenas o botão "Deletar Serviço" está visível, os demais possuem o className "d-none" que os
    torna invisíveis, porém, quando o usuário clica neste botão a situação inverte, removemos essa classe dos
    elementos deixando visíveis, e adicionamos "d-none" ao botão "Deletar Serviço", deixando-o invisível */
    const [bitaoDeleteIsVisible, setBitaoDeleteIsVisible] = useState(true);
    const [bitaoDeleteSimIsVisible, setBitaoDeleteSimIsVisible] = useState(true);
    const [bitaoDeleteNaoIsVisible, setBitaoDeleteNaoIsVisible] = useState(true);
    const [bitaoDeleteCtzaIsVisible, setBitaoDeleteCtzaIsVisible] = useState(true);

    /* Essa mudança de estado é possível através destas quatro funções abaixo, que manipulam a lógica
    booleana de cada elemento de "true" para "false" ou vice-versa */
    function mudarBitaoDeleteInvisivel() { setBitaoDeleteIsVisible(!bitaoDeleteIsVisible) }
    function mudarBitaoDeleteSimInvisivel() { setBitaoDeleteSimIsVisible(!bitaoDeleteSimIsVisible) }
    function mudarBitaoDeleteNaoInvisivel() { setBitaoDeleteNaoIsVisible(!bitaoDeleteNaoIsVisible) }
    function mudarBitaoDeleteCtzaInvisivel() { setBitaoDeleteCtzaIsVisible(!bitaoDeleteCtzaIsVisible) }

    /* Para simplificar a sintaxe do parametro onClick={} dos botões, criamos uma nova função "mestre"
    que chama todas as demais conforme necessário */
    function juntarFunctions() {
        mudarBitaoDeleteInvisivel();
        mudarBitaoDeleteSimInvisivel();
        mudarBitaoDeleteNaoInvisivel();
        mudarBitaoDeleteCtzaInvisivel();
    }

    const [data, setData] = useState([]);

    const [numServicos, setNumServicos] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getServicos = async () => {
        await axios.get(api + radio)
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
        const getNumServicos = async () => {
            await axios.get(api + "/numservicos")
                .then((response) => {
                    setNumServicos(response.data.servicos);
                })
                .catch(() => {
                    setStatus({
                        type: 'error',
                        message: 'Erro: Não foi possível conectar a API.'
                    })
                });
        }
        getNumServicos();
    },[]);

    const apagarServico = async (idServico) => {
        console.log(idServico);

        /* Pelas mesmas razões expostas em comentários acima, chamamos a função "juntarFunctions" para
        simplificar a sintaxe do parametro onClick={}*/
        juntarFunctions();

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.delete(api + "/apagarservico/" + idServico, { headers })
            .then((response) => {
                console.log(response.data.error);
                getServicos();
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível acessar a API.'
                })
            })
    }

    useEffect(() => {
        getServicos();
    }, []);

    const [radio, setRadio] = useState("/listaservicos");

    while ((radio !== "/listaservicos") || (radio !== "/listaservicosnome") || (radio !== "/listaservicosdescricao") ||
        (radio !== "/listaservicosdata")) {
        getServicos();
        break;
    }

    return (
        <div>
            <Container>
                <div className="w-100 d-flex justify-content-center align-items-center" style={{ marginTop: '2.5%' }}>
                    <div className="w-75 p-4 border d-flex justify-content-center align-items-center headerTabela cor-branca">
                        <div className="w-100 d-flex p-2 justify-content-center align-items-center">
                            <div>
                                <FontAwesomeIcon icon="funnel-dollar" className="fonte-responsiva-icon" style={{ color: 'var(--azul)' }} />
                            </div>
                            <div style={{ marginLeft: '5%', fontSize: 'var(--fontegrande)' }}>
                                Tabela dos Serviços
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
                            checked={radio === "/listaservicos"} value="/listaservicos" onChange={(e) => { setRadio(e.target.value) }}></input>
                        <label class="btn btn-outline-primary" for="option1">ID</label>
                    </div>
                    <div className="p-2">
                        <input type="radio" className="btn-check" name="options" id="option2" autocomplete="off"
                            checked={radio === "/listaservicosnome"} value="/listaservicosnome" onChange={(e) => { setRadio(e.target.value) }}></input>
                        <label class="btn btn-outline-primary" for="option2">Nome</label>
                    </div>
                    <div className="p-2">
                        <input type="radio" className="btn-check" name="options" id="option3" autocomplete="off"
                            checked={radio === "/listaservicosdescricao"} value="/listaservicosdescricao" onChange={(e) => { setRadio(e.target.value) }}></input>
                        <label class="btn btn-outline-primary" for="option3">Descrição</label>
                    </div>
                    <div className="p-2">
                        <input type="radio" className="btn-check" name="options" id="option4" autocomplete="off"
                            checked={radio === "/listaservicosdata"} value="/listaservicosdata" onChange={(e) => { setRadio(e.target.value) }}></input>
                        <label class="btn btn-outline-primary" for="option4">Data</label>
                    </div>
                </div>

                <div className="p-2 d-flex flex-column">
                    {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                    <Table striped dark hover>
                        <thead>
                            <tr className="text-center">
                                <th>ID</th>
                                <th>Serviço</th>
                                <th>Descrição</th>
                                <th>Criado em</th>
                                <th colSpan="3">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr className="text-center" key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.createdAt}</td>
                                    <td>
                                        <Link to={"/servico/" + item.id} className="btn btn-outline-primary btn-sm">Consultar</Link>
                                    </td>
                                    <td>
                                        <Link to={"/editarservico/" + item.id} className="btn btn-outline-warning btn-sm">Editar</Link>
                                    </td>
                                    <td>

                                        {/* Aqui, temos a nossa lógica do botão deletar, note que o className de cada elemento está baseado
                                        em uma lógica condicional if else
                                        
                                        Inicialmente todos estão "true", por isso que contém "d-none" no final, com a excessão do botão
                                        "Deletar Serviço" que é o único visível quando esta página de visualizar serviços é carregada
                                        
                                        Caso o usuário clique nesse botão a situação inverte, e todos ficam "false" e novamente apenas
                                        o botão "Deletar Serviço" contém "d-none" no seu else, assim ele fica invisível enquanto os outros
                                        elementos ficam visíveis*/}
                                        <span onClick={juntarFunctions} className={bitaoDeleteIsVisible ? "btn btn-outline-danger btn-sm"
                                            : "btn btn-outline-danger btn-sm d-none"}>Deletar</span>

                                        <span className={bitaoDeleteCtzaIsVisible ? "btn btn-outline-danger btn-sm disabled d-none"
                                            : "btn btn-outline-danger btn-sm disabled"}>Tem certeza?</span>

                                        <span onClick={() => apagarServico(item.id)} className={bitaoDeleteSimIsVisible ? "btn btn-outline-danger btn-sm d-none"
                                            : "btn btn-outline-danger btn-sm"} style={{ marginLeft: '0.5rem' }}>Sim</span>

                                        <span onClick={juntarFunctions} className={bitaoDeleteNaoIsVisible ? "btn btn-outline-success btn-sm d-none"
                                            : "btn btn-outline-success btn-sm"} style={{ marginLeft: '0.5rem' }}>Não</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <div className="text-center fonte-responsiva-pequena">
                        <span className="cor-texto-azul">Número de serviços</span> - {numServicos}
                    </div>

                    <div className="p-2 d-flex justify-content-center">
                        <div className="p-2">
                            <a href="/cadastrarservico" className="btn btn-outline-success btn-lg">Criar novo serviço</a>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center" style={{ marginBottom: '8%' }}>
                        <div className="p-2">
                            <a href="/" className="btn btn-outline-primary btn-lg">Voltar</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarcliente" className="btn btn-outline-primary btn-lg">Clientes</a>
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