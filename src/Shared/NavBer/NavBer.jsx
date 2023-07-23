import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBer = () => {
    const {logOut, user} = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
          .then(() => {})
          .catch((error) => console.log(error));
      };
      
  const navList = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/college">Colleges</Link>
      </li>
      <li>
        <Link to="/admission">Admission</Link>
      </li>
      <li>
        <Link to="/mycollege">My College</Link>
      </li>
    </>
  );

  const profile = (
    <>
    {user?.email ? (
                <>
                    <button className="btn mr-2" onClick={handleLogout}>Sing Out</button>
                  <div>
                    <p>{user.displayName}</p>
                  </div>
                  <div className="w-10 rounded-full">
                    <img className="rounded-full" src={user.photoURL} />
                  </div>
                </>
              ) : (
                  <Link className="btn" to="/login">Login</Link>
              )}
    </>
  )
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <Link className="normal-case text-xl">get your dream</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
      <div className="navbar-end">
        {profile}
      </div>
    </div>
  );
};

export default NavBer;
