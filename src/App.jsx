import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from '../Componets/Navbar'
// import HomePage from '../Componets/HomePage'
import MySkills from '../Componets/MySkills'
import Projects from '../Componets/Projects'
import Summary from '../Componets/Summary'
import FigmaCEOAdvice from '../Componets/FigmaCEOAdvice'
import WorkTogether from '../Componets/WorkTogether'
import Foot from '../Componets/Foot'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePages from "../Pages/HomePages"
import Details from "../Pages/Details"
import ContactPages from "../Pages/ContactPages"

function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePages/>}/>
          <Route path="/Details" element={<Details/>}/>
          <Route path="/contactme" element={<ContactPages/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
