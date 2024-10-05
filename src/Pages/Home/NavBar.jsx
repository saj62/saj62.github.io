import { useState } from "react";
import { Link } from "react-scroll";


function NavBar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-lg">
      <div className="flex-shrink-0">
        {/* Ensures the logo stays the same size across all screen sizes */}
        <img className="w-16 h-auto" src="./img/Group.svg" alt="Sarah's Logo" />
      </div>

      {/* Hamburger menu for smaller screens */}
      <div className="lg:hidden">
        <button onClick={toggleNav} className="focus:outline-none">
          {navActive ? (
            // Close (X) button when the menu is active
            <span className="text-3xl"></span>
          ) : (
            // Hamburger icon
            <div className="space-y-1">
              <span className="block w-6 h-1 bg-light-purple"></span>
              <span className="block w-6 h-1 bg-light-purple"></span>
              <span className="block w-6 h-1 bg-light-purple"></span>
            </div>
          )}
        </button>
      </div>

      {/* Navigation links */}
      <div
        className={`lg:flex lg:items-center lg:space-x-8 absolute lg:relative top-0 left-0 w-full lg:w-auto lg:bg-transparent bg-white transition-transform transform ${
          navActive ? "translate-y-0" : "-translate-y-full"
        } lg:translate-y-0`}
      >
        <ul className="flex flex-col lg:flex-row items-center lg:space-x-8 p-8 lg:p-0">
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content text-lg py-2 lg:py-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content text-lg py-2 lg:py-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Skills"
              className="navbar--content text-lg py-2 lg:py-0"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Projects"
              className="navbar--content text-lg py-2 lg:py-0"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Artwork"
              className="navbar--content text-lg py-2 lg:py-0"
            >
              Artwork
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
