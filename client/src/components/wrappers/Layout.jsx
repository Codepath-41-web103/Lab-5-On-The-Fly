import { Fragment } from 'react'
import { NavBar, FooterBar } from '../main/index'
import { Main } from '../semantics/index'
import PropTypes from 'prop-types'
import UsePageLoading from '../../hooks/useLoading'
import { Loading } from '../dom-states/index'
export default function Layout({ children }) {
  const isLoading = UsePageLoading()
  return (
    <Fragment>
      <Fragment>
        <NavBar />
        <Main className={`flex h-fit w-full flex-col items-center justify-center`}>
          {children}
        </Main>
        <FooterBar />
      </Fragment>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}