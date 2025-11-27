import { FaBars, FaBomb, FaPhone, FaPhoneFlip, FaSquarePhone } from 'react-icons/fa6'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaSortNumericDown, FaTimes } from 'react-icons/fa'
import "./Navbar.css"

function Navbar() {

    const [click, setClick] = useState(true);

    const handleClick = () => {
        setClick(!click)
    }

    return(
        <>
        <nav>
            <div className="nav-container">
                <div className="nav-links one">
                    <Link to="/" className='nav-link'>Home</Link>
                     <Link to="/resume" className='nav-link'>Resume</Link>
                     <Link to="/portfolio" className='nav-link'>Porfolio</Link>
                      <Link to="/about" className='nav-link'>About</Link>
                </div>
                <div className="nav-links contact">
                     <Link to="https://wa.me/2347067393856" className='nav-link'><FaSquarePhone /> contact</Link>
                </div>
                <div className="hamburger" onClick={handleClick}>
                    {click ? <FaBars /> : <FaTimes/>}
                </div>
                <div className={click ? "hamburger-menu" : "hamburger-menu active"}>
                     <Link to="/" className='nav-link'>
                     <div className="lik-con" onClick={handleClick}>
                        Home
                    </div>
                    </Link>
                     <Link to="/resume" className='nav-link'>
                     <div className="lik-con" onClick={handleClick}>
                        Resume
                    </div>
                    </Link>
                     <Link to="/portfolio" className='nav-link'>
                     <div className="lik-con" onClick={handleClick}>
                        Portfolio
                    </div>
                    </Link>
                     <Link to="/about" className='nav-link'>
                     <div className="lik-con" onClick={handleClick}>
                        About
                    </div>
                    </Link>
                     <Link to="https://wa.me/2347067393856" target='_blank' className='nav-link'>
                     <div className="lik-con" onClick={handleClick}>
                        Contact
                    </div>
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar