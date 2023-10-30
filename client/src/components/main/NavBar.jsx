import React from 'react'
import { DarkThemeToggle } from 'flowbite-react'
import { Nav, Menu } from '../semantics/index'
import './NavBar.scss'

const NavBar = () => {
  return (
    <Nav>
      <Menu>
        <li>
          <img src="/Chatat.png" alt="" />
          <span>
            Chatat
          </span>
        </li>
      </Menu>
      <Menu>
        <li>
          <DarkThemeToggle />
        </li>
        <li>
          {/* Auth logic, for user avatar */}
        </li>
      </Menu>
    </Nav>
  )
}
export default NavBar
