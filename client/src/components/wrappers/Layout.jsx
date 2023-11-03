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
      {isLoading ? (<Loading />) :
        (
          <Fragment>
            <NavBar />
            <Main className={`h-fit`}>
              {children}
            </Main>
            <FooterBar />
          </Fragment>
        )
      }
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}