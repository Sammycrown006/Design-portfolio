import { FaBuilding, FaComputer, FaLanguage, FaPaintRoller, FaPeopleArrows, FaPlay, FaPowerOff, FaSchool, FaSkyatlas } from "react-icons/fa6"
import "./Resume.css"
import { FaPaintBrush, FaPeopleCarry } from "react-icons/fa"

function Resume() {
    return(
        <>
          <div className="resume">


            <div className="heading">
                <h1>RESUME</h1>
                <p>My Qualifications and skills</p>
            </div>

            <div className="resume-container">

            <div className="res first-part">

                <div className="sofware-part-one">
                    <h1><FaComputer className="icon"/> Software arsenal</h1>
                    <div className="skill">
                        <h2>Adobe Photoshop</h2>
                    </div>
                    <div className="skill">
                        <h2>Canva</h2>
                    </div>
                    <div className="skill">
                        <h2>Artificial Intelligence</h2>
                    </div>
                    <div className="skill">
                        <h2>Adobe Illustrator</h2>
                    </div>
                    <div className="skill">
                        <h2>Figma</h2>
                    </div>
                </div>

                <div className="software-part-two">
                <h1><FaLanguage className="icon"/>Languages</h1>
                <div className="languages">
                    <div className="skill">
                        <h2>English</h2>
                    </div>
                    <div className="skill">
                        <h2>Japanesse</h2>
                    </div>
                    <div className="skill">
                        <h2>French</h2>
                    </div>
                </div>

                </div>
            </div>

            <div className="res middle-part">


                 <div className="experience-part-one">
                    <h1><FaBuilding className="icon"/>Companies</h1>
                    <div className="exp">
                        <h2>Hair by Pams</h2>
                    </div>
                    <div className="exp">
                        <h2>FUTA chemistry</h2>
                    </div>
                    <div className="exp">
                        <h2>Grey Marg</h2>
                    </div>
                    <div className="exp">
                        <h2>Nicolette Stiches</h2>
                    </div>
                    <div className="exp">
                        <h2>Sage Graphics</h2>
                    </div>
                </div>

                 <div className="experience-part-two">
                <h1><FaSchool className="icon"/>Educaton</h1>
                <div className="Degrees">
                    <div className="skill">
                        <h2>Certified Graphic designer</h2>
                    </div>
                    <div className="skill">
                        <h2>Motion graphics expert</h2>
                    </div>
                    </div>
                </div>

            </div>


            <div className="res last-part">

                 <div className="others-part-one">
                    <h1><FaPeopleArrows className="icon"/>Work Skills</h1>
                    <div className="exp">
                        <h2>Team work</h2>
                    </div>
                    <div className="exp">
                        <h2>Leadership</h2>
                    </div>
                    <div className="exp">
                        <h2>Consistency</h2>
                    </div>
                </div>

                 <div className="others-part-two">
                <h1><FaPaintBrush className="icon"/>Hobbies</h1>
                <div className="Degrees">
                    <div className="skill">
                        <h2>Playing chess</h2>
                    </div>
                    <div className="skill">
                        <h2>Rading books</h2>
                    </div>
                    </div>
                </div>


            </div>

            </div>


          </div>
        </>
    )
}

export default Resume