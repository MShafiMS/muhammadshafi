import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.css';

const Header = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div >
      <div className="navbar fixed top-0 w-full z-50 bg-neutral bg-opacity-30 backdrop-filter backdrop-blur-lg">
        <div className="flex-none"></div>
        <div className="flex-1  lg:ml-10">
          <Link to="/">
            <div className="flex items-center grid-flow-col-2">
              <div className="lg:avatar hidden">
                <div className="w-10 mask mask-hexagon">
                  <img src="https://avatars.githubusercontent.com/u/81031854?v=4" />
                </div>
              </div>
              <span className=" ml-4 text-white normal-case text-2xl">
                Muhammad <span className="text-secondary">Shafi.</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="hidden space-x-5 lg:flex text-white mr-10">
            <li className={splitLocation[1] === "" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={splitLocation[1] === "allprojects" ? "active" : ""}>
              <Link to="/allprojects">Projects</Link>
            </li>
            <li className={splitLocation[1] === "skills" ? "active" : ""}>
              <Link to="/skills">Skills</Link>
            </li>
            <li className={splitLocation[1] === "blogs" ? "active" : ""}>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className={splitLocation[1] === "about" ? "active" : ""}>
              <Link to="/about">About Me</Link>
            </li>
          </ul>
          <div className="dropdown lg:hidden">
            <label tabIndex="0" className="btn glass text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu text-white dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52 right-0 bg-opacity-100 backdrop-filter backdrop-blur-lg"
            >
             <li className={splitLocation[1] === "" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={splitLocation[1] === "allprojects" ? "active" : ""}>
              <Link to="/allprojects">Projects</Link>
            </li>
            <li className={splitLocation[1] === "skills" ? "active" : ""}>
              <Link to="/skills">Skills</Link>
            </li>
            <li className={splitLocation[1] === "blogs" ? "active" : ""}>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className={splitLocation[1] === "about" ? "active" : ""}>
              <Link to="/about">About Me</Link>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
