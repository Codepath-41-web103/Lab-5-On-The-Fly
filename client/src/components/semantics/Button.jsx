import React from 'react'
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils'
import './Button.scss'

export default function Button({className, children, style}) {
  return (
    <button className={cn('', className)} style={style}>
      {children}
    </button>
  )
}
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}