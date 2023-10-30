import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ForgotPassword from '../auth/ForgotPassword/ForgotPassword';
import Login from '../auth/Login/Login';
import SignUp from '../auth/Signup/Signup';
export default function Auth() {
  const Login = () =>  {
    return (
      <>
        
      </>
    ) 
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}