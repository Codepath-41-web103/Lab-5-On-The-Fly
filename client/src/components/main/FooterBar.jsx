import React from 'react'
import { Footer } from '../semantics/index'
import './FooterBar.scss'

const FooterBar = () => {
  const year = new Date().getFullYear()
  return (
    <Footer>
      <div id="footer-container">
        <p>Made with
          <span>{` `}💜{` `}</span>
          by{` `}
          <a href='https://github.com/WomB0ComB0' target="_blank" rel='noreferrer noopener' style={{
            color: `var(--primary))`
          }}>
            Mike Odnis
          </a>
          &nbsp;and&nbsp;
          <a href="https://github.com/Wisesofthemall" target='_blank' rel='noreferrer noopener'>
            Lovinson Dieujuste
          </a>
        </p>
        <p>
          <small>Copywrite © <span id="year">{year}</span> All rights reserved</small>
        </p>
      </div>
    </Footer>
  )
}

export default FooterBar
