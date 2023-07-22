import React from "react";
import {FiFolder, FiGithub} from 'react-icons/fi'
import {FaExternalLinkAlt} from 'react-icons/fa'
const MoreProjects = () => {
  return (
    <div className="text-center m-40">
      <div>
        <h3 className="font-semibold text-[#ccd6f6] text-3xl">More Projects</h3>
        <div className="grid grid-cols-3">
          <div className="w-[325px] text-start bg-[#112240] rounded-[4px] p-6 ">
            <div className="flex items-center justify-between my-2">
            <span className="">
            <FiFolder className="text-4xl text-[#64ffda]" />
            </span>
            <span >
            <FiGithub className="text-xl text-[#ccd6f6]" />
            </span>
            </div>
            <div className="">
            <h1 className="text-2xl text-[#ccd6f6] my-2 font-semibold">Personal Portfolio</h1>
            <p className="text-[#a8b2d1]my-2">
                A Portfolio website built using Next.js and Tailwindcss
            </p>
            <p>
              <ul className="flex font-mono text-sm my-6 text-[#a7b2d0]">
                <li>Next.js</li>
                <li>Tailwindcss</li>
              </ul>  
            </p>
            </div>
          </div>
          <div className="w-[325px] h-[300px] broder-grey-2"></div>
          <div className="w-[325px] h-[300px] bg-grey"></div>
          <div className="w-[325px] h-[300px] bg-grey"></div>
          <div className="w-[325px] h-[300px] bg-grey"></div>
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
