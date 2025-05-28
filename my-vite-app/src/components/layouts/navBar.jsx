import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import img from '../../assets/1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Colors from the document
  const colors = {
    lightGray: "#cccccc",
    gold: "#cbb26a",
    black: "#000000",
    lightGold: "#d8c690",
    darkGold: "#be9e44",
    darkGray: "#1a1a1a",
    cream: "#e5d9b6"
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Active link style for NavLink
  const activeStyle = {
    color: colors.gold,
    fontWeight: 'bold'
  };

  return (
    <div className="w-full" dir="rtl"> {/* Set RTL direction */}
      {/* Main navbar */}
      <nav style={{ backgroundColor: colors.black }} className="p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo and Website Name */}
          <div className="flex items-center">
            {/* Logo Image with Link to home page */}
            <Link to="/">
              <img
                src={img}
                alt="شعار كور ديجيتال ٣٦٠"
                className="h-14 w-auto mr-3 ml-3" /* Adjusted margin for logo before text */
              />
            </Link>
            {/* Website Name in Arabic */}
            <Link to="/" className="hover:opacity-90 transition-opacity">
              <span style={{ color: colors.gold }} className="text-xl font-bold">
             Core Digital 360
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation in Arabic */}
          <div className="hidden md:flex space-x-8">
               <NavLink 
              to="/" 
              style={({ isActive }) => isActive ? activeStyle : { color: colors.cream }} 
              className="hover:opacity-80 transition-opacity"
            >
              الرئيسية
            </NavLink>
            <NavLink 
              to="/contactUs" 
              style={({ isActive }) => isActive ? activeStyle : { color: colors.cream }}
              className="hover:opacity-80 transition-opacity ml-8"
            >
                <NavLink 
              to="/about" 
              style={({ isActive }) => isActive ? activeStyle : { color: colors.cream }} 
              className="hover:opacity-80 transition-opacity ml-8"
            >
              عن الشركة
            </NavLink>
              الاتصال
            </NavLink>
            {/* <NavLink 
              to="/gallery" 
              style={({ isActive }) => isActive ? activeStyle : { color: colors.cream }} 
              className="hover:opacity-80 transition-opacity ml-8"
            >
              المعرض
            </NavLink> */}
            {/* <NavLink 
              to="/services" 
              style={({ isActive }) => isActive ? activeStyle : { color: colors.cream }} 
              className="hover:opacity-80 transition-opacity ml-8"
            >
              الخدمات
            </NavLink> */}
          
         
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              style={{ color: colors.lightGold }}
              className="focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu in Arabic */}
      {isOpen && (
        <div style={{ backgroundColor: colors.darkGray }} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              to="/" 
              style={({ isActive }) => isActive ? activeStyle : { color: colors.lightGold }}
              className="block px-3 py-2 rounded-md text-base font-medium hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </NavLink>
            <NavLink 
              to="/about" 
              style={({ isActive }) => isActive ? activeStyle : { color: colors.lightGold }}
              className="block px-3 py-2 rounded-md text-base font-medium hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              عن الشركة
            </NavLink>
            {/* <NavLink 
              to="/services" 
              style={({ isActive }) => isActive ? activeStyle : { color: colors.lightGold }}
              className="block px-3 py-2 rounded-md text-base font-medium hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              الخدمات
            </NavLink>
            <NavLink 
              to="/gallery" 
              style={({ isActive }) => isActive ? activeStyle : { color: colors.lightGold }}
              className="block px-3 py-2 rounded-md text-base font-medium hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              المعرض
            </NavLink> */}
            <NavLink 
              to="/contactUs" 
              style={({ isActive }) => isActive ? activeStyle : { color: colors.lightGold }}
              className="block px-3 py-2 rounded-md text-base font-medium hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              الاتصال
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;