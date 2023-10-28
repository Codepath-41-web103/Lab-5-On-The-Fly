import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './globals.css'
import { BrowserRouter } from 'react-router-dom'
// import { DarkThemeToggle, Flowbite } from 'flowbite-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Flowbite> */}
      <BrowserRouter>
        {/* <DarkThemeToggle /> */}
        <App />
      </BrowserRouter>
    {/* </Flowbite> */}
  </React.StrictMode>,
)
