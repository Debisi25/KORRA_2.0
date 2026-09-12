import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import korraWhite from "../assets/korra_white.jpeg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="isolate flex flex-row justify-between items-center p-4 bg-gray-800 text-white sticky top-0 z-50">
        <Link to="/" className="font-display text-2xl">
          KORRA
        </Link>
        <ul className="justify-around p-3 hidden sm:flex">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="px-4">
            <Link to="/story">Our Story</Link>
          </li>
          <li className="px-4">
            <Link to="/reservations">Reservations</Link>
          </li>
          <li className="pl-4 pr-0">
            <Link to="/space">Space</Link>
          </li>
        </ul>
        <button
          className="font-body text-md text-white sm:hidden hover:text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
      </nav>
      <div
        className={`fixed z-50 inset-0 bg-korra-green transition-transform duration-350 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <span
          className="absolute top-4 right-4 text-2xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          X
        </span>
        <ul className="flex flex-col justify-center items-center h-full">
          <li className="py-4">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="py-4">
            <Link to="/menu" onClick={() => setIsOpen(false)}>
              Menu
            </Link>
          </li>
          <li className="py-4">
            <Link to="/story" onClick={() => setIsOpen(false)}>
              Our Story
            </Link>
          </li>
          <li className="py-4">
            <Link to="/reservations" onClick={() => setIsOpen(false)}>
              Reservations
            </Link>
          </li>
          <li className="py-4">
            <Link to="/space" onClick={() => setIsOpen(false)}>
              Space
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
