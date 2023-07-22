import React from "react";
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const InfoLink = () => {
  return (
    <>
    
      <div className=" fixed justify-between z-10 left-4 bottom-0">
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
    </>
  );
};

export default InfoLink;
