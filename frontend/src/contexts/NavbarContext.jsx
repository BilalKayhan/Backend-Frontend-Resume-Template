import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

const NavbarContext = createContext()

function NavbarContextProvider({children}) {
    const [navbar,setNavbar] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/navbar")
        .then(res=> res.json())
        .then(data=> setNavbar(data))
    },[])

    const navbarValues = {
        navbar,
        setNavbar
    }
  return <NavbarContext.Provider value={navbarValues}>
    {children}
  </NavbarContext.Provider>
}

export {NavbarContext,NavbarContextProvider}

NavbarContextProvider.propTypes = {
    children: PropTypes.element
}