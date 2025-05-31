import './styles/components.css'
//import Dock from "./components/Dock"
import Tooltip from './components/Tooltip'
import './styles/app.css'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
// import Education from './sections/Education'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
//import Reviews from './sections/Reviews'

function App() {

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Experience />
        
      <Projects />
      <Contact />
      
      <Tooltip />
    </>
  );
}

export default App