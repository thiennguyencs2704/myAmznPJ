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
          <div className="z-50 min-h-screen overflow-hidden">
            <motion.div
              key="backdrop"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={handlerCloseMenu}
              className="fixed top-0 bottom-0 left-0 right-0 z-50 flex bg-black bg-opacity-70"
            />

            <motion.div
              key="sideMenu"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 z-50 h-full overflow-auto text-sm bg-white w-72 md:w-96"
            >
              <div className="flex items-center h-12 pl-10 text-white bg-amazon_blue-light">
                <UserIcon className="bg-white rounded-full w-7 h-7 text-amazon_blue-light" />

                <h1 className="ml-3 text-lg font-bold">Hello, Sign in</h1>

                <XIcon
                  onClick={handlerCloseMenu}
                  className="fixed w-8 h-8 -mr-5 font-normal text-white z-5 left-72 md:left-96 hover:cursor-pointer"
                />
              </div>

              <div>
                <div className="pb-5 pl-10 border-b border-gray-200 h-1/4">
                  <h1 className="my-4 text-lg font-bold">Trending</h1>

                  <ul className="space-y-3 font-medium text-black sm:space-y-5 text-opacity-70">
                    <li>Best Sellers</li>
                    <li>New Releases</li>
                    <li>Movers and Shakers</li>
                  </ul>
                </div>

                <div className="pb-5 pl-10 border-b border-gray-200 h-2/5">
                  <h1 className="my-4 text-lg font-bold">Shop By Category</h1>

                  <ul className="space-y-3 font-medium text-black sm:space-y-5 text-opacity-70">
                    {shopByCetegory.map((item) => (
                      <li className="flex items-center justify-between">
                        {item}{" "}
                        <span>
                          <ChevronRightIcon className="font-thin text-gray-400 h-7 w-7" />
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
                            <ChevronDownIcon className="font-thin text-gray-400 h-7 w-7" />
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
                          <li className="pt-5 mr-10 border-t border-gray-200">
                            {seeMoreItem[0]}
                          </li>
                          {seeMoreItem.slice(1).map((item) => (
                            <li className="flex items-center justify-between">
                              {item}{" "}
                              <span>
                                <ChevronRightIcon className="font-thin text-gray-400 h-7 w-7" />
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
                              <ChevronUpIcon className="font-thin text-gray-400 h-7 w-7" />
                            </span>
                          </li>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </ul>
                </div>

                <div className="pb-10 pl-10 h-1/4">
                  <h1 className="my-4 text-lg font-bold">Help & Settings</h1>
                  <ul className="space-y-3 font-medium text-black sm:space-y-5 text-opacity-70">
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
