import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './App.jsx'
import { AboutContextProvider } from './contexts/AboutContext.jsx'
import { NavbarContextProvider } from './contexts/NavbarContext.jsx'
import { ExperienceContextProvider } from './contexts/ExperienceContext.jsx'
import { EducationContextProvider } from './contexts/EducationContext.jsx'
import { SkillContextProvider } from './contexts/SkillContext.jsx'
import { InterestContextProvider } from './contexts/InterestContext.jsx'
import { AwardContextProvider } from './contexts/AwardContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AwardContextProvider>
      <InterestContextProvider>
        <SkillContextProvider>
          <EducationContextProvider>
            <ExperienceContextProvider>
              <NavbarContextProvider>
                <AboutContextProvider>
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </AboutContextProvider>
              </NavbarContextProvider>
            </ExperienceContextProvider>
          </EducationContextProvider>
        </SkillContextProvider>
      </InterestContextProvider>
    </AwardContextProvider>
  </StrictMode>,
)
