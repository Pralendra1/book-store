import { useState } from 'react'



import Home from './Home/Home';
import { Route,Routes } from 'react-router-dom';

import Courses from './courses/Courses';
import Signup from './Components/Signup';
import About from './Components/About';



function App() {
  

  return (
    <>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="course" element={<Courses/>}/>
   <Route path="/Signup" element={<Signup/>}/>
  <Route path="/About" element={<About/>}/>
  </Routes>
    </>
  )
}

export default App;
