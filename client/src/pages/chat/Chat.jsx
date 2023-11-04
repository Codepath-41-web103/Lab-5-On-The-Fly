import React from "react";
import "./Chat.scss";
import { NavBar } from "../../components/main";
import CContainer from "../../components/main/chat/CContainer";

export default function Chats() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <NavBar />
      <div className="grid place-items-center w-full h-[100vh]">
        <CContainer />
      </div>
    </div>
  );
}
