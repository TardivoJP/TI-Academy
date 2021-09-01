import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages(view)/Home/';
import {Cliente} from './pages(view)/Cliente';
import {Pedido} from './pages(view)/Pedido';
import {Servico} from './pages(view)/Servico';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/clientes" component={Cliente}/>
          <Route exact path="/pedido" component={Pedido}/>
          <Route exact path="/servico" component={Servico}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
