import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md h-screen">
      <div className="p-4 text-xl font-bold">DVMS</div>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-4 block hover:bg-blue-100 ${isActive ? "bg-blue-200" : ""}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/data-source"
          className={({ isActive }) =>
            `p-4 block hover:bg-blue-100 ${isActive ? "bg-blue-200" : ""}`
          }
        >
          Data Source
        </NavLink>
        <NavLink
          to="/abp"
          className={({ isActive }) =>
            `p-4 block hover:bg-blue-100 ${isActive ? "bg-blue-200" : ""}`
          }
        >
          ABP
        </NavLink>
        <NavLink
          to="/case-list"
          className={({ isActive }) =>
            `p-4 block hover:bg-blue-100 ${isActive ? "bg-blue-200" : ""}`
          }
        >
          Investigator Panel
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;