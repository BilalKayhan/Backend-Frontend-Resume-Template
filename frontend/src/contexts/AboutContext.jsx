import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

const AboutContext = createContext()

function AboutContextProvider({children}) {
    const [about,setAbout] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/about")
        .then(res => res.json())
        .then(data => setAbout(data))
    },[]);

    const aboutValues = {
        about,
        setAbout
    }
  return <AboutContext.Provider value={aboutValues}>
    {children}
  </AboutContext.Provider>
}   

export {AboutContext,AboutContextProvider}

AboutContextProvider.propTypes = {
    children : PropTypes.element
}