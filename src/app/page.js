import Image from 'next/image'
import Nav from '../../components/Nav'
import  Main  from '../../components/Main'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Projects from '../../components/Projects'
import Info from '../../components/Info'

export default function Home() {
  return (
    <main className=" bg-[#0a192f] ">
      <Nav />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Info />
      
      <footer className='text-center text-sm py-6 font-mono text-[#8892b0] hover:text-[#64ffda] transition duration-300 ease-in-out animate-pulse font-thin'>Designed & Built by Harsh Shekhawat</footer>
    </main>
  )
}
