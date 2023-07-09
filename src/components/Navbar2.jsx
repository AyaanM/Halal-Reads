import { useState } from "react";
import { close, logo, menu} from "../assets";
import { navLinks2 } from "../constants";

const Navbar2 = () => {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="HalalReads" className="w-[500px] h-[124px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks2.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-altSecondary" : "text-secondary"
            } ${index === navLinks2.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>


    </nav>
  );
};

export default Navbar2;