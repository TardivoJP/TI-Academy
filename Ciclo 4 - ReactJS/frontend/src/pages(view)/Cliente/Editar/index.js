import '../../../App.css';
import axios from "axios";
import { useEffect, useState } from "react"
import { Link, Redirect } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap"
import { api } from "../../../config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faAddressCard, faTrashAlt, faPencilAlt);


export const EditarCliente = (props) => {

    const [id] = useState(props.match.params.id);

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [nascimento, setNascimento] = useState('');

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const edtCliente = async e => {
        e.preventDefault();

        setStatus({
            formSave: true
        });

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.put(api + "/editarcliente", { id, nome, endereco, cidade, uf, nascimento }, { headers })
            .then((response) => {
                if (response.data.error) {
                    setStatus({
                        formSave: false,
                        type: 'error',
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        formSave: false,
                        type: 'success',
                        message: response.data.message
                    });
                }
            }).catch(() => {
                setStatus({
                    formSave: false,
                    type: 'error',
                    message: 'Erro: Não foi possível acessar a API.'
                })
            })
    };

    useEffect(() => {
        const getCliente = async () => {
            await axios.get(api + "/cliente/" + id)
                .then((response) => {
                    setNome(response.data.cliente.nome);
                    setEndereco(response.data.cliente.endereco);
                    setCidade(response.data.cliente.cidade);
                    setUf(response.data.cliente.uf);
                    setNascimento(response.data.cliente.nascimento);
                }).catch(() => {
                    console.log("Erro: Não foi possível conectar a API.")
                });
        }
        getCliente();
    }, [id]);


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

    const apagarCliente = async (idCliente) => {
        console.log(idCliente);

        juntarFunctions();

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.delete(api + "/apagarcliente/" + idCliente, { headers })
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
            {voltarTabela.redirect ? (<Redirect push to="/visualizarcliente" />) : null}
            <Container>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="w-100 d-flex justify-content-center align-items-center" style={{ marginTop: '1.5%', marginBottom: '2%' }}>
                        <div className="w-75 p-4 border d-flex justify-content-center align-items-center headerTabela cor-branca">
                            <div className="w-100 d-flex p-2 justify-content-center align-items-center">
                                <div>
                                    <FontAwesomeIcon icon="address-card" className="fonte-responsiva-icon" style={{ color: 'var(--amarelo)' }} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon="pencil-alt" className="fonte-responsiva-icon-pequena"
                                        style={{ marginLeft: '1em', color: 'var(--amarelo)' }} />
                                </div>
                                <div className="fonte-responsiva" style={{ marginLeft: '2%' }}>
                                    {id} - {nome}
                                </div>
                                <div>
                                    <FontAwesomeIcon icon="pencil-alt" className="fonte-responsiva-icon-pequena"
                                        style={{ marginLeft: '1em', color: 'var(--amarelo)' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 d-flex justify-content-center">
                        <a href={"/cliente/" + id} className="d-flex text-center align-items-center btn btn-outline-primary btn-lg">
                            <div>
                                <FontAwesomeIcon icon="address-card" className="fonte-responsiva-icon-pequena primary" />
                            </div>
                            <div className="p-2 fonte-responsiva-pequena">
                                Consultar este cliente
                            </div>
                        </a>

                        <div className="d-flex justify-content-center align-items-center" style={{ marginLeft: '0.75rem' }}>
                            <span onClick={juntarFunctions} className={bitaoDeleteIsVisible ? "d-flex text-center align-items-center btn btn-outline-danger btn-lg"
                                : "d-flex text-center align-items-center btn btn-outline-danger btn-lg d-none"}>
                                <div>
                                    <FontAwesomeIcon icon="trash-alt" className="fonte-responsiva-icon-pequena danger" />
                                </div>
                                <div className="p-2 fonte-responsiva-pequena">
                                    Excluir este cliente
                                </div>
                            </span>

                            <span className={bitaoDeleteCtzaIsVisible ? "btn btn-outline-danger btn-lg disabled d-none fonte-responsiva-pequena"
                                : "btn btn-outline-danger btn-lg disabled fonte-responsiva-pequena"}>Tem certeza?</span>

                            <span onClick={() => apagarCliente(id)} className={bitaoDeleteSimIsVisible ? "btn btn-outline-danger btn-lg d-none fonte-responsiva-pequena"
                                : "btn btn-outline-danger btn-lg fonte-responsiva-pequena"} style={{ marginLeft: '0.5rem' }}>Sim</span>

                            <span onClick={juntarFunctions} className={bitaoDeleteNaoIsVisible ? "btn btn-outline-success btn-lg d-none fonte-responsiva-pequena"
                                : "btn btn-outline-success btn-lg fonte-responsiva-pequena"} style={{ marginLeft: '0.5rem' }}>Não</span>
                        </div>
                    </div>

                    <div className="w-75 m-3 d-flex">
                        <div className="w-100 p-4 border d-flex headerTabela cor-branca">
                            <div className="w-100 p-2 d-flex justify-content-center align-items-center fonte-responsiva-pequena">
                                <Form className="w-50 p-2" onSubmit={edtCliente}>
                                    <FormGroup className="p-2">
                                        <Label>Nome</Label>
                                        <Input type="text" name="nome" placeholder="Nome do cliente" value={nome}
                                            onChange={e => setNome(e.target.value)}></Input>
                                    </FormGroup>

                                    <FormGroup className="p-2">
                                        <Label>Endereço</Label>
                                        <Input type="text" name="endereco" placeholder="Endereço do cliente" value={endereco}
                                            onChange={e => setEndereco(e.target.value)}></Input>
                                    </FormGroup>

                                    <FormGroup className="p-2">
                                        <Label>Cidade</Label>
                                        <Input type="text" name="cidade" placeholder="Cidade do cliente" value={cidade}
                                            onChange={e => setCidade(e.target.value)}></Input>
                                    </FormGroup>

                                    <FormGroup className="p-2">
                                        <Label>UF</Label>
                                        <Input type="text" name="uf" placeholder="UF do cliente" value={uf}
                                            onChange={e => setUf(e.target.value)}></Input>
                                    </FormGroup>

                                    <FormGroup className="p-2">
                                        <Label>Nascimento</Label>
                                        <Input type="text" name="nascimento" placeholder="Data de nascimento do cliente" value={nascimento}
                                            onChange={e => setNascimento(e.target.value)}></Input>
                                    </FormGroup>

                                    <div className="p-2 d-flex justify-content-center align-items-center">
                                        {status.formSave ? <Button type="submit" outline color="warning" disabled>
                                            <Spinner children="" style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem', color: 'primary' }} />{'Salvando...'}
                                        </Button> :
                                            <Button type="submit" outline color="warning">Salvar Edição</Button>}
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>


                    {status.type === 'error' ? <div className="w-100 p-2 d-flex justify-content-center align-items-center">
                        <Alert className="w-50 d-flex justify-content-center align-items-center" color="danger">{status.message}</Alert>
                    </div> : ""}
                    {status.type === 'success' ? <div className="w-100 p-2 d-flex justify-content-center align-items-center">
                        <Alert className="w-50 d-flex justify-content-center align-items-center" color="success">{status.message}</Alert>
                    </div> : ""}

                    <div className="d-flex justify-content-center" style={{ marginBottom: '2%' }}>
                        <div className="p-2">
                            <Link to={"/visualizarcliente"} className="btn btn-outline-primary btn-lg">Voltar</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}