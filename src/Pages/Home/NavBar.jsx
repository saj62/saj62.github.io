import { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

function NavBar() {
  const [navActive, setNavActive] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  useEffect(() => {
    // If on the home page, check if there's a section to scroll to from state
    if (location.pathname === '/' && location.state?.targetSection) {
      scroller.scrollTo(location.state.targetSection, {
        smooth: true,
        offset: -70, // Adjust based on your navbar height
        duration: 500,
      });
    }
  }, [location]);

  return (
    <nav className="sticky top-0 w-full flex items-center justify-between px-6 py-4 bg-white shadow-lg z-50">
      <div className="flex-shrink-0">
        <RouterLink to="/" onClick={closeMenu}>
          <img className="w-16 h-auto" src="./img/Group.svg" alt="Sarah's Logo" />
        </RouterLink>
      </div>

      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line nav"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>

      <div
        className={`lg:flex lg:items-center lg:space-x-8 absolute lg:relative top-0 left-0 w-full lg:w-auto lg:bg-transparent bg-white transition-transform transform ${
          navActive ? "translate-y-0" : "-translate-y-full"
        } lg:translate-y-0`}
      >
        <ul className="flex flex-col lg:flex-row items-center lg:space-x-8 p-8 lg:p-0">
          <li>
            {/* Link to the Home section */}
            <RouterLink
              to="/"
              state={{ targetSection: "heroSection" }}
              onClick={closeMenu}
              className="navbar--content text-lg py-2 lg:py-0"
            >
              Home
            </RouterLink>
          </li>
          <li>
            {/* Link to AboutMe section */}
            <RouterLink
              to="/"
              state={{ targetSection: "AboutMe" }}
              onClick={closeMenu}
              className="navbar--content text-lg py-2 lg:py-0"
            >
              About
            </RouterLink>
          </li>
          <li>
            {/* Link to Skills section */}
            <RouterLink
              to="/"
              state={{ targetSection: "Skills" }}
              onClick={closeMenu}
              className="navbar--content text-lg py-2 lg:py-0"
            >
              Skills
            </RouterLink>
          </li>
          <li>
            {/* Link to Projects section */}
            <RouterLink
              to="/"
              state={{ targetSection: "Projects" }}
              onClick={closeMenu}
              className="navbar--content text-lg py-2 lg:py-0"
            >
              Projects
            </RouterLink>
          </li>
          <li>
            {/* Route to the artwork page */}
            <RouterLink
              to="/artwork"
              onClick={closeMenu}
              className="navbar--content text-lg py-2 lg:py-0"
            >
              Artwork
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;