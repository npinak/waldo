import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from './pages/GamePage'
import InitialPage from './pages/InitialPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="" element={<InitialPage />} />
        <Route path="/game" element={<GamePage />}/>
      </Routes>
    </Router>
    
  )
}

export default App
