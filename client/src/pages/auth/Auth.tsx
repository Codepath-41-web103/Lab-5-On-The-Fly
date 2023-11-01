import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "../auth/ForgotPassword/ForgotPassword";
import Login from "./Login/Login.jsx";
import SignUp from "./Signup/Signup.jsx";
import { useAuth } from "../../auth/AuthState";
export default function Auth() {
  const user = useAuth();

  useEffect(() => {
    if (user) {
      //! Navigate to the chat app
    } else {
      //! Navigate to the login page
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}
