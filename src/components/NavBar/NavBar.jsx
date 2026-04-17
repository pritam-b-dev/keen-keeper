import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import React from "react";
import MyNavLink from "./MyNavLink";
import SearchBar from "./SearchBar/SearchBar";

const NavBar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
      icon: <FaHome />,
    },
    {
      path: "/history",
      text: "Timeline",
      icon: <RiTimeLine />,
    },
    {
      path: "/dashboard",
      text: "Stats",
      icon: <TfiStatsUp />,
    },
  ];
  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto p-1 bg-base-100 flex items-center justify-between  ">
        <div className="flex items-center gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="{0}"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item, index) => (
                <MyNavLink key={index} href={item.path}>
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.text}
                  </span>
                </MyNavLink>
              ))}
            </ul>
          </div>
          <a className="text-xl font-bold">
            Keen<span className="text-[#244D3F]">Keeper</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex gap-6">
            <ul className=" flex px-1 gap-6 mr-2">
              {navItems.map((item, index) => (
                <MyNavLink key={index} href={item.path}>
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.text}
                  </span>
                </MyNavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
