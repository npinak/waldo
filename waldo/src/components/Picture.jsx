import React from 'react'
import Waldo from '../images/waldo.jpg'

//Note: https://www.chestysoft.com/imagefile/javascript/get-coordinates.asp -- coordinates of image 

export default function Picture() {


    // I need to create a drop down menu 
    // Create a state variable that stores whether the mouse is above the waldo image
    // use mouseover and clicked as conditional rendering of dropdown
    const [mouseOver, setMouseOver] = React.useState(true)
    const [clicked, setClicked] = React.useState(false)
    const [xPos, setXPos] = React.useState(0)
    const [yPos, setYPos] = React.useState(0)

    const changeMouseOverTrue = () => {
        setMouseOver(true)
        
    }

    const changeMouseOverFalse = () => {
        setMouseOver(false)
        
    }

    function changeClick(){
        console.log("Image has been clicked")
        if (mouseOver){
            setClicked(prevClicked => !prevClicked, console.log(clicked))
            
        } else {
            return 
        }
        
    }

    // Find position of image from its parent
    function FindPosition(oElement) {
        if (typeof (oElement.offsetParent) != "undefined") {
            for (var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent) {
                posX += oElement.offsetLeft;
                posY += oElement.offsetTop;
            }
            return [posX, posY];
        }
        else {
            return [oElement.x, oElement.y];
        }
    }

    // Find position of where the user clicked 
    function GetCoordinates(e) {
        var PosX = 0;
        var PosY = 0;
        var ImgPos;
        ImgPos = FindPosition(myImg);
        if (!e) var e = window.event;
        if (e.pageX || e.pageY) {
            PosX = e.pageX;
            PosY = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            PosX = e.clientX + document.body.scrollLeft
                + document.documentElement.scrollLeft;
            PosY = e.clientY + document.body.scrollTop
                + document.documentElement.scrollTop;
        }
        let PositionX = PosX
        let PositionY = PosY
        PosX = PosX - ImgPos[0];
        PosY = PosY - ImgPos[1];

        setXPos(PositionX);
        setYPos(PositionY);
        console.log("xPos is: " + xPos)
        console.log("yPos is: " + yPos)
        return 
    }

    var myImg = document.getElementById("waldo-image");
    return (
        
        <div className="image-container">
            <img 
                src={Waldo} 
                className="waldo-image" 
                id="waldo-image"
                onMouseLeave={changeMouseOverFalse}
                onMouseEnter={changeMouseOverTrue}
                onMouseDown={GetCoordinates}
                onClick={changeClick}
            >
            </img>
            <div 
                className="dropdown-menu"
                // style = {{display: clicked ? "flex" : "none" }}
                style={clicked ? {
                     display: 'flex', position: 'absolute', top: `${yPos}px`, left:`${xPos}px`, flexDirection:'column', overflow:'hidden' } : 
                    { display: 'none', overflow: 'hidden' }}
            >
                <button>Robin</button>
                <button>Fred Flinstone</button>
                <button>Johnny Test</button>
            </div>
        </div>
    )
}