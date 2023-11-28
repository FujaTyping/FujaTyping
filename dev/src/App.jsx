import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

/* Components */
import Home from './Home'
import Notfound from './components/Notfound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound status={404} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
