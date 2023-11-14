import React, { useEffect } from "react";
import "./Chat.scss";
import { NavBar } from "../../components/main";
import CContainer from "../../components/main/chat/CContainer";
import { useAuth } from "../../auth/AuthState";

export default function Chats() {
  const loginUser = useAuth();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!loginUser) {
        window.location.href = "/";
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [loginUser]);
  return (
    <div className="w-[100vw] h-[100vh]">
      <NavBar />
      <div className="grid place-items-center w-full h-[100vh]">
        <CContainer />
      </div>
    </div>
  );
}
