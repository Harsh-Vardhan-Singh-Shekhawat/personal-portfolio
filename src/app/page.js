import Image from 'next/image'
import Nav from '../../components/Nav'
import  Main  from '../../components/Main'
import About from '../../components/About'

export default function Home() {
  return (
    <main className=" bg-[#0a192f] ">
      <Nav />
      <Main />
      <About />
    </main>
  )
}
