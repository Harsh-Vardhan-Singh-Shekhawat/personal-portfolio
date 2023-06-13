import React from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import IconHex from "./Icons/Hex";
import { BsHexagon } from "react-icons";
const Nav = () => {
  return (
    <div className="shadow-md">
      <div className="flex justify-between p-2">
        <Image width={80} src={Logo} alt="logo-Img" />
        {/* <BsHexagon className="text-white decoration-white" /> */}
        <div className="flex item-center font-mono relative right-10  ">
          <div className="flex items-center">
            <ul className="flex">
              <li className="tracking-wide font-light text-[#ccd6f6] my-1 mx-4  text-sm hover:text-[#64ffda]">
                <span className=" text-[#64ffda]">01. </span>About
              </li>
              <li className="tracking-wide font-light text-[#ccd6f6] my-1 mx-4 text-sm hover:text-[#64ffda]">
                <span className="text-[#64ffda]">02. </span>Experience
              </li>
              <li className="tracking-wide font-light text-[#ccd6f6] my-1 mx-4 text-sm hover:text-[#64ffda]">
                <span className="text-[#64ffda]">03. </span>Work
              </li>
              <li className="tracking-wide font-light text-[#ccd6f6] my-1 mx-4 text-sm hover:text-[#64ffda]">
                <span className="text-[#64ffda]">04. </span>Contact
              </li>
            </ul>
          </div>

          <div className="text-sm tracking-wide m-auto mx-2 flex justify-center items-center rounded-[4px] border-[1px] w-20 h-10 text-center border-[#64ffda] text-[#64ffda]">
            Resume
          </div>
            <span class="relative top-3 right-4 flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-[#64ffda]"></span>
            </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
