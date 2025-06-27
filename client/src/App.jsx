import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Academics from './pages/Academics'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Register from './pages/Register'
import AppLayout from './Layout/AppLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<AppLayout />} >
          <Route path="/home" element={<Home />} />
          <Route path='/academics' element={<Academics />} />
          <Route path='/courses' element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App