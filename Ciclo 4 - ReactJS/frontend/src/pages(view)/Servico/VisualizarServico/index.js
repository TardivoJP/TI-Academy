import { Container, Table } from "reactstrap";

export const VisualizarServico = () => {
    return (
        <div className="p-3">
            <Container>
                <div className="d-flex flex-column">
                    <Table striped dark hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Serviço</th>
                                <th>Descrição</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>HTML/CSS</td>
                                <td>Páginas web estáticas</td>
                                <td>"(Placeholder)"</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>JS</td>
                                <td>Páginas web dinâmicas</td>
                                <td>"(Placeholder)"</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>SQL</td>
                                <td>Banco de dados</td>
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
                            <a href="/visualizarpedido" className="btn btn-outline-primary btn-md">Pedido</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}