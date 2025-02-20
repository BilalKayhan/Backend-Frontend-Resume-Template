import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
// import './index.css'
import App from './App.jsx'
import { AboutContextProvider } from './contexts/AboutContext.jsx'
import { NavbarContextProvider } from './contexts/NavbarContext.jsx'
import { ExperienceContextProvider } from './contexts/ExperienceContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExperienceContextProvider>
      <NavbarContextProvider>
        <AboutContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AboutContextProvider>
      </NavbarContextProvider>
    </ExperienceContextProvider>
  </StrictMode>,
)
