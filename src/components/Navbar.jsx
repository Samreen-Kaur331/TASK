import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

const Navbar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl text-blue-500 font-bold">Homing</h1>
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
          <button onClick={() => setLoginOpen(true)} className="text-blue-500 font-semibold">
            Login
          </button>
          <button onClick={() => setSignupOpen(true)} className="bg-blue-500 text-white rounded-md">
            Sign Up
          </button>
        </div>
      </nav>

      <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
      <Signup  isOpen={isSignupOpen} onClose={() => setSignupOpen(false)} />
    </>
  );
};

export default Navbar;
