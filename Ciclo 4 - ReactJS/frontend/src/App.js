import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages(view)/Home/';
import { VisualizarCliente } from './pages(view)/Cliente/VisualizarCliente';
import { VisualizarPedido } from './pages(view)/Pedido/VisualizarPedido';
import { VisualizarServico } from './pages(view)/Servico/VisualizarServico';
import { Menu } from './components/Menu';
import { Servico } from './pages(view)/Servico/Servico';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
