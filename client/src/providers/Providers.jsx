import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import store from '../redux/store';
import { ThemeProvider, PicoTheme } from './index';
const Providers = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <PicoTheme>
          <ThemeProvider>
            <>
              {children}
            </>
          </ThemeProvider>
        </PicoTheme>
      </Provider> 
    </>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Providers