import { Container, Table } from "reactstrap";

export const VisualizarPedido = () => {
    return (
        <div className="p-3">
            <Container>
                <div className="d-flex flex-column">
                    <Table striped dark hover>
                        <thead>
                            <tr>
                                <th>ID Pedido</th>
                                <th>ID Cliente</th>
                                <th>ID Serviço</th>
                                <th>Valor</th>
                                <th>Data</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>1</td>
                                <td>1</td>
                                <td>R$ 999,99</td>
                                <td>27/08/2021</td>
                                <td>"(Placeholder)"</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>2</td>
                                <td>2</td>
                                <td>R$ 499,99</td>
                                <td>30/08/2021</td>
                                <td>"(Placeholder)"</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>3</td>
                                <td>1</td>
                                <td>R$ 999,99</td>
                                <td>31/08/2021</td>
                                <td>"(Placeholder)"</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-center">
                        <div className="p-2">
                            <a href="/" className="btn btn-outline-primary btn-md">Voltar</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarcliente" className="btn btn-outline-primary btn-md">Cliente</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarservico" className="btn btn-outline-primary btn-md">Serviço</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}