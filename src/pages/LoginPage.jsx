import './LoginPage.css'
import React from 'react'


function LoginPage() {
    return (
        <div id="LoginBody">
            <h2 id="TitleLogin">hello Catster!</h2>
                <form action="LoginForm" id="LoginForm">
            <input type="text" /> <br />
            <input type="text" /> <br />
            <input type="button" value="Login" id="LoginButton"  /> <br />
            <input type="button" value="Here!" id="CreateAccount"/>
                </form>
        </div>
    )
}

export default LoginPage
