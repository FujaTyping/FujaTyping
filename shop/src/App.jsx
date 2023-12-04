import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'

/* Components */
import Index from './Index'
import Pancake from './components/shop/Pancake'
import FourOhFour from './components/FourOhFour'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pancake" element={<Pancake />} />
          <Route path="*" element={<FourOhFour status={404} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
