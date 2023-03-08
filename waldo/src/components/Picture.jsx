import React from 'react'
import Waldo from '../images/waldo.jpg'

export default function Navbar() {

    

    return (
        
        <div className="image-container">
            <img src={Waldo} className="waldo-image" id="waldo-image"/>
        </div>
    )
}