import React from "react";
import { SiDevpost } from "react-icons/si";
import { AiOutlineHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

const Menu = () => {
  const menu = [
    {
      name: "Home",
      icon: AiOutlineHome,
    },
    {
      name: "Search",
      icon: BsSearch,
    },
    {
      name: "Explore",
      icon: MdOutlineExplore,
    },
    {
      name: "Notification",
      icon: IoMdNotificationsOutline,
    },
    {
      name: "Setting",
      icon: FiSettings,
    },
    {
      name: "Log out",
      icon: BiLogOut,
    },
  ];

  return (
    <nav>
      <div className="flex px-8 pt-8 text-4xl gap-3 cursor-pointer">
        <SiDevpost />
        <h1>DenG</h1>
      </div>
      <ul className=" p-6 divide-y divide-slate-200">
        {menu.map((menuItem) => (
          <li className="flex gap-3 p-3 text-2xl cursor-pointer hover:bg-gray-700 hover:text-white">
            {<menuItem.icon />}
            <span> {menuItem.name} </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
