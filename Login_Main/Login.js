import './Login.css';
import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react';
import Home from './Home';
import * as React from 'react';
import Logo from "./logo";
import {
  Routes,
  Route,
  useNavigate,
  Navigate
} from "react-router-dom";
import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import Bubble from './components/ common/Bubble'
  

export default function Login(){

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
let navigate = useNavigate();

const handleSubmitLg = (e) => {
    e.preventDefault();
    const authentication = getAuth();
        signInWithEmailAndPassword(authentication, email, password)
          .then((response) => {
            navigate('/home')
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          })
    
    }

const handleSubmitRg = (e) =>{
    e.preventDefault();
    const authentication = getAuth();
        createUserWithEmailAndPassword(authentication, email, password)
          .then((response) => {
            navigate('/home')
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          })
    
}

    return (

        <div>
            <Bubble/>
          <p>
            <title>Slide Navbar</title>
            <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
            <link
              href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
              rel="stylesheet"
            />
          </p>
          
          <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className="signup">

            
              <form onSubmit={handleSubmitRg}>
                <label htmlFor="chk" aria-hidden="true">
                  Register 
                </label>
                <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Sign up</button>
              </form>
            </div>


            <div className="login">
              <form onSubmit={handleSubmitLg}>
                <label htmlFor="chk" aria-hidden="true">
                  Login
                </label>
                <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Login</button>
              </form>
            </div>
          </div>
          <p /> 
        </div>
        
        )


}






