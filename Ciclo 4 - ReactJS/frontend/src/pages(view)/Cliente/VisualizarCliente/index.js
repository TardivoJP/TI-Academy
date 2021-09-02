import { Container, Table } from "reactstrap";

export const VisualizarCliente = () => {
    return (
        <div className="p-3">
            <Container>
                <div className="d-flex flex-column">
                    <Table striped dark hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Endereço</th>
                                <th>Cidade</th>
                                <th>UF</th>
                                <th>Nascimento</th>
                                <th>Primeira Compra</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Francisco</td>
                                <td>Avenida Horácio Racanello Filho</td>
                                <td>Maringá</td>
                                <td>PR</td>
                                <td>1997-02-19</td>
                                <td>2021-08-27 20:03:04</td>
                                <td>"(Placeholder)"</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Fulano de Tal</td>
                                <td>Rua Ciclano de Almeida, 777</td>
                                <td>Porto Alegre</td>
                                <td>RS</td>
                                <td>1980-08-20</td>
                                <td>2021-08-27 21:06:00</td>
                                <td>"(Placeholder)"</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Ciclano de Fal</td>
                                <td>Rua das Coves, 999</td>
                                <td>Ourinhos</td>
                                <td>SP</td>
                                <td>1975-03-08</td>
                                <td>2021-08-31 18:36:21</td>
                                <td>"(Placeholder)"</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-center">
                        <div className="p-2">
                            <a href="/" className="btn btn-outline-primary btn-md">Voltar</a>
                        </div>
                        <div className="p-2">
                            <a href="/visualizarservico" className="btn btn-outline-primary btn-md">Serviço</a>
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