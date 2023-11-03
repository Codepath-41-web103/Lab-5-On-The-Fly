import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './providers/index';
import { Provider } from 'react-redux'
import store from './redux/store.js'
import '../globals.css'
import '../globals.scss'

const RootLayout = () => {
  return (
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <ThemeProvider>
        <RootLayout />
      </ThemeProvider>
  </Provider>
);
