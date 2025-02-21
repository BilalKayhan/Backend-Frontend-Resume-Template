import { useContext } from "react"
import { AwardContext } from "../contexts/AwardContext"
import PropTypes from  "prop-types"
function Award() {
    const {award} = useContext(AwardContext)
  return (
    <>
        <section className="resume-section" id="awards">
        <div className="resume-section-content">
            <h2 className="mb-5">Awards &amp; Certifications</h2>
            <ul className="fa-ul mb-0">
            {
                award.map(awards =>
                <li key={awards._id}>
                    <span className="fa-li"><i className={awards.icon} /></span>
                    {awards.certificate}
                </li>
            )}
            </ul>
        </div>
        </section>

    </>
  )
}

export default Award

Award.propTypes = {
    award: PropTypes.object
}