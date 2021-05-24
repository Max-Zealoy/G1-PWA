import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory }
  from "react-router-dom";
import { withContext, useNamedContext, Style, If, Else }
  from 'react-easier';
import StartPage from './StartPage';
import RegisterPage from './RegisterPage';
import mongoosy from 'mongoosy/frontend';
import ChatPage from './pages/ChatPage';
import SearchPage from './pages/SearchPage';
import Welcome from './pages/Welcome';
import CreatePage from './pages/CreateAccountPage';
import Activity from './pages/Activity';
import Profile from './pages/ProfilePage';
import Upload from './pages/UploadPage';
import Home from './pages/Home';
const { Login } = mongoosy;


//Import CSS
import './App.css'
// This shouldn't be needed but ensures that 
// we do not get any resets of these context vars
let photos = [], messages = [];

export default withContext('global', {
  // GLOBAL CONTEXT
  user: false,
  sseConnecton: false,
  display: null,
  photos,
  messages
}, function App() {

  // LOGIC
  const g = useNamedContext('global');
  const history = useHistory();

  // start an SSE connection or close it if no user
  const startSSE = user => {
    // someone has been logged in but has now logged out
    // close sse connection and empty messages and photos
    if (!user && g.sseConnection) {
      g.sseConnection.close();
      photos = g.photos = [];
      messages = g.messages = [];
      return;
    }
    // we already have a sse connection (and are logged in)
    if (g.sseConnection) { return; }
    // logged in and not sse connection - so create one
    let sse = new EventSource('/api/sse');
    // add photos from sse
    sse.addEventListener('photos',
      e => photos = g.photos = [...photos, ...JSON.parse(e.data)]
    );
    // add messages from sse
    sse.addEventListener('messages',
      e => messages = g.messages = [...messages, ...JSON.parse(e.data)]
    );
    g.sseConnection = sse;
  }

  // check if a user is logged in and who it is
  const loginCheck = async () => {
    let user = await Login.check();
    startSSE(user);
    g.user = user.js.email ? user : false;
    g.display = true;
  }

  // when the App mounts
  useEffect(() => loginCheck(), []);

  // logout
  const logout = async e => {

    await Login.logout();
    loginCheck();
    e.preventDefault();

    // redirect to the start page
    history.push('./welcome');
  }

 


  // TEMPLATE
  const render = () => g.display && <Style css={css()}>
    <Router>
        <div>
        <If c={g.user}>
          <p className="User">Logged in as {g.user.name} ({g.user.email})</p>
          <div className="Logout">
          <Link to="./welcome"><p onClick={logout}>Log out</p></Link>


          </div>
          </If>
      </div>
        


      <Switch>
        <Route exact path="/">
          <If c={g.user}>
            <SearchPage />
            <Else>
            <Welcome {...{ loginCheck }} />
            </Else>
          </If>
        </Route>
        <Route path="/register">
          <RegisterPage {...{ loginCheck }} />
        </Route>
        <Route path="/Welcome">
          <Welcome {...{ loginCheck }} />
        </Route>
        
      <Route exact path="/" component={SearchPage}/>
      <Route exact path="/Welcome" component={Welcome}/>
      <Route exact path="/SearchPage" component={SearchPage}  />
      <Route exact path="/StartPage" component={StartPage}  />
      <Route exact path="/CreatePage" component={CreatePage}  />
      <Route exact path="/Chat" component={ChatPage}  />
      <Route exact path="/Activity" component={Activity}  />
      <Route exact path="/Profile" component={Profile}  />
      <Route exact path="/Home" component={Home}  />
      <Route exact path="/UploadPage" component={Upload}  />
      </Switch>

    </Router>
  </Style>;

  // STYLE
  const css = () => /*css*/`
  
  `;

  return render();
});