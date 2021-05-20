import React, { useState } from 'react'
import logo from './logo.svg'
import Footer from './components/Footer'
//Import Libraries
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Navbar from './components/Navbar'

//Import CSS
import './App.css'

//Import Components
import SimpleButtons from './components/Buttons'
//Import Pages
import ChatPage from './pages/ChatPage';

import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import CreatePage from './pages/CreateAccountPage';
import Activity from './pages/Activity';


import Upload from './pages/UploadPage';
import Home from './pages/Home';

function App() {

  return (



    <div className="App">

  

    <Router>
    
  
 
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/Login" component={LoginPage}/>
      <Route path="/SearchPage" component={SearchPage}  />
      <Route path="/CreatePage" component={CreatePage}  />
      <Route path="/Chat" component={ChatPage}  />
      <Route path="/Activity" component={Activity}  />
      <Route exact path="/UploadPage" component={Upload}  />
      
      

  
      </Switch> 

      <Footer/>
    
    </Router>
    
    </div>
  )
}

export default App

