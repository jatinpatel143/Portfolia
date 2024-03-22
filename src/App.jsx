import React from 'react'
import Navbar from './componets/Navbar'
import Herosection from './componets/Herosection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rejume from './pages/Rejume'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './componets/Footer'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>

    <Routes>
      <Route path='/' element ={<Herosection/>}/>
      <Route path='/Home' element={<Herosection/>}/>
      <Route path='/rejume' element={<Rejume/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
      

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App