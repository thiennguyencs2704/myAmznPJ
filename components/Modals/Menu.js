import React, { useEffect, useState, Fragment } from "react";
import {
  UserIcon,
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";
import MyPortal from "./MyPortal";

const shopByCetegory = [
  "Amazon Prime Video",
  "Amazon Fresh",
  "Home & Kitchen",
  "DIY, Tools and Automotive",
];

const seeMoreItem = [
  "Toys, Games & Crafts",
  "Sports, Fitness & Outdoors",
  "Computers & Office",
  "Clothing, Shoes & Watches",
  "Electronics",
  "Mobile, Tablet & Smart Tech",
  "Books",
  "Music, DVD & Blu-ray",
  "Beauty & Grooming",
];

const containerVariants = {
  hidden: {
    x: -600,
    transition: { duration: 0.2 },
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

const modalVariants = {
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const moreItemVariants = {
  hidden: { opacity: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

export default function Menu({ isOpenMenu, handlerCloseMenu }) {
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    isOpenMenu &&
      ((document.documentElement.style.overflow = "hidden"), // firefox, chrome
      (document.body.scroll = "no")); // ie only
  }, [isOpenMenu]);

  return (
    <AnimatePresence>
      {isOpenMenu && (
        <MyPortal selector="#modal">
          <div className="min-h-screen overflow-hidden z-50">
            <motion.div
              key="backdrop"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={handlerCloseMenu}
              className="fixed flex bg-black bg-opacity-70 top-0 bottom-0 left-0 right-0 z-50"
            />

            <motion.div
              key="sideMenu"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed bg-white top-0 w-72 md:w-96 h-full text-sm z-50 overflow-auto"
            >
              <div className="flex bg-amazon_blue-light text-white items-center h-12 pl-10">
                <UserIcon className="w-7 h-7 text-amazon_blue-light bg-white rounded-full" />

                <h1 className="ml-3 text-lg font-bold">Hello, Sign in</h1>

                <XIcon
                  onClick={handlerCloseMenu}
                  className="fixed w-8 h-8 text-white z-5 font-normal left-72 md:left-96 -mr-5 hover:cursor-pointer"
                />
              </div>

              <div>
                <div className="pl-10 pb-5 border-b border-gray-200 h-1/4">
                  <h1 className="text-lg font-bold my-4">Trending</h1>

                  <ul className="space-y-3 sm:space-y-5 text-black text-opacity-70 font-medium">
                    <li>Best Sellers</li>
                    <li>New Releases</li>
                    <li>Movers and Shakers</li>
                  </ul>
                </div>

                <div className="pl-10 pb-5 border-b border-gray-200 h-2/5">
                  <h1 className="text-lg font-bold my-4">Shop By Category</h1>

                  <ul className="space-y-3 sm:space-y-5 text-black text-opacity-70 font-medium">
                    {shopByCetegory.map((item) => (
                      <li className="flex justify-between items-center">
                        {item}{" "}
                        <span>
                          <ChevronRightIcon className="h-7 w-7 text-gray-400 font-thin" />
                        </span>
                      </li>
                    ))}
                    <AnimatePresence>
                      {seeAll === false ? (
                        <li
                          onClick={() => {
                            setSeeAll(true);
                          }}
                          className="flex items-center hover:cursor-pointer"
                        >
                          See All{" "}
                          <span>
                            <ChevronDownIcon className="h-7 w-7 text-gray-400 font-thin" />
                          </span>
                        </li>
                      ) : (
                        <motion.div
                          key="moreItem"
                          variants={moreItemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="space-y-3 sm:space-y-5"
                        >
                          <li className="border-t border-gray-200 mr-10 pt-5">
                            {seeMoreItem[0]}
                          </li>
                          {seeMoreItem.slice(1).map((item) => (
                            <li className="flex justify-between items-center">
                              {item}{" "}
                              <span>
                                <ChevronRightIcon className="h-7 w-7 text-gray-400 font-thin" />
                              </span>
                            </li>
                          ))}

                          <li
                            onClick={() => {
                              setSeeAll(false);
                            }}
                            className="flex items-center hover:cursor-pointer"
                          >
                            See Less{" "}
                            <span>
                              <ChevronUpIcon className="h-7 w-7 text-gray-400 font-thin" />
                            </span>
                          </li>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </ul>
                </div>

                <div className="pl-10 pb-10 h-1/4">
                  <h1 className="text-lg font-bold my-4">Help & Settings</h1>
                  <ul className="space-y-3 sm:space-y-5 text-black text-opacity-70 font-medium">
                    <li>Your Account</li>
                    <li>Help</li>
                    <li>Sign In</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </MyPortal>
      )}
    </AnimatePresence>
  );
}
