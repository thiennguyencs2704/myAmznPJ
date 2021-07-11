import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../store/userSlice";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { ShoppingCartIcon, MenuIcon } from "@heroicons/react/outline";
import SearchBar from "./SearchBar";
import { getLastCart } from "../../store/cartSlice";
import Menu from "../Modals/Menu";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handlerCloseMenu = () => {
    setIsOpenMenu(false);
    document.documentElement.style.overflow = "auto";
    document.body.scroll = "yes";
  };

  const handlerSignout = () => {
    auth.signOut();
    dispatch(signout());
  };

  useEffect(() => {
    const lastCart = localStorage.getItem("cart");
    if (lastCart) {
      dispatch(getLastCart(JSON.parse(lastCart)));
    }
  }, []);

  useEffect(() => {
    cart.totalQty
      ? localStorage.setItem("cart", JSON.stringify(cart))
      : localStorage.removeItem("cart");
  }, [cart.totalQty]);

  return (
    <header className="sticky top-0 z-30">
      <Menu isOpenMenu={isOpenMenu} handlerCloseMenu={handlerCloseMenu} />

      <div className="flex flex-col bg-amazon_blue">
        <div className="justify-between pr-3 flex flex-grow h-16 items-center text-white w-full">
          <Link href="/">
            <a>
              <div className="mt-3 ml-1">
                <Image
                  src="/amazonlogo.png"
                  width={130}
                  height={35}
                  objectFit="contain"
                />
              </div>
            </a>
          </Link>

          <SearchBar mobileMode={true} />

          <div className="flex space-x-1 mx-3 items-center text-xs">
            {user ? (
              <div onClick={handlerSignout} className="link-search">
                <p>Hello, {user.email}</p>
                <p className="text-sm font-semibold whitespace-nowrap">
                  Sign Out
                </p>
              </div>
            ) : (
              <Link href="/auth/signin">
                <a>
                  <div className="link-search">
                    <p>Hello, Sign in</p>
                    <p className="text-sm font-semibold whitespace-nowrap">
                      Account & Lists
                    </p>
                  </div>
                </a>
              </Link>
            )}

            <div className="link-search">
              <p>Returns</p>
              <p className="text-sm font-semibold whitespace-nowrap">
                & Orders
              </p>
            </div>

            <Link href="/checkout">
              <a>
                <div className="link-search relative flex h-[46px] w-18 justify-between items-center">
                  <ShoppingCartIcon className="h-9 w-9" />
                  <div className="absolute -top-1 -right-2 sm:right-5">
                    <p className="bg-yellow-500 rounded-full px-2 p-1 items-center justify-center text-xs font-medium">
                      {cart.totalQty}
                    </p>
                  </div>

                  <p className="hidden sm:inline text-base font-semibold mt-4">
                    Cart
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div className="mx-3">
          <SearchBar mobileMode={false} />
        </div>
      </div>

      <nav className="flex items-center h-9 bg-amazon_blue-light">
        <div
          onClick={() => setIsOpenMenu(true)}
          className="link-nav flex ml-4 text-white font-medium"
        >
          <MenuIcon className="w-6 h-6 mr-1" />
          <p>All</p>
        </div>

        <div className="flex items-center space-x-3 text-xs sm:text-sm text-white font-medium m-2">
          <p className="">Best Sellers</p>
          <p>Apple</p>
          <p>Customer Service</p>
          <p className="hidden sm:inline">RegisGift Cardstry</p>
          <p className="hidden sm:inline">Registry</p>
          <p className="hidden sm:inline">Sell</p>
          <p className="hidden sm:inline">Health & Personal Care</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
