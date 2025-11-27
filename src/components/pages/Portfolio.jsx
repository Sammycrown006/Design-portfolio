import Port from "../PortfolioFormat"
import "./Portfolio.css"

function Portfolio() {
    return (
        <>
          <div className="portfolio">
            <div className="heading">PORTFOLIO</div>

            <div className="design-ports">

                <Port 
                src="/images/cut-effect.png"
                alt="A logo design"
                text="A logo design for Grace entreprises"
                />

                <Port 
                src="/images/glitch-text.png"
                alt="A logo design"
                text="A Glitch design "
                />

                <Port 
                src="/images/slice-text.png"
                alt="A logo design"
                text="A sliced text design "
                />

                <Port 
                src="/images/liquify-text.png"
                alt="A logo design"
                text="A design with the use of the liquid text-effect"
                />

                <Port 
                src="/images/neon-txt.png"
                alt="A logo design"
                text="Neon text effect in use "
                />

                 <Port 
                src="/images/pamz-3-stroke.png"
                alt="A logo design"
                text="A beutiful and bright text effect"
                />

                 <Port 
                src="/images/sea.png"
                alt="A logo design"
                text="A beautiful sea design"
                />


                <Port 
                src="/images/jesuye-egg-flyer.png"
                alt="A logo design"
                text="A Flyer for eggzy stores"
                />

                 <Port 
                src="/images/Samuel-my-design-4.png"
                alt="A logo design"
                text="Sage Graphics' flyer"
                />

                <Port 
                src="/images/New-month.png"
                alt="A logo design"
                text="A New month design for sage graphics"
                />

                <Port 
                src="/images/Nicole's reworked design-final.png"
                alt="A logo design"
                text="A flyer design for nicolette sticthes"
                />

                <Port 
                src="/images/orchestra.png"
                alt="A logo design"
                text="A musically themed design"
                />

                <Port 
                src="/images/alexes-suggestion.png"
                alt="flyer"
                text="A Bible Passage design"
                />

                <Port 
                src="/images/car-2.png"
                alt="flyer"
                text="A Classic Dodge design"
                />

                <Port 
                src="/images/web-dev-design.png"
                alt="A logo design"
                text="A web development agency's flyer"
                />

                 <Port 
                src="/images/Pamz-test-copy.png"
                alt="A logo design"
                text="A beautiful hairstylist flyer"
                />

            </div>
          </div>
        </>
    )
}

export default Portfolio