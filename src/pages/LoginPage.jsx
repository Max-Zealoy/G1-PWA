/* import */
import React from 'react'
import {Link} from "react-router-dom";
import cat from '../images/Buttons/catlogo.png'

/* import pages */
import './LoginPage.css'
import CreateAccountPage from './CreateAccountPage'


function LoginPage() {

    
    return (
        <div id="LoginBody">
            <h2 id="TitleLogin">hello Catster!</h2>
            <img src={cat} alt="" width= "40%" />
            <form action="LoginForm" id="LoginForm">
           Meowstername <br /> <input type="text" id="UserName" /> <br />
            Meowword <br /><input type="text" id="PassWord" /> <br />

            <Link to='../'> <input type="button" value="Login" id="LoginButton"  />
             <br />
             </Link>
              New user? Join our cat army 
             <br />

             <Link to='../CreatePage'><input type="button" value="Here!" id="CreateAccountButton"/>
             </Link>
                </form>
                
        </div>
    )
}

export default LoginPage
