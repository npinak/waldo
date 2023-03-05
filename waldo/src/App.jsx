import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Picture from './components/Picture'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-div'>
      <div className ='navbar'>
        <Navbar />
      </div>
      <Picture/>
      <Footer/>
    </div>
  )
}

export default App
