import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './components/Home/Home'
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contect from './components/Contect/Contect';
import Project from './components/Project/Project';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/contect' element={<Contect />}></Route>
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
