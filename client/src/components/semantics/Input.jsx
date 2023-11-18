// Dont come at me for these 😐
import React from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../lib/utils'
import './Input.scss'

export default function Input({ className, style, type, placeholder }) {
  return (
    <input className={cn('m-0 p-0', className)} style={style} type={type} placeholder={type == 'search' ? placeholder : undefined} />
  )
}
Input.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}