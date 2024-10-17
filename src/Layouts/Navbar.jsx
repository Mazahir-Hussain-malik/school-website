"use client";

import { IoMdMenu } from "react-icons/io";

import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import portfolio from "../assets/history.pdf";

// import logo from "/assets/logo.svg"
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Navlinks = [
    {
      id: 1,
      text: "Home",
      linkto: "/",
    },
    {
      id: 2,
      text: " Our Features",
      linkto: "#",
    },
    {
      id: 3,
      text: " Courses",
      linkto: "#",
    },
    {
      id: 4,
      text: " Achievements",
      linkto: "#",
    },
    {
      id: 4,
      text: " Success Stories",
      linkto: "#",
    },
  ];

  return (
    <div className="  fixed top-0 z-50   w-full mx-auto bg-[#fff] shadow-lg">
      <nav className=" max-w-[1400px] mx-auto h-[80px] ">
        <div className="max-w-[1300px] mx-auto  ">
          <div className="flex items-center   md:justify-between  ">
            <div className="z-10 ">
              <a
                href="/"
                className="flex gap-1 font-bold my-auto  dark:text-white  "
              >
                <img
                  src={"/logo.png"}
                  alt=""
                  className="my-auto md:mt-0 mt-3"
                />
              </a>
            </div>{" "}
            <div className="hidden md:flex   items-center gap-8 z-10 rounded-[8px]  text-[14px] font-semibold text-black/70 py-0 px-4 h-20 shadow-custom-white ">
              {Navlinks.map((items, index) => {
                return (
                  <a
                    key={index}
                    href={items.linkto}
                    className=" transition-all ease-linear uppercase delay-75 hover:border-b-2 hover:border-b-black "
                  >
                    {items.text}
                  </a>
                );
              })}
              <a href={portfolio} target="_blank">
                <button>Portfollio</button>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`fixed z-40 w-[300px] right-0 bg-[#fff] overflow-hidden flex flex-col md:hidden gap-12  origin-top duration-700 justify-center md:text-[13px] my-8   py-[0rem] ${
            !toggleMenu ? "h-0" : "h-[100vh]"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider uppercase">
              {Navlinks.map((items, index) => {
                return (
                  <a key={index} href={items.linkto}>
                    {items.text}
                  </a>
                );
              })}
              <a href={portfolio} target="_blank">
                <button>Portfollio</button>
              </a>
            </div>
          </div>
        </div>

        <div
          className=" absolute right-2 top-5 text-[30px] md:hidden block "
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {!toggleMenu ? <IoMdMenu /> : <RxCross1 />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
