import { useContext } from "react";
import { AboutContext } from "../contexts/AboutContext";
import PropTypes from "prop-types"
function About() {
    const {about} = useContext(AboutContext)
  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
            {
                about.map(abouts => <div key={abouts._id} className="mb-0">
                    <h1>{abouts.surname}
                    <span className="text-primary">{abouts.name}</span>
                    </h1>
                    <div className="subheading mb-5">
                        {abouts.address}
                        <a href="mailto:name@email.com">{abouts.email}</a>
                    </div>
                    <p className="lead mb-5">
                        {abouts.description}
                    </p>
                  </div>)
            }
            <div className="social-icons">
                <a className="social-icon" href="#!">
                <i className="fab fa-linkedin-in" />
                </a>
                <a className="social-icon" href="#!">
                <i className="fab fa-github" />
                </a>
                <a className="social-icon" href="#!">
                <i className="fab fa-twitter" />
                </a>
                <a className="social-icon" href="#!">
                <i className="fab fa-facebook-f" />
                </a>
            </div>
        </div>
      </section>
    </>
  );
}

export default About;

About.propTypes = {
    about : PropTypes.object
}