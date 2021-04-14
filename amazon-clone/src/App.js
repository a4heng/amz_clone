import './Styles/App.css';
import React, { useEffect } from 'react';
import Header from './Header'
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Components/Payment';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';

const promise = loadStripe('pk_test_51IfxRPAbWefmBUYC7jDSgHappaleF6oNzqmRj9QJtfTsJNisLNO6wuQjmpFHrvOy82X5G6SdgfCripMSJpslEdRj00Lk54q3eQ')

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //if there is a user the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    // Bem convention
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
