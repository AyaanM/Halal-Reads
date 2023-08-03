import { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

import { close,menu} from "../assets";
import { navLinks } from "../constants";
import {logo} from "../assets"

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false); //toggle initially false

  return (
    <nav>

      <ul className="bg-secondary justify-center items-center p-4 h-30 w-full md:flex hidden rounded-xl">
        {navLinks.map((nav, index) => (
          <li
            className={`font-poppins font-normal cursor-pointer lg:text-[16px] md:text-[15px] ${
              active === nav.title ? "text-altPrimary" : "text-altSecondary"
            } ${index === navLinks.length - 1}`}
            key={nav.id}
            onClick={() => setActive(nav.title)}
          >
            <a className="px-4" href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-start">
        {toggle ? (
          <AiOutlineClose className="size={20}" //if toggle true do this (everything before :)
          onClick={() => setToggle(false)}
          />
          ) : ( //else if false do this (everything after :)
          <AiOutlineMenu className="size={20}"
          onClick={() => setToggle(true)}
          />
          )}

        <div
          className={`${
            !toggle ? "hidden" : "flex" 
          } fixed right-0 top-20 w-fit t p-6 bg-black-gradient mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className=" list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`border-b border-gray-600 font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-primary" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {setActive(nav.title); setToggle(false)}}
  
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;