"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import SidebarPopup from "./SidebarPopup";
import Link from "next/link";
import { motion } from "framer-motion";

const settings = ["Profile", "Account", "Dashboard", "Logout", "Login"];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const userDropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // toggle side bar
  const closeSideBar = () => {
    setIsOpenSideBar(false);
  };

  // Close the user dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        handleCloseUserMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <SidebarPopup
        isOpenSideBar={isOpenSideBar}
        toggleSideBar={closeSideBar}
      />

      <motion.header
        className={`bg-white w-full border-b${
          isScrolled ? " shadow-md fixed top-0  z-50" : ""
        }`}
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="px-2 mx-auto">
          <div className="flex items-center justify-between py-2">
            <div className="flex-col items-center justify-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="mr-4"
              />
            </div>

            <div className="hidden md:flex md:items-center">
              <button className="px-4">
                <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:text-center px-5">
                  <IoLocationOutline size={20} />
                  <span className="text-xs">INDIA</span>
                </div>
              </button>
              <div className="flex py-2">
                {/* Center the list items vertically and horizontally within the ul */}
                <ul className="flex flex-row text-xs text-center items-center justify-center">
                  <li className="relative">
                    <Link
                      href="/search"
                      className="flex items-center p-2 text-black group text-center"
                    >
                      <p className="flex-1 m-3 whitespace-nowrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 inline-block mr-2"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        SEARCH
                      </p>
                      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      href="/venues"
                      className="flex items-center p-2 text-black group text-center"
                    >
                      <p className="flex-1 m-3 whitespace-nowrap">VENUES</p>
                      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      href="/vendors"
                      className="flex items-center p-2 text-black group text-center"
                    >
                      <p className="flex-1 m-3 whitespace-nowrap">VENDORS</p>
                      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </Link>
                  </li>

                  <li className="relative">
                    <Link
                      href="weddingwebsites"
                      className="flex items-center p-2 text-black group text-center"
                    >
                      <p className="flex-1 m-3 whitespace-nowrap">
                        WEDDING WEBSITES
                      </p>
                      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      href="forbusiness"
                      className="flex items-center p-2 text-black group text-center"
                    >
                      <p className="flex-1 m-3 whitespace-nowrap">
                        FOR BUSINESS
                      </p>
                      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <button onClick={handleOpenUserMenu} className="p-2">
                  <Image
                    alt="User"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    width={60}
                    height={60}
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                {anchorElUser && (
                  <div
                    ref={userDropdownRef}
                    className="mt-2 absolute right-0 bg-white border rounded-lg shadow-md z-10"
                  >
                    {settings.map((setting) => (
                      <Link
                        href={`/user/${setting.toLowerCase()}`}
                        key={setting}
                        onClick={handleCloseUserMenu}
                        className="block text-center px-4 py-2 hover-bg-gray-200"
                      >
                        {setting}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex md:hidden md:items-center pr-3">
              <button
                onClick={() => {
                  if (isOpenSideBar === false) {
                    setIsOpenSideBar(true);
                  } else {
                    setIsOpenSideBar(false);
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}

export default ResponsiveAppBar;
