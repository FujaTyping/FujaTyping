import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'

/* Components */
import Home from './components/Home'
import FourOhFour from './components/FourOhFour'
import Photopea from './components/Photopea'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photopea" element={<Photopea />} />
          <Route path="*" element={<FourOhFour status={404} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
