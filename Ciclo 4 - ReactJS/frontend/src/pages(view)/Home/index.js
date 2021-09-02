import { Container } from 'reactstrap';

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="mr-auto p-2">
                        <h1>Página inicial</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="p-2">
                            <a href="/visualizarcliente" className="btn btn-outline-primary btn-sm">Cliente</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarservico" className="btn btn-outline-primary btn-sm">Serviço</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarpedido" className="btn btn-outline-primary btn-sm">Pedido</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}