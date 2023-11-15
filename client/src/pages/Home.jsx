import React from "react";
// import { Button } from "flowbite-react";
import { Layout } from "../components/wrappers/index";
import { HeaderContainer } from "../components/main/index";
// import { Section } from "../components/semantics/index";
// import { Sections } from "../constants/index";
import "./Home.scss";
import { LoginModal, SignupModal } from "../components/modals";
export default function Home() {
  return (
    <Layout>
      <SignupModal />
      <LoginModal />
      <HeaderContainer />
      {/* {Sections.map((section, index) => {
        return (
          <Section
            key={index}
            className={`w-full px-0 py-[4vh] h-fit`}
          >
            <h1>{section.title}</h1>
            <p>{section.description}</p>
            <Button
              className={`bg-primary-500 hover:bg-primary-600 text-white`}
              onClick={() => {
                window.location.href = section.link;
              }}
            >
              {section.button}
            </Button>
          </Section>
        );
      })} */}
    </Layout>
  );
}
