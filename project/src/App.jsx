import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'

/* Components */
import Index from './Index'
import FourOhFour from './components/FourOhFour'
import LLSTSK from './components/LLSTSK'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Songkhla" element={<LLSTSK />} />
          <Route path="*" element={<FourOhFour status={404} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
