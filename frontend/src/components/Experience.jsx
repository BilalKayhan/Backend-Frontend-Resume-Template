import { useContext } from "react"
import { ExperienceContext } from "../contexts/ExperienceContext"
import PropTypes from "prop-types"
function Experience() {
    const {experience} = useContext(ExperienceContext)
  return (
    <>
    <section className="resume-section" id="experience">
    <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        {
            experience.map(experiences => <div key={experiences._id} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">{experiences.job}</h3>
                    <div className="subheading mb-3">{experiences.department}</div>
                    <p>{experiences.description}</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">{experiences.startDate} - {experiences.endDate}</span></div>
                </div>)
        }
    </div>
    </section>
    <hr className="m-0" />
    </>
  )
}

export default Experience

Experience.propTypes = {
    experince: PropTypes.experince
}