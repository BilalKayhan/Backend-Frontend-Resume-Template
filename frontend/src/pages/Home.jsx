import About from "../components/About"
import Award from "../components/Award"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Interest from "../components/Interest"
import Navbar from "../components/Navbar"
import Skill from "../components/Skill"
function Home() {
  return (
    <>
        <Navbar/>
        <About/>
        <Experience/>
        <Education/>
        <Skill/>
        <Interest/>
        <Award/>
    </>
  )
}

export default Home