import Image from 'next/image'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import  Main  from '../components/Main'
// import About from '../app/about/page'
// import Contact from '../app/contact/page'
// import Projects from '../app/project/page'
import Info from '../components/Info'
import Experience from '../components/Experience'
import MoreProjects from '../components/MoreProjects'
// import InfoMail from '../components/InfoMail'
import Link from 'next/link'

import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <main className=" selection:bg-[#858fac] bg-[#0a192f] ">
      <Nav />
      <Main />
      <About  />
      <Experience />
      <Projects />
      <MoreProjects />
      <Contact />
      <Info />
      {/* <InfoMail /> */}
      
      <footer className='foot text-center text-sm py-6 animate-pulse font-mono text-[#8892b0]  transition duration-300 ease-in-out font-thin'>
        <Link className='hover:text-[#64ffda] ' href='https://github.com/Harsh-Vardhan-Singh-Shekhawat'>
          Designed & Built by Harsh Shekhawat
        </Link>
      </footer>
    </main>
  )
}
