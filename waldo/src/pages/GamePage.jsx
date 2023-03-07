import { useState } from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Picture from '../components/Picture'
import Footer from '../components/Footer'


function GamePage() {

    return (
        <div className='main-div'>
            <div className='navbar'>
                <Navbar />
            </div>
            <Picture />
            <Footer />
        </div>

    )
}

export default GamePage
