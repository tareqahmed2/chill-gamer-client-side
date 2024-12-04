import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut, userPhoto, userName } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

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
          to="/reviews"
          className={({ isActive }) =>
            isActive ? "text-accent font-bold" : ""
          }
        >
          All Reviews
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addReview"
              className={({ isActive }) =>
                isActive ? "text-accent font-bold" : ""
              }
            >
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myReviews"
              className={({ isActive }) =>
                isActive ? "text-accent font-bold" : ""
              }
            >
              My Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/game-watchlist"
              className={({ isActive }) =>
                isActive ? "text-accent font-bold" : ""
              }
            >
              Game WatchList
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-slate-200 sticky top-0 backdrop-blur-lg z-10 mb-5">
      <div className="navbar w-11/12 mx-auto flex justify-between">
        {/* Navbar Start */}
        <div className="navbar-start w-full md:w-1/4">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost px-0 md:px-1">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <img
              className="w-12 h-12 rounded-full cursor-pointer"
              src={logo}
              alt="Logo"
              onClick={() => navigate("/")}
            />
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-0">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end w-full flex justify-end items-center gap-4">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={userPhoto || logo} alt="User Avatar" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <span className="font-semibold text-center">
                    {userName || "User"}
                  </span>
                </li>
                <li>
                  <button onClick={handleLogout} className="btn btn-error">
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="btn btn-secondary"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="btn btn-accent bg-[#3F00E7] text-white"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
