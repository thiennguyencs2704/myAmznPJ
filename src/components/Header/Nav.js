import React, { useEffect, useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import Menu from "../Modals/Menu";
import Link from "next/link";

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handlerCloseMenu = () => {
    setIsOpenMenu(false);
    document.documentElement.style.overflow = "auto";
    document.body.scroll = "yes";
  };

  useEffect(() => {
    isOpenMenu &&
      ((document.documentElement.style.overflow = "hidden"), // firefox, chrome
      (document.body.scroll = "no")); // ie only
  }, [isOpenMenu]);

  return (
    <nav className="flex items-center h-9 bg-amazon_blue-light">
      <div className={`${isOpenMenu ? "z-50" : "hidden z-0"}`}>
        <Menu isOpenMenu={isOpenMenu} handlerCloseMenu={handlerCloseMenu} />
      </div>

      <div
        onClick={() => setIsOpenMenu(true)}
        className="link-nav items-center flex ml-4 text-white font-medium h-[30px]"
      >
        <MenuIcon className="w-6 h-6 mr-1" />
        <p>All</p>
      </div>

      <div className="flex items-center text-xs font-medium text-white sm:text-sm">
        <Link href="/nav/bestsellers">
          <a className="link-nav">Best Sellers</a>
        </Link>

        {/* <Link href="/nav/combination">
        <a className="link-nav">Combination</a>
      </Link> */}
        <p className="link-disable">Apple</p>
        <p className="link-disable">Customer Service</p>
        <p className="hidden sm:inline link-disable">Gift Cards</p>
        <p className="hidden md:inline link-disable">Registry</p>
        <p className="hidden md:inline link-disable">Sell</p>
        <p className="hidden lg:inline link-disable">Health & Personal Care</p>
      </div>
    </nav>
  );
};

export default Nav;
