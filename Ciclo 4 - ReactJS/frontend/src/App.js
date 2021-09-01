import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages(view)/Home/';
import {VisualizarCliente} from './pages(view)/VisualizarCliente/';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/visualizarcliente" component={VisualizarCliente}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
