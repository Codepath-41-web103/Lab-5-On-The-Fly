import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}