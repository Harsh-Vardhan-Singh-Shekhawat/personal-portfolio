import React from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import IconHex from "./Icons/Hex";
import { BsHexagon } from "react-icons/bs";
import { AiFillWindows } from "react-icons/ai";
import {FiHexagon} from "react-icons/fi"
import {TbHexagonLetterH} from "react-icons/tb"
const Nav = () => {

  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("navbar").style.top = "0";
  //   } else {
  //     document.getElementById("navbar").style.top = "-50px";
  //   }
  //   prevScrollpos = currentScrollPos;
  // };

  return (
    <div className="navbar   px-40 shadow-lg ">
      <div className="flex justify-between ">
        
        <div className="">
          <BsHexagon className="relative top-3 text-[#64ffda] text-5xl"/>
          <p className=" text-[#64ffda] relative left-[17px] bottom-[27px] font-semibold text-xl">H</p>
        </div>

        <div className="flex item-center font-mono relative right-10  ">
          <div className="flex items-center">
            <ul className="flex">
              <li className=" tracking-wide font-light text-[#ccd6f6] my-1 mx-4 transition duration-300 ease-in-out cursor-pointer text-sm hover:text-[#64ffda]">
                <span className=" text-[#64ffda]">01. </span>About
              </li>
              <li className="tracking-wide font-light text-[#ccd6f6] my-1 mx-4 transition duration-300 ease-in-out cursor-pointer text-sm hover:text-[#64ffda]">
                <span className="text-[#64ffda]">02. </span>Experience
              </li>
              <li className="tracking-wide font-light text-[#ccd6f6] my-1 mx-4 transition duration-300 ease-in-out cursor-pointer text-sm hover:text-[#64ffda]">
                <span className="text-[#64ffda]">03. </span>Work
              </li>
              <li className="tracking-wide font-light text-[#ccd6f6] my-1 mx-4 transition duration-300 ease-in-out cursor-pointer  text-sm hover:text-[#64ffda]">
                <span className="text-[#64ffda]">04. </span>Contact
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
