import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import Link from "next/link";
import React from "react";
import MyNavLink from "./MyNavLink";

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
    <div>
      <div className="container mx-auto navbar bg-base-100 justify-between shadow-[0_4px_10px_-6px_rgba(0,0,0,0.3)]">
        <div className="justify-start">
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
              tabIndex="-1"
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
        <div className="hidden lg:flex justify-end">
          <ul className="menu menu-horizontal px-1 gap-6">
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
  );
};

export default NavBar;
