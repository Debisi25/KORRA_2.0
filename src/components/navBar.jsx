import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import korraWhite from "../assets/korra_white.jpeg";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

function NavLink({ name, link, className }) {
  return (
    <li className={`{className} relative `}>
      <ReactRouterNavLink
        to={link}
        className={({ isActive }) => (isActive ? "underline" : "")}
      >
        {name}
      </ReactRouterNavLink>
    </li>
  );
}

function NavBar() {
  const navLinks = [
    { name: "Menu", link: "/menu" },
    { name: "Our Story", link: "/story" },
    { name: "Reservations", link: "/reservations" },
    { name: "Space", link: "/space" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, SetScrolled] = useState(false);
  const [activePage, setActivePage] = useState("");

  function handlePage() {
    setActivePage();
  }
  useEffect(() => {
    function handleScroll() {
      SetScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`isolate flex flex-row justify-between items-center p-4 text-ink sticky top-0 border z-50 transition-all duration-300 ease-out ${
          scrolled
            ? "scrolled backdrop-blur-md border-white/12"
            : "border-transparent backdrop-blur-2xl"
        } `}
      >
        <Link to="/" className="-rotate-180 font-display text-2xl">
          KORRA
        </Link>
        <ul className="justify-around p-3 hidden sm:flex text-ink gap-2">
          {navLinks.map((link) => (
            <NavLink
              name={link.name}
              key={link.name}
              link={link.link}
              className="bg-blue-400 px-2"
            />
          ))}
        </ul>
        <button
          className={`font-body text-md  sm:hidden hover:text-black ${scrolled ? "text-terracotta" : "text-white"}`}
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
