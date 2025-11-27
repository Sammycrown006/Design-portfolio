import "./PortfolioFormat.css"

function Port(props) {
    return(
        <>
          <div className="port">
            <div className="img-part">
                <img src={props.src} alt={props.alt} loading="lazy" />
            </div>

            <div className="text-part">
                <p className="description">
                  {props.text}
                </p>
            </div>
          </div>
        </>
    )
}

export default Port