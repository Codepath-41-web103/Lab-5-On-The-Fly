import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ThemeProvider, PicoTheme } from './providers/index';
const Providers = ({ children }) => {
  return (
    <>
      {children} 
    </>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Providers