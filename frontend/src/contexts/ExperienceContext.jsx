import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

const ExperienceContext = createContext()

function ExperienceContextProvider({children}) {
    const [experience,setExperience] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/experience")
        .then(res => res.json())
        .then(data => setExperience(data))
    },[])

    const experienceValues = {
        experience,
        setExperience
    }

  return <ExperienceContext.Provider value={experienceValues}>
    {children}
  </ExperienceContext.Provider>
}

export {ExperienceContext,ExperienceContextProvider}

ExperienceContextProvider.propTypes = {
    children: PropTypes.element
}