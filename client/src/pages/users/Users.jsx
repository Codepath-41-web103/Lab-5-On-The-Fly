import React from 'react'
import { Route, Routes } from 'react-router-dom'
export default function Users() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>index</div>} />
      </Routes>
    </>
  )
}
