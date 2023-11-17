import PropTypes from 'prop-types';
// import { AuthWrapper } from './index'; 
import React from 'react'
const Wrappers = ({children}) => {
  return (
    <>
      {children}
    </>
  )
}
Wrappers.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Wrappers
