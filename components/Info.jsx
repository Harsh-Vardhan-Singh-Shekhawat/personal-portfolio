import React from "react";
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Info = () => {
  return (
    <>
    
      <div className="w-full fixed justify-between z-10 left-4 bottom-0">
        <a href="https://github.com/Harsh-Vardhan-Singh-Shekhawat" target="_blank">
          <FiGithub className="my-6 mx-8 text-xl text-[#8892b0] hover:-translate-y-1  transition duration-150 ease-in-out hover:text-[#64ffda]" />
        </a>
        <a href="https://www.linkedin.com/in/harsh-shekhawat-0463a6201/" target="_blank">
          <FiLinkedin className="my-6 mx-8 text-xl text-[#8892b0] hover:-translate-y-1 transition duration-150 ease-in-out hover:text-[#64ffda]" />
        </a>
        <a href="https://www.instagram.com/harsh.shekhawat.7773/" target="_blank">
          <FiInstagram className="my-6 mx-8 text-xl text-[#8892b0] hover:-translate-y-1 transition duration-150 ease-in-out hover:text-[#64ffda]" />
        </a>
        <a href="https://twitter.com/hshekhawat7773" target="_blank">
          <FiTwitter className="my-6 mx-8 text-xl text-[#8892b0] hover:-translate-y-1  transition duration-150 ease-in-out   hover:text-[#64ffda]" />
        </a>
      <div className="w-[1.5px] h-28 bg-[#8892b0] mx-10 text-white"></div>
      </div>
      <div className=" fixed justify-between z-10 right-4 bottom-0">
      <a href="mailto:harshshekhawat963@gmail.com" target="_blank">
            <p className="origin-center relative bottom-60 left-11 hover:text-[#64ffda] hover:-translate-y-1 transition duration-150 ease-in-out  rotate-90 font-thin tracking-wide  font-mono text-[#8892b0]">
                harshshekhawat963@gmail.com
            </p>
      </a>
      <div className="w-[1.5px] absolute right-20 bottom-0 h-28 bg-[#8892b0] text-white"></div>
      </div>

    </>
  );
};

export default Info;
