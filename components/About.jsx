import React from 'react'
import {HiCodeBracket} from 'react-icons/hi'
const About = () => {
  return (
    <div className='m-40'>
      <div>
        <h1 ><span className='font-mono font-thin text-[24px] text-[#64ffda]'>01. </span><span className='font-semibold text-3xl'> About Me</span>  </h1>
      </div>
      <div className='text-[#8892b0] w-[900px]'>
        <p className='my-10'>
        Hi, I'm Harsh, and I'm passionate about exploring the intersection of finance and technology. My focus is on web development and blockchain development, and I've built several web applications using various technologies. Currently, I'm directing my attention towards blockchain development in the DeFi space.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div>
            <ul className='grid grid-rows-4 mx-4 `list-image-[${HiCodeBracket}]` list:text-[#8892b0]  grid-flow-col'> 
                <li>Javascript</li>
                <li>React.js</li>
                <li>Solidity</li>
                <li>Typescript</li>
                <li>Node.js</li>
                <li>Web3</li>   
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
