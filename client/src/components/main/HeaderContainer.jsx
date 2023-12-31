"use client";
import React from "react";
import { Header, Section, Article, Picture } from "../semantics/index";
import { Button } from "flowbite-react";
import { Menu } from "../semantics/index";
import HeaderContentful from "../../assets/svgs/HeaderContentful";
import "./HeaderContainer.scss";

const HeaderContainer = () => {
  return (
    <Header
      className={`h-[60dvh] w-full overflow-hidden border border-white px-6`}
    >
      <Section
        className={`flex flex-row items-center justify-around h-full w-full bg-transparent mx-4`}
      >
        <Section>

        <Article
          className={`bg-transparent shadow-none m-0 p-0 flex flex-col items-center w-[50%]`}
          >
          <h1 className={`text-6xl text-left w-full mb-4`}>Header</h1>
          <p className={`mb-2 `}>
            "Join our messaging app for instant connections. Customize your
            profile, search by username, and exchange real-time messages, access
            your conversation history for a seamless chatting experience"
          </p>
          <Menu className={`flex flex-row items-center w-full`}>
            <li className={``}>
              <Button href={`/chats`}>Get Started</Button>
            </li>
          </Menu>
        </Article>
          </Section>
        <Picture className={`flex items-center justify-center w-[50%]`}>
          <HeaderContentful className={`w-full h-full`} />
        </Picture>
      </Section>
    </Header>
  );
};
export default HeaderContainer;
