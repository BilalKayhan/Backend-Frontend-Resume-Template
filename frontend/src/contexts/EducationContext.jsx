import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

const EducationContext = createContext()

function EducationContextProvider({children}) {
    const [education,setEducation] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/education")
        .then(res=> res.json())
        .then(data=> setEducation(data))
    },[])

    const educationValues = {
        education,
        setEducation
    }
  return <EducationContext.Provider value={educationValues}>
    {children}
  </EducationContext.Provider>
}

export {EducationContext,EducationContextProvider}

EducationContextProvider.propTypes = {
    children: PropTypes.element
}