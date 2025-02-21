import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

const InterestContext = createContext()

function InterestContextProvider({children}) {
    const [interest,setInterest] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/interest")
        .then(res=> res.json())
        .then(data=> setInterest(data))
    },[])

    const interestValues = {
        interest,
        setInterest
    }
  return <InterestContext.Provider value={interestValues}>
    {children}
  </InterestContext.Provider>
}

export {InterestContext,InterestContextProvider}

InterestContextProvider.propTypes = {
    children: PropTypes.element
}