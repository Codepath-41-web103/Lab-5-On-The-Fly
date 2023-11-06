import React, {  } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, PicoTheme } from './providers/index';
import { Provider } from 'react-redux'
import Loading from './components/dom-states/Loading.jsx';
import UsePageLoading from './hooks/useLoading.jsx';
import store from './redux/store.js'
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
  <Provider store={store}>
    <PicoTheme>
    <ThemeProvider>
      <RootLayout />
    </ThemeProvider>
    </PicoTheme>
  </Provider>
);
