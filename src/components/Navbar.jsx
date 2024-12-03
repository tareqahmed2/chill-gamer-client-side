import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-accent font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "text-accent font-bold" : ""
          }
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-accent font-bold" : ""
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-slate-200 sticky top-0 backdrop-blur-lg z-10 mb-5">
      <div className="navbar w-11/12 mx-auto flex justify-between">
        <div className="navbar-start w-full md:w-1/4">
          <img
            className="w-12 h-12 rounded-full cursor-pointer"
            src={logo}
            onClick={() => navigate("/")}
            alt=""
          />
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost px-0 md:px-1"></label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-0">{links}</ul>
        </div>

        <div className="navbar-end w-full">
          <div className="flex gap-4">
            <button className="btn btn-accent">Login</button>
            <button className="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
