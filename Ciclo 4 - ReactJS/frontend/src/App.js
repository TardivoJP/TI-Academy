import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages(view)/Home/';
import {VisualizarCliente} from './pages(view)/Cliente/VisualizarCliente';
import {Pedido} from './pages(view)/Pedido';
import {VisualizarServico} from './pages(view)/Servico/VisualizarServico';
import {Menu} from './components/Menu';

function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/visualizarcliente" component={VisualizarCliente}/>
          <Route exact path="/visualizarservico" component={VisualizarServico}/>
          <Route exact path="/pedido" component={Pedido}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
