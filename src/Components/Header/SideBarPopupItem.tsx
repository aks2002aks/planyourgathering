import Link from "next/link";
import React from "react";
import DynamicIcon from "../DynamicIcons/DynamicIcon";

const SideBarPopupItem = ({ name }: { name: string }) => {
  // Remove spaces and convert to lowercase
  const iconName = name.replace(/\s+/g, "").toLowerCase();

  return (
    <Link
      href={`${iconName === "home" ? `/` : `/${iconName}`}`}
      className="flex items-center p-2 text-black rounded-lg  hover:bg-gray-100 "
    >
      <div className="w-5 h-5 text-black transition duration-75  group-hover:text-gray-900">
        <DynamicIcon iconName={iconName} />
      </div>
      <span className="ml-3">{name}</span>
    </Link>
  );
};

export default SideBarPopupItem;
