// Dont come at me for these 😐
import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../lib/utils'
import './Form.scss'

export default function Form({ children, className, style }) {
  return (
    <form className={cn('m-0 p-0', className)} style={style}>
      {children}
    </form>
  )
}
Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}