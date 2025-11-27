import { FaLocationArrow, FaLocationPin, FaLocationPinLock } from "react-icons/fa6"
import "./Description.css"

function Description() {
    return(
        <>
        <div className="about-container">
          <div className="about">
            <div className="head">
            <h1>ABOUT</h1>
            <p>jamesmartin@gmail.com</p>
            </div>
            <div className="description-text">
                <p>
                    Graphic Designer with 5years of experience.
                    Specializing in digital marketing and advertisement for
                    companies and brands.
                    Skillful in softwares such as Adobe Photoshop,
                    Canva, Adobe Ilustrator, My greatest strength is up to date
                    adevertising techniques and business awareness, making me a pro
                    in mordern marketing and business management.
                </p>
            </div>
          </div>
          <div className="bottom">
            <p><FaLocationPin className="logo"/>Stony Hills Texas</p>
            <p className="address">No 10 Mark Dave Road</p>
          </div>
        </div>
        </>
    )
}

export default Description