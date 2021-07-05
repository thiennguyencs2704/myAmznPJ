import React, { useEffect } from "react";
import {
  UserIcon,
  XIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";

const shopByCetegory = [
  "Amazon Prime Video",
  "Amazon Fresh",
  "Home & Kitchen",
  "DIY, Tools and Automotive",
];

export default function Menu({ isOpenMenu, handlerCloseMenu }) {
  useEffect(() => {
    isOpenMenu &&
      ((document.documentElement.style.overflow = "hidden"), // firefox, chrome
      (document.body.scroll = "no")); // ie only
  }, [isOpenMenu]);

  return (
    <div className="h-full overflow-hidden z-50">
      <div
        onClick={handlerCloseMenu}
        className="fixed flex bg-black bg-opacity-70 top-0 bottom-0 left-0 right-0 z-50"
      />

      <div className="fixed bg-white top-0 w-96 h-full text-sm z-50">
        <div className="flex bg-amazon_blue-light text-white items-center h-12 pl-10">
          <UserIcon className="w-7 h-7 text-amazon_blue-light bg-white rounded-full" />
          <h1 className="ml-3 text-lg font-bold">Hello, Sign in</h1>
          <XIcon
            onClick={handlerCloseMenu}
            className="fixed w-8 h-8 text-white z-5 font-normal left-96 -mr-5 hover:cursor-pointer"
          />
        </div>

        <div className="flex flex-col pl-10 border-b border-gray-200 h-1/4">
          <h1 className="text-lg font-bold my-4">Trending</h1>
          <ul className="space-y-5 flex-1 text-black text-opacity-70 font-medium">
            <li>Best Sellers</li>
            <li>New Releases</li>
            <li>Movers and Shakers</li>
          </ul>
        </div>

        <div className="pl-10 border-b border-gray-200 h-2/5">
          <h1 className="text-lg font-bold my-4">Shop By Category</h1>
          <ul className="space-y-5 flex-1 text-black text-opacity-70 font-medium">
            {shopByCetegory.map((item) => (
              <li className="flex justify-between items-center">
                {item}{" "}
                <span>
                  <ChevronRightIcon className="h-7 w-7 text-gray-400 font-thin" />
                </span>
              </li>
            ))}

            <li className="flex items-center">
              See All{" "}
              <span>
                <ChevronDownIcon className="h-7 w-7 text-gray-400 font-thin" />
              </span>{" "}
            </li>
          </ul>
        </div>

        <div className="pl-10 h-1/4">
          <h1 className="text-lg font-bold my-4">Help & Settings</h1>
          <ul className="space-y-5 flex-1 text-black text-opacity-70 font-medium">
            <li>Your Account</li>
            <li>Help</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
