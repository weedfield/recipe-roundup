import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const routes = [
  { name: "Home", href: "/" },
  { name: "Recipes", href: "/recipes" },
  { name: "Categories", href: "/categories", disabled: true }, 
];

const NavMenu = ({ routes, isOpen, onClose, currentPath }) => {
  return isOpen ? (
    <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center border-black">
      <button
        className="absolute top-4 right-4 text-black text-3xl"
        onClick={onClose}
      >
        <FaTimes />
      </button>
      <ul className="flex flex-col justify-center items-center gap-8 text-3xl w-full">
        {routes.map((route, i) => (
          <li key={i} className="w-full text-center last:border-none">
            {route.disabled ? (
              <span className="block py-4 opacity-50 cursor-not-allowed">
                {route.name}
              </span>
            ) : (
              <Link href={route.href}>
                <a
                  className={`inline-block py-4 border-b-2 ${
                    currentPath === route.href
                      ? "font-bold border-black"
                      : "border-transparent hover:border-black"
                  }`}
                  onClick={onClose}
                >
                  {route.name}
                </a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

NavMenu.propTypes = {
  routes: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="bg-white text-black shadow-md py-6 relative border-b border-black">
      <nav className="px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-3xl font-extrabold tracking-wide border-b-4 border-black">
              Recipe Roundup
            </a>
          </Link>
          <button
            className="block lg:hidden z-50"
            type="button"
            onClick={toggleMenu}
          >
            <FaBars className="h-8 w-8 text-black" />
          </button>
          <div className="hidden lg:flex lg:gap-6">
            {routes.map((route, i) => (
              route.disabled ? (
                <span
                  key={i}
                  className="px-4 py-2 opacity-50 cursor-not-allowed"
                >
                  {route.name}
                </span>
              ) : (
                <Link href={route.href} key={i}>
                  <a
                    className={`inline-block px-4 py-2 border-b-2 ${
                      router.pathname === route.href
                        ? "font-bold border-black"
                        : "border-transparent hover:border-black"
                    }`}
                  >
                    {route.name}
                  </a>
                </Link>
              )
            ))}
          </div>
        </div>
      </nav>
      <NavMenu
        routes={routes}
        isOpen={isOpen}
        onClose={closeMenu}
        currentPath={router.pathname}
      />
    </header>
  );
}
