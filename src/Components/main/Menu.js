import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  const [menuShow, setMenuShow] = useState("hidden sm:block");
  const is_active = "border-cherry";
  const handleClick = () => {
    if (menuShow === "block sm:block") {
      setMenuShow("hidden sm:block");
    } else {
      setMenuShow("block sm:block");
    }
  };
  const linkVariant = {
    hidden: {
      x: 0,
    },
    visible: {
      x: -5,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <div className="text-gray-600 p-3 bg-chiffon sm:h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-gray-800 uppercase py-3">
          Moonlanding
        </h1>
        <div className="px-4 cursor-pointer md:hidden" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <div className="sm:flex sm:justify-end">
        <nav className="text-right">
          <ul className={menuShow}>
            <motion.li
              className="my-3"
              variants={linkVariant}
              initial="hidden"
              whileHover="visible"
            >
              <NavLink
                to="/home"
                className="px-4 flex justify-end border-r-4 border-white hover:border-cherry"
                activeClassName={is_active}
              >
                <span>Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </NavLink>
            </motion.li>
            <motion.li
              className="my-3"
              variants={linkVariant}
              initial="hidden"
              whileHover="visible"
            >
              <NavLink
                activeClassName={is_active}
                to="/projects"
                className="px-4 flex justify-end border-r-4 border-white hover:border-cherry"
              >
                <span>Projects</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </NavLink>
            </motion.li>
            <motion.li
              className="my-3"
              variants={linkVariant}
              initial="hidden"
              whileHover="visible"
            >
              <NavLink
                activeClassName={is_active}
                to="/presentation"
                className="px-4 flex justify-end border-r-4 border-white hover:border-cherry"
              >
                <span>Presentation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </NavLink>
            </motion.li>
            <motion.li
              className="my-3"
              variants={linkVariant}
              initial="hidden"
              whileHover="visible"
            >
              <NavLink
                activeClassName={is_active}
                to="/others"
                className="px-4 flex justify-end border-r-4 border-white hover:border-cherry"
              >
                <span>Others</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </NavLink>
            </motion.li>
            <motion.li
              className="my-3"
              variants={linkVariant}
              initial="hidden"
              whileHover="visible"
            >
              <NavLink
                activeClassName={is_active}
                to="/contact"
                className="px-4 flex justify-end border-r-4 border-white hover:border-cherry"
              >
                <span>Contact</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </NavLink>
            </motion.li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
