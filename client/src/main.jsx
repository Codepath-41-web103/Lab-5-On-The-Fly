import React, { } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Providers from './providers/Providers.jsx'
import Wrappers from './config/Wrappers.jsx'
import Loading from './components/dom-states/Loading.jsx';
import UsePageLoading from './hooks/useLoading.jsx';
import '../globals.css'
import '../globals.scss'

const RootLayout = () => {
  const isLoading = UsePageLoading()
  return (
    <>
      {isLoading ?
        (<>
          <Loading />
        </>) :
        (<>
          <React.StrictMode>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </React.StrictMode>
        </>
        )}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Wrappers>
    <Providers>
      <RootLayout />
    </Providers>
  </Wrappers>
);
