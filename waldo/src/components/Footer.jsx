import React from 'react'
import Robin from '../images/robin.webp'
import Flinstone from '../images/flinstone.webp'
import Test from '../images/johnny-test.webp'

export default function Navbar() {

    const [timer, setTimer] = React.useState(0)

    const SECOND_MS = 1000;
    React.useEffect(() => {
        const interval = setInterval(() => {
            console.log('Logs every Second');
            setTimer(prevTimer => prevTimer + 1)
        }, SECOND_MS);

        return () => clearInterval(interval); 
    }, [])


    return (
        <footer>
            <h2>Characters to find: </h2>
            <nav id="bottom-nav">
                <ul>
                    <li><a href="">Robin</a><span><img src={Robin} className="robin-image"/></span></li>
                    <li><a href="">Fred Flinstone</a><span><img src={Flinstone} className="robin-image"/></span></li>
                    <li><a href="">Johnny Test</a><span><img src={Test} className="robin-image" /></span></li>
                </ul>
            </nav>
            <h3 id="timer">Time: {timer}</h3>
            {/* Make these sideways list items */}
        </footer>
    )
}