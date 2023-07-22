import Image from 'next/image'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import  Main  from '../components/Main'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Info from '../components/Info'
import Experience from '../components/Experience'
import MoreProjects from '../components/MoreProjects'

export default function Home() {
  return (
    <main className=" bg-[#0a192f] ">
      <Nav />
    
      <Main />
      <About />
      <Experience />
      <Projects />
      <MoreProjects />
      <Contact />
      <Info />
      
      <footer className='foot text-center text-sm py-6 animate-pulse font-mono text-[#8892b0]  transition duration-300 ease-in-out hover:text-[#64ffda] font-thin'>Designed & Built by Harsh Shekhawat</footer>
    </main>
  )
}
