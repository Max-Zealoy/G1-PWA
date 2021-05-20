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
import ActivityPage from './pages/ActivityPage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import CreatePage from './pages/CreateAccountPage';
import Upload from './pages/UploadPage';
function App() {

  return (



    <div className="App">

    





    <Router>
    
      
      <Navbar/>
      <SimpleButtons/>
      <Switch>
      <Route exact path="/" component={SearchPage}/>
      <Route exact path="/Login" component={LoginPage}/>
      <Route exact path="/SearchPage" component={SearchPage}  />
      <Route exact path="/CreatePage" component={CreatePage}  />
      <Route exact path="/Chat" component={ChatPage}  />
      <Route exact path="/Activity" component={ActivityPage}  />

      <Route exact path="/UploadPage" component={Upload}  />
      
      

  
      </Switch> 

      <Footer/>
    
    </Router>
    
    </div>
  )
}

export default App

