import React from 'react'
import { Header, Section, Article, Picture } from '../semantics/index'
import { Button } from 'flowbite-react'
import { Menu } from '../semantics/index'
import HeaderContentful from '../../assets/svgs/HeaderContentful'
import './HeaderContainer.scss'

const HeaderContainer = () => {
  return (
    <Header
      className={`h-[60dvh] w-full overflow-hidden border border-white px-6`}
    >
      <Section
        className={`flex flex-row items-center justify-around h-full w-full bg-transparent`}
      >
        <Article
          className={`bg-transparent shadow-none m-0 p-0 flex flex-col items-center w-fit`}
        >
          <h1 className={`text-6xl text-left w-full mb-4`}>Header</h1>
          <p className={`mb-2`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid non, ab laboriosam modi iusto quibusdam id perspiciatis repellendus veritatis omnis voluptas enim provident nobis architecto earum obcaecati ut quaerat aliquam?
          </p>
          <Menu className={`flex flex-row items-center justify-between`}>
            <li className={`mr-auto`}>
              <Button>
                Sign Up
              </Button>

            </li>
            <li className={`ml-auto`}>
              <Button>
                Get Started
              </Button>
            </li>
          </Menu>
        </Article>
        <Picture
          className={`flex items-center justify-center w-fit`}
        >
          <HeaderContentful className={`w-full h-full`} />
        </Picture>
      </Section>
    </Header>
  )
}
export default HeaderContainer
