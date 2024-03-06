import React from 'react'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Home  from './Home/Home'
import CardModal from './CardModal/CardModal'
import Coworking from './Coworking/Coworking'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coworking/:id" element={<Coworking />} />
        <Route path="/modal" element={<CardModal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
