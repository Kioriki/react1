import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/ui/Router'
import Home from './components/screens/home/Home'
import './assets/styles/global.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
