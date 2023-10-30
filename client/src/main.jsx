import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Flowbite } from 'flowbite-react';
import './globals.css'
import '../styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Flowbite>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Flowbite>
  </React.StrictMode>,
)
