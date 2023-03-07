import { useState } from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Picture from '../components/Picture'
import Footer from '../components/Footer'


function InitialPage() {

    return (
        // To do:
        // Have to make #name-form extend full width of parent

        <div className="initial-page">
            <Navbar /> 
            <div className="initial-page-main">
                <form id="name-form">        
                    <label for="css">What is your name?</label>
                    <input type="text" id="name" name="name-input" placeholder="Please Enter Your Name"/>
                </form>
            </div>
        </div>

    )
}

export default InitialPage
