import Mainpage from '../components/mainpage.jsx'
import AboutPage from '../components/about.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Exprience from '../components/Exprience.jsx'
import Contact from '../components/Contact.jsx'

function Home() {
  return (
    <div className=''>
      <Mainpage />
      <AboutPage />
      <Skills />
      <Projects />
      <Exprience />
      <Contact />
    </div>
  )
}

export default Home
