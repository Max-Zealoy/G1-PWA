import React from 'react';
import { useHistory } from "react-router-dom";
import { Style, useStates } from 'react-easier';
import mongoosy from 'mongoosy/frontend';
import './styling/RegisterPage.css'
import cat from './images/Buttons/catlogo.png'

const { User, Login } = mongoosy;

export default function RegisterPage({ loginCheck }) {
  // LOGIC

  const s = useStates({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
    error: ''
  });

  const history = useHistory();

  const register = async e => {
    e.preventDefault();
    // check that passwords match
    let error = s.password === s.passwordRepeat ?
      '' : 'Passwords does not match...';
    if (error) { s.error = error; return; }
    let { name, email, password } = s;
    let newUser = new User({ name, email, password });
    let result = await newUser.save();
    // check that the server did not give us an error
    error = !result.error ?
      '' : 'Email-address already in use!';
    if (error) { s.error = error; return; }
    // login
    await Login.login({ email, password });
    // update login info
    loginCheck();
    // redirect to the start page
    history.push('/');
  };

  // TEMPLATE
  const render = () => <Style css={css()}>
    <div id="RegisterBody">
    <h1 id="RegisterTitle">Join our awesome cat family!</h1>
    <form onSubmit={register} autoComplete="off" id="RegisterForm">
      <input type="text" placeholder="Your name"
        required {...s.bind('name')} /> <br />
      <input type="email" placeholder="Email"
        required {...s.bind('email')} /><br />
      <input type="password" placeholder="Password"
        required minLength="6"{...s.bind('password')} /><br />
      <input type="password" placeholder="Repeat password"
        required minLength="6" {...s.bind('passwordRepeat')} /><br />
      {s.error && <p>{s.error}</p>}
      <input type="submit" value="Register" />
    </form>
    </div>
  </Style>;

  // STYLE
  const css = () => /*css*/`
  `;

  return render();
}