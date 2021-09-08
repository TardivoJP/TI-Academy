import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages(view)/Home/';
import { VisualizarCliente } from './pages(view)/Cliente/VisualizarCliente';
import { VisualizarPedido } from './pages(view)/Pedido/VisualizarPedido';
import { VisualizarServico } from './pages(view)/Servico/VisualizarServico';
import { Menu } from './components/Menu';
import { Servico } from './pages(view)/Servico/Servico';
import { ServicoPedidos } from './pages(view)/Servico/ServicoPedidos';
import { Cliente } from './pages(view)/Cliente/Cliente';
import { ClientePedidos } from './pages(view)/Cliente/ClientePedidos';
import { Pedido } from './pages(view)/Pedido/Pedido';

function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/visualizarcliente" component={VisualizarCliente} />
          <Route exact path="/visualizarservico" component={VisualizarServico} />
          <Route exact path="/visualizarpedido" component={VisualizarPedido} />
          <Route path="/servico/:id" component={Servico} />
          <Route path="/servicopedidos/:id" component={ServicoPedidos} />
          <Route path="/cliente/:id" component={Cliente} />
          <Route path="/clientepedidos/:id" component={ClientePedidos} />
          <Route path="/pedido/:id" component={Pedido} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
