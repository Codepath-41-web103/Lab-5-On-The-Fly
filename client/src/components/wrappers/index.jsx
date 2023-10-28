import { Fragment } from 'react'
import { Nav, Footer } from '../semantics/index'
import PropTypes from 'prop-types'
export default function Layout({ children }) {
  return (
    <Fragment>
      <Nav />
      {children}
      <Footer />
    </Fragment>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}