import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/serviceWorker.js')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err));
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)



