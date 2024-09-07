import { useState } from "react";
import NavItems from "./NavItems";
import menu from "/assets/menu.svg";
import close from "/assets/close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className="fixed top-o left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Dmitriy
          </a>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
          >
            <img src={isOpen ? close : menu} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
