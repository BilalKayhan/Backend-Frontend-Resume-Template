import { useContext } from "react"
import { SkillContext } from "../contexts/SkillContext"
import PropTypes from "prop-types"
function Skill() {
    const {skill} = useContext(SkillContext)
  return (
    <>
        <section className="resume-section" id="skills">
        <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul className="list-inline dev-icons">  
            {
                skill.map(skills => (<li key={skills._id} className="list-inline-item">
                    <i className={skills.icon} />
                    </li>
            ))}
            </ul>
            <ul className="fa-ul mb-0">
                {
                    skill.map(skills=> 
                        <li key={skills._id}>
                            <span className="fa-li"><i className={skills.tik} /></span>
                            {skills.workflow}
                        </li>
                )}
            </ul>
        </div>
        </section>
        <hr className="m-0" />
    </>
  )
}

export default Skill

Skill.propTypes = {
    skill: PropTypes.object
}