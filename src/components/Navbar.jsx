import { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

import { close,menu} from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false); //toggle initially false

  return (
    <nav>

      <ul className="bg-secondary p-4 w-fit mx-auto navbar list-none sm:flex hidden justify-center items-center flex-1 rounded-xl">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-altPrimary" : "text-altSecondary"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-start">
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
          } fixed left-0 top-20 w-fit t p-6 bg-black-gradient right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`border-b border-gray-600 font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-primary" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
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