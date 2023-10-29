import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SideBarPopupItem from "./SideBarPopupItem";

const tabs = [
  "HOME",
  "SEARCH",
  "LOCATIONS",
  "VENUES",
  "VENDORS",
  "WEDDING WEBSITES",
  "FOR BUSINESS",
  "USER",
  "LOGOUT",
];

const SidebarPopup = ({
  isOpenSideBar,
  toggleSideBar,
}: {
  isOpenSideBar: boolean;
  toggleSideBar: () => void;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(isOpenSideBar);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsSidebarOpen(isOpenSideBar);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleSideBar(); // Close the sidebar when clicking outside
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenSideBar, isSidebarOpen, toggleSideBar]);

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.div
          ref={sidebarRef}
          className="block lg:hidden fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto bg-white border-r-2"
          variants={sidebarVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <h5 className="text-base font-semibold text-black uppercase ">
            Menu
          </h5>

          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              {tabs.map((tab) => (
                <li key={tab}>
                  <SideBarPopupItem name={tab} />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidebarPopup;
