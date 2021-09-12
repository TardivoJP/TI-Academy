import '../../App.css';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faFunnelDollar, faPoll } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faAddressCard, faFunnelDollar, faPoll);

export const Home = () => {
    return (
        <div>
            <div>
                <img id="hero-img" className="p-absolute" src="/images/codigoslaptop.jpg" alt="Laptop com códigos"></img>
                <h2 className="hero-text">Tudo o que você precisa de solução em TIC ao alcance de um clique!</h2>
            </div>

            <div className="flex-responsivo-box-botoes justify-content-evenly align-items-center caixa-dos-botoes p-4 border cor-branca">
                <div className="p-2">
                    <a href="/visualizarcliente" className="d-flex flex-column btn btn-lg grow">
                        <div>
                            <FontAwesomeIcon icon="address-card" className="fonte-responsiva-icon" />
                        </div>
                        <div className="fonte-responsiva cor-texto-preta">
                            Clientes
                        </div>
                    </a>
                </div>

                <div className="p-2">
                    <a href="/visualizarservico" className="d-flex flex-column btn btn-lg grow">
                        <div>
                            <FontAwesomeIcon icon="funnel-dollar" className="fonte-responsiva-icon" />
                        </div>
                        <div className="fonte-responsiva cor-texto-preta">
                            Serviços
                        </div>
                    </a>
                </div>

                <div className="p-2">
                    <a href="/visualizarpedido" className="d-flex flex-column btn btn-lg grow">
                        <div>
                            <FontAwesomeIcon icon="poll" className="fonte-responsiva-icon" />
                        </div>
                        <div className="fonte-responsiva cor-texto-preta">
                            Pedidos
                        </div>
                    </a>
                </div>
            </div>

            <Container>
                <div className="w-100 p-3 d-flex flex-column margem-conteudo-responsiva">

                    <div className="w-100 flex-responsivo justify-content-center">
                        <img id="rede-img" className="m-2" src="/images/equipamentorede.jpg" alt="Equipamento de rede"></img>
                        <div className="paragrafo-responsivo m-2 justificar-texto">
                            <h1>Redução de gastos e aumento da produtividade</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="w-100 flex-responsivo justify-content-center" style={{ marginTop: '5%' }}>
                        <img id="rede-img" className="m-2" src="/images/reuniao.jpg" alt="Reunião corporativa"></img>
                        <div className="paragrafo-responsivo m-2 justificar-texto">
                            <h1>Eficiência na organização do ambiente de trabalho</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="w-100 flex-responsivo justify-content-center" style={{ marginTop: '5%' }}>
                        <img id="rede-img" className="m-2" src="/images/homemtablet.jpg" alt="Homem utilizando tablet"></img>
                        <div className="paragrafo-responsivo m-2 justificar-texto">
                            <h1>Acessibilidade em variados dispositivos</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.</p>
                        </div>
                    </div>

                </div>
            </Container>

            <div className="d-flex justify-content-evenly w-100 p-3 cor-azul">
                <div className="p-2">
                    <div className="fonte-media cor-texto-branca">
                        Todos os direitos reservados - Services TI Academy - 2021
                    </div>
                </div>
            </div>
        </div>
    )
}