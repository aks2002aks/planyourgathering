"use client";

import React from "react";
import {
  FaHome,
  FaUser,
  FaHeart,
  FaSearch,
  FaRing,
  FaBriefcase,
} from "react-icons/fa";
import { BsHouseAdd } from "react-icons/bs";
import { BiSolidBusiness, BiLogOut } from "react-icons/bi";
import { GiRingBox } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";

interface DynamicIconProps {
  iconName: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName }) => {
  const iconComponents: { [key: string]: JSX.Element } = {
    locations: <IoLocationOutline />,
    home: <FaHome />,
    user: <FaUser />,
    heart: <FaHeart />,
    search: <FaSearch />,
    venues: <BsHouseAdd />,
    vendors: <FaBriefcase />,
    weddingwebsites: <GiRingBox />,
    forbusiness: <BiSolidBusiness />,
    logout: <BiLogOut />,
  };

  const selectedIcon = iconComponents[iconName] || <FaHome />;

  return <div>{selectedIcon}</div>;
};

export default DynamicIcon;
