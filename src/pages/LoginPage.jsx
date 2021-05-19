import './LoginPage.css'
import React from 'react'
import cat from '../images/Buttons/catlogo.png'

function LoginPage() {
    return (
        <div id="LoginBody">
            <h2 id="TitleLogin">hello Catster!</h2>
            <img src={cat} alt="" width= "40%" />
                <form action="LoginForm" id="LoginForm">
            <input type="text" id="UserName" /> <br />
            <input type="text" id="PassWord" /> <br />

            <input type="button" value="Login" id="LoginButton"  />
             <br />
              New user? Join our cat army 
             <br />
            <input type="button" value="Here!" id="CreateAccountButton"/>
                </form>
        </div>
    )
}

export default LoginPage
