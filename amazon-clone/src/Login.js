import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Styles/Login.css";
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const signIn = (e) => {
    e.preventDefault();
    //some firebase login
    auth.signInWithEmailAndPassword(email, pass)
    .then(auth => {
      history.push("/")
    })
    .catch(err => alert(err.message))
  }

  const register = e => {
    e.preventDefault();
    //use firebase to create a user
    auth.createUserWithEmailAndPassword(email, pass)
    .then((auth) => {
      if(auth){
        history.push("/")
      }
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img 
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container" onSubmit={e => e.preventDefault()}>
        <h1>Sign-in</h1>
        <form action="">

          <h5>E-mail</h5>
          <input 
          type="text" 
          value={email}
          onChange={e => setEmail(e.target.value)}
          />

          <h5>password</h5>
          <input 
          type="password"
          value={pass}
          onChange={e => setPass(e.target.value)} 
          />

          <button 
          type='submit'
          className="login__signinButton"
          onClick={signIn}
          >
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to <strong>Amazon CLONE's</strong> Conditions of Use & Sale. Please See our Privacy Notice, our Cookies Notice and Our Interest-Based Ads Notice.
        </p>
        <button 
        className="login__registerButton"
        onClick={register}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login
