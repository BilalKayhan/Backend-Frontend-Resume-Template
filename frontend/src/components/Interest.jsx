import { useContext } from "react"
import { InterestContext } from "../contexts/InterestContext"
import PropTypes from "prop-types"

function Interest() {
    const {interest} = useContext(InterestContext)
  return (
    <>
        <section className="resume-section" id="interests">
            <div className="resume-section-content">
                <h2 className="mb-5">Interests</h2>
                {
                    interest.map(interests => <div key={interests._id}>
                      <p>{interests.description1}</p> 
                      <p>{interests.description2}</p>  
                    </div>)
                }
            </div>
        </section>
        <hr className="m-0" />
    </>
  )
}

export default Interest

Interest.propTypes = {
    interest: PropTypes.object
}