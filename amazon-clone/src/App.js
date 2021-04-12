import './App.css';
import Header from './Header'
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    // Bem convention
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/checkout">
            <h1>Check out</h1>
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
