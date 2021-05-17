//Import Libraries
import React from 'react'
import { BrowserRouter, Route, Switch, } from "react-router-dom";

//Import CSS
import './App.css'

//Import Components
import SimpleButtons from './components/Buttons'
import Footer from './components/Footer'
//Import Pages
import ChatPage from './pages/ChatPage';
import ActivityPage from './pages/ActivityPage';
import SearchPage from './pages/SearchPage';



function App() {


  return (
    
    <div className="App">

    <BrowserRouter>

      <header/>
      <SimpleButtons/>

      <Switch>
      <Route exact path="/" component={SearchPage}  />
      <Route exact path="/Chat" component={ChatPage}  />
      <Route exact path="/Activity" component={ActivityPage}  />

      </Switch> 

      <Footer/>

    </BrowserRouter>

    </div>
  )
}

export default App
