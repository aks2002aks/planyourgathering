import Link from "next/link";
import React, { useState } from "react";
import DynamicIcon from "../DynamicIcons/DynamicIcon";
import { BsChevronDoubleDown } from "react-icons/bs";
import { useRouter } from "next/navigation";

const userTabs = ["Profile", "Settings", "Login", "Signup"];
interface SideBarPopupItemProps {
  name: string;
  dropitem: boolean;
  toggleSideBar: () => void;
}
const SideBarPopupItem: React.FC<SideBarPopupItemProps> = ({
  name,
  dropitem,
  toggleSideBar,
}) => {
  // Remove spaces and convert to lowercase
  const iconName = name.replace(/\s+/g, "").toLowerCase();
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  const router = useRouter();
  return (
    <>
      {!dropitem ? (
        <Link
          href={`${iconName === "home" ? `/` : `/${iconName}`}`}
          className="flex items-center p-2 text-black rounded-lg  hover:bg-gray-100 "
          onClick={(e) => {
            e.preventDefault();
            toggleSideBar();
            router.push(`${iconName === "home" ? `/` : `/${iconName}`}`);
          }}
        >
          <div className="w-5 h-5 text-black transition duration-75  group-hover:text-gray-900">
            <DynamicIcon iconName={iconName} />
          </div>

          <p className="ml-3">{name}</p>
        </Link>
      ) : (
        <>
          <div
            onClick={handleDropDown}
            className="flex items-center justify-start  p-2 text-black rounded-lg  hover:bg-gray-100 "
          >
            <div className="w-5 h-5 text-black transition duration-75  group-hover:text-gray-900">
              <DynamicIcon iconName={iconName} />
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="ml-3">{name}</p>
              {dropitem && <BsChevronDoubleDown />}
            </div>
          </div>
          {dropitem && dropDown && (
            <div className="flex flex-col">
              {userTabs.map((tab) => (
                <li key={tab}>
                  <Link
                    href={`/user/${tab.replace(/\s+/g, "").toLowerCase()}`}
                    className="flex items-center p-2 text-black rounded-lg  hover:bg-gray-100 "
                    onClick={(e) => {
                      e.preventDefault;
                      toggleSideBar();
                    }}
                  >
                    <p className="ml-7">{tab}</p>
                  </Link>
                </li>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SideBarPopupItem;
