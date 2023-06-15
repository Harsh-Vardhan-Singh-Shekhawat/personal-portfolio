import Image from 'next/image'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import  Main  from '../components/Main'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Info from '../components/Info'
import Experience from '../components/Experience'

export default function Home() {
  return (
    <main className=" bg-[#0a192f] ">
      <Nav />
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </BrowserRouter> */}
      <Main />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Info />
      
      <footer className='foot text-center text-sm py-6 animate-pulse font-mono text-[#8892b0]  transition duration-300 ease-in-out hover:text-[#64ffda] font-thin'>Designed & Built by Harsh Shekhawat</footer>
    </main>
  )
}
