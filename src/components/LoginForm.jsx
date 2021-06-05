import '../styling/LoginPage.css'
import cat from '../images/Buttons/catlogo.png'
export default function LoginForm() {

  const g = useNamedContext('global');

  const s = useStates({
    email: '',
    password: '',
    failMessage: ''
  });

  async function login(e) {
    e.preventDefault();
    let result = (await Login.login({
      email: s.email,
      password: s.password
    })).js;

    if (result.error) {
      s.failMessage = 'Something went wrong. Please try again!';
      s.email = '';
      s.password = '';
    }
    else {
      g.user = result;
    }
  }

  return(
  <div id="LoginBody">

      <If c={s.signup}>
        <SignupForm />
        <Else>
        <h2 id="TitleLogin">Welcome to Catsnap!</h2>
        <img src={cat} alt=""  id="Kattfan" />
          
          <If c={s.failMessage}>
            <p className="text-danger">{s.failMessage}</p>
          </If>
          <form onSubmit={login} id="LoginForm">
              Meowster email
              <br></br>
              <input required type="email"
                 id="UserName" placeholder="Email" {...s.bind('email')} />
              <br></br>

              Meowword
              <br></br>

              <input required minLength="6" type="password" id="PassWord" placeholder="Password" {...s.bind('password')} />
              <br></br>
            <input type="submit" id="LoginButton" value="Login"/>
            <br></br>
            New user? Join our cat army 
            <br></br>

            <a onClick={() => s.signup = true}
            className="mb-4 d-block" href="#">
              <input type="submit" id="RegisterButton" value="Here!"/>
            </a>
          </form>
        </Else>
      </If>
      </div>
  )
}