import { useState } from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom"


function InitialPage() {
    let navigate = useNavigate();

    return (
        // To do:
        // Add submit button 
        // Change to main game page on submit button click

        <div className="initial-page">
            <Navbar /> 
            <div className="initial-page-main">
                <form id="name-form">        
                    <label for="css">What is your name?</label>
                    <input type="text" id="name" name="name-input" placeholder="Please Enter Your Name"/>
                    <button onClick={() => {navigate("/game")}}>Submit</button>
                </form>
            </div>
        </div>

    )
}

export default InitialPage
