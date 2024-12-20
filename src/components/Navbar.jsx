import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  

  const links = (
    <>
      <li to="/">
        <NavLink to="/">Home</NavLink>
      </li>
      <li to="/">
        <NavLink to="career">Career</NavLink>
      </li>
      <li to="/">
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
          {user ? <h4 className="font-semibold">Hi! {user.name} </h4> : ""}
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {user ? (
        <div className="navbar-end gap-3">
          <img src={userIcon} alt="" />
          <button
            onClick={logOut}
            className="btn rounded-sm btn-neutral w-32"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-end gap-3">
          <img src={userIcon} alt="" />
          <Link to="/auth/login" className="btn rounded-sm btn-neutral w-32">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
