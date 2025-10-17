import logo from './logo.svg';
import './App.css';
import Header from './comp/Header'
import './comp/Header.css'
import About from './comp/about'
import './comp/about.css'
import Home from './comp/Home'
import './comp/home.css'
import Skills from './comp/Skills'
import './comp/skills.css'
import Education from './comp/edu'
import './comp/edu.css'
import Project from './comp/pro'
import './comp/pro.css'
import Contact from './comp/cont'
import './comp/cont.css'
import Footer from './comp/footer'
import './comp/footer.css'



function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Skills/>
    <Education/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
