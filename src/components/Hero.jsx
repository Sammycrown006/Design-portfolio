import { Link } from "react-router-dom"
import "./Hero.css"

function Hero() {
    return(
        <>
        <div className="hero">
             <div className="hero-container">
            <div className="names">
                <h2 className="first-name">JAMES</h2>
                <h1 className="last-name">MARTIN</h1>
                 <p>Graphic Designer</p>
            </div>
            <div className="btns">
                <Link to="/resume"><button>Resume</button></Link>
                <Link to="/portfolio"><button>Portfolio</button></Link>
            </div>
          </div>
        </div>
        </>
    )
}

export default Hero