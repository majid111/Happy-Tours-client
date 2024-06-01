import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Navbar = () => {

  const {user,logOut}=useContext(AuthContext);

  const userimage = user? user.photoURL ||userDefaultPic : userDefaultPic;

  const navigation = 
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allTouristsSpot">All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/addTouristsSpot">Add Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/myList">My List</NavLink>
      </li>
    </>

    const handleLogOut = ()=>{
      logOut()
      .then('successfully logged out')
      .catch(error=>console.log(error))
    }
  
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigation}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">Happy <span className="text-orange-600">Tours</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navigation}</ul>
      </div>
      <div className="navbar-end">
      <div className="mr-4">
          {user ? (
            <img
              className="w-10 rounded-full my-anchor-element"
              alt="Tailwind CSS Navbar component"
              src={userimage}
            />
          ) : (
            <Link to="/register">
              <button className="btn bg-black text-white">Register</button>
            </Link>
          )}
        </div>
        {user ? (
          <button onClick={handleLogOut} className="btn">
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn bg-black text-white">Login</button>
          </Link>
        )}
      
      </div>
    </div>
  );
};

export default Navbar;
