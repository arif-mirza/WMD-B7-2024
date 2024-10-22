import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";
import { useState } from "react";
import "./../navbar/navStyle.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center border-b border-gray-100 w-full px-4 py-5 navbar">
        {/* Logo */}
        <Link to="/">
          <div className="text-3xl font-extrabold text-gray-900 dark:text-white font-roboto">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-blue-400">
              NexxaVibe
            </span>
          </div>
        </Link>

        {/* Mobile View - Only Avatar and Bell Icon */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Avatar */}
        
          

          {/* Bell Icon */}
          {/* <button>
            <svg
              className="w-6 h-6 text-gray-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button> */}
          <UserLinks />
        </div>

        {/* Links and other icons - Hidden on Mobile */}
        <div className="hidden sm:hidden md:flex justify-center items-center space-x-6">
          <NavLinks />
         
        </div>

        {/* User Links - Hidden on Mobile */}
        <div className="hidden sm:hidden md:flex">
          <UserLinks />
        </div>
      </div>
    </>
  );
}

export default Navbar;
