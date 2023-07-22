import React from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import IconHex from "./Icons/Hex";
import { BsHexagon } from "react-icons/bs";
import Link from "next/link";

const Nav = () => {

  return (
    <div className="navbar   px-40 shadow-lg ">
      <div className="flex justify-between ">
        
        <a href="/" className="">
          <BsHexagon className="relative top-3 text-[#64ffda] text-5xl"/>
          <p className=" text-[#64ffda] relative left-[17px] bottom-[27px] font-semibold text-xl">H</p>
        </a>

        <div className="flex item-center font-mono relative right-10  ">
          <div className="flex items-center">
            <ul className="flex">
              <li className=" tracking-wide font-light text-[#ccd6f6] my-1 mx-4 transition duration-300 ease-in-out cursor-pointer text-sm hover:text-[#64ffda]">
                <span className=" text-[#64ffda]">01. </span><Link href='/#about' >About</Link>
              </li>
              <li className="tracking-wide font-light text-[#ccd6f6] my-1 mx-4 transition duration-300 ease-in-out cursor-pointer text-sm hover:text-[#64ffda]">
                <span className="text-[#64ffda]">02. </span><Link href='/#jobs'>Experience</Link>
              </li>
              <li className="tracking-wide font-light text-[#ccd6f6] my-1 mx-4 transition duration-300 ease-in-out cursor-pointer text-sm hover:text-[#64ffda]">
                <span className="text-[#64ffda]">03. </span><Link href='/#projects'>Work</Link>
              </li>
              <li className="tracking-wide font-light text-[#ccd6f6] my-1 mx-4 transition duration-300 ease-in-out cursor-pointer  text-sm hover:text-[#64ffda]">
                <span className="text-[#64ffda]">04. </span><Link href='/#contact'>Contact</Link>
              </li>
            </ul>
          </div>

          <a
            className="btnhover text-sm tracking-wide m-auto mx-2 cursor-pointer flex justify-center hover:shadow-md  items-center rounded-[4px] border-[1px] w-20 h-10 text-center border-[#64ffda] text-[#64ffda]"
            href="/static/resume.pdf"
            target="_blank"
          >
            <div>Resume</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
