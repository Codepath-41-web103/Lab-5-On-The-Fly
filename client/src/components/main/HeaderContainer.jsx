import React from 'react'
import { Header, Section, Article, Picture } from '../semantics/index'
import './HeaderContainer.scss'

const HeaderContainer = () => {
  return (
    <Header
      className={``}
    >
      <Section
        className={``}
      >
        <Article
          className={``}
        >
          <h1>Header</h1>
        </Article>
        <Picture
          className={``}
        >
          <img src="https://via.placeholder.com/150" alt="placeholder" />
        </Picture>
      </Section>
    </Header>
  )
}
export default HeaderContainer
