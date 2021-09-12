import '../../../App.css';
import axios from 'axios';
import { useState } from 'react';
import { Container, Form, FormGroup, Input, Label, Button, Alert, Spinner } from 'reactstrap';
import { api } from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFunnelDollar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faFunnelDollar);


export const CadastrarServico = () => {

    const [servico, setServico] = useState({
        nome: '',
        descricao: ''
    });

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    })

    const valorInput = e => setServico({
        ...servico, [e.target.name]: e.target.value
    })

    const cadServico = async e => {
        e.preventDefault();

        setStatus({
            formSave: true
        });

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.post(api + "/servicos", servico, { headers })
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
            })
            .catch(() => {
                setStatus({
                    formSave: false,
                    type: 'error',
                    message: 'Erro: não foi possível se conectar a API.'
                });
            });
    };

    return (
        <div>
            <Container>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="w-100 d-flex justify-content-center align-items-center" style={{ marginTop: '1.5%', marginBottom: '2%' }}>
                        <div className="w-75 p-4 border d-flex justify-content-center align-items-center headerTabela cor-branca">
                            <div className="w-100 d-flex p-2 justify-content-center align-items-center">
                                <div>
                                    <FontAwesomeIcon icon="funnel-dollar" className="fonte-responsiva-icon" style={{ color: 'var(--verde)' }} />
                                </div>
                                <div className="fonte-responsiva" style={{ marginLeft: '5%' }}>
                                    Cadastrar serviço
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-75 m-3 d-flex">
                        <div className="w-100 p-4 border d-flex headerTabela cor-branca">
                            <div className="w-100 p-2 d-flex justify-content-center align-items-center fonte-responsiva-pequena">
                                <Form className="w-50 p-2" onSubmit={cadServico}>
                                    <FormGroup className="p-2">
                                        <Label>Nome</Label>
                                        <Input type="text" name="nome" placeholder="Nome do serviço" onChange={valorInput}></Input>
                                    </FormGroup>

                                    <FormGroup className="p-2">
                                        <Label>Descrição</Label>
                                        <Input type="text" name="descricao" placeholder="Descrição do serviço" onChange={valorInput}></Input>
                                    </FormGroup>

                                    <div className="p-2 d-flex justify-content-center align-items-center">
                                        {status.formSave ? <Button type="submit" outline color="warning" disabled>
                                            <Spinner children="" style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem', color: 'primary' }} />{'Salvando...'}
                                        </Button> :
                                            <Button type="submit" outline color="success">Cadastrar</Button>}

                                        <Button className="m-2" type="reset" outline color="warning">Limpar</Button>
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
                            <a href="/visualizarservico" className="btn btn-outline-primary btn-lg">Voltar</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}