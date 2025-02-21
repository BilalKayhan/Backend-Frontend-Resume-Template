import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

const AwardContext = createContext()

function AwardContextProvider({children}) {
    const [award,setAward] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/award")
        .then(res=> res.json())
        .then(data=> setAward(data))
    },[])

    const awardValues = {
        award,
        setAward
    }

  return <AwardContext.Provider value={awardValues}>
    {children}
  </AwardContext.Provider>
}

export {AwardContext,AwardContextProvider}

AwardContextProvider.propTypes = {
    children: PropTypes.element
}