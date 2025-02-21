import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

const SkillContext = createContext()

function SkillContextProvider({children}) {
    const [skill,setSkill] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/skill")
        .then(res=> res.json())
        .then(data=> setSkill(data))
    },[])

    const skillValues= {
        skill,
        setSkill
    }

  return <SkillContext.Provider value={skillValues}>
    {children}
  </SkillContext.Provider>
}

export {SkillContext,SkillContextProvider}

SkillContextProvider.propTypes = {
    children: PropTypes.element
}