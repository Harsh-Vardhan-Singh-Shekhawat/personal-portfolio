import React from 'react'
import {AiFillCaretRight} from 'react-icons/ai'
const About = () => {

  return (
    <div className='m-40'>
      <div>
        <h1 ><span className='font-mono font-thin text-[24px] text-[#64ffda]'>01. </span><span className='font-semibold text-[#ccd6f6] text-3xl'> About Me</span>  </h1>
      </div>
      <div className='text-[#8892b0] w-[900px]'>
        <p className='my-10'>
        Hi, I'm Harsh, and I'm passionate about exploring the intersection of finance and technology. My focus is on web development and blockchain development, and I've built several web applications using various technologies. Currently, I'm directing my attention towards blockchain development in the DeFi space.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div>
            <ul className='w-1/2 mt-4 grid leading-loose tracking-wide grid-rows-4 mx-4 font-mono text-sm  list:text-[#8892b0]  grid-flow-col'> 
                <li className='flex '><span className='text-[#64ffda] mt-1.5  '><AiFillCaretRight className='text-sm' /></span><span className='font-thin'>Javascript</span></li>

                <li className='flex '><span className='text-[#64ffda] mt-1.5  '><AiFillCaretRight className='text-sm' /></span><span>React.js</span></li>

                <li className='flex '><span className='text-[#64ffda] mt-1.5  '><AiFillCaretRight className='text-sm' /></span><span>Solidity</span></li>
                
                <li className='flex '><span className='text-[#64ffda] mt-1.5  '><AiFillCaretRight className='text-sm' /></span><span>Typescript</span></li>
                
                <li className='flex '><span className='text-[#64ffda] mt-1.5  '><AiFillCaretRight className='text-sm' /></span><span>Node.js</span></li>
                
                <li className='flex '><span className='text-[#64ffda] mt-1.5  '><AiFillCaretRight className='text-sm' /></span><span>Web3</span></li>  
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
