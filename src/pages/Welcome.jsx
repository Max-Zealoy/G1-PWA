/* import */
import React from 'react'
import { useHistory } from "react-router-dom";
import { useStates } from 'react-easier';
import {Link} from "react-router-dom";
import mongoosy from 'mongoosy/frontend';
const { Login } = mongoosy;
import cat from '../images/Buttons/catlogo.png'

/* import pages */
import './LoginPage.css'


export default function LoginPage({ loginCheck }) {

 
    
    const s = useStates({
        email: '',
        password: '',
        error: ''
      });

      const history = useHistory();

      const login = async e => {
        e.preventDefault();
        let { email, password } = s;
        // try to login
        let result = await Login.login({ email, password });
        if (result.js.error) { s.error = 'Login failed'; return; }
        // update login info
        loginCheck();
        // redirect to the start page
        history.push('/');
      };

      return(
      <div id="LoginBody">
            <h2 id="TitleLogin">hello Catster!</h2>
            <img src={cat} alt="" width= "40%" />
            <form onSubmit={login} id="LoginForm">
           Meowstername <br /> 
           <input type="email" id="UserName" placeholder="Email" required {...s.bind('email')} /> <br />
           Meowword <br/>
           <input type="password" placeholder="Password" id="PassWord" required minLength="6"{...s.bind('password')} /> <br />
           {s.error && <p>{s.error}</p>}
           <input type="submit" value="Log in" id="LoginButton" />
            <br></br>

          
             New user? Join our cat army 
             <br></br>
             <Link to="/register">Register</Link>

             </form>
             </div>
      )       
}

