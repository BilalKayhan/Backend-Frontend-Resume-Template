import { useContext } from "react"
import { EducationContext } from "../contexts/EducationContext"
import PropTypes from "prop-types"
function Education() {
    const {education} = useContext(EducationContext)
  return (
    <>
        <section className="resume-section" id="education">
        <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            {
                education.map(eduations =>  <div key={eduations._id} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{eduations.school}</h3>
                        <div className="subheading mb-3">{eduations.faculty}</div>
                        <div>{eduations.section}</div>
                        <p>{eduations.gpa}</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">{eduations.startDate} - {eduations.endDate}</span></div>
                    </div>)
            }
        </div>
        </section>
        <hr className="m-0" />
    </>
  )
}

export default Education

Education.propTypes = {
    eduation: PropTypes.object
}