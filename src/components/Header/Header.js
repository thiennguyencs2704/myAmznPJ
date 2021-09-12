import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../store/userSlice";
import { useEffect } from "react";
import { auth } from "../../../firebase";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import SearchBar from "./SearchBar/SearchBar";
import { getLastCart } from "../../store/cartSlice";
import useWindowWidth from "../../hooks/useWindowWidth";
import Nav from "./Nav";

const Header = ({ screenWidth }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart);

  const currentWidth = useWindowWidth(screenWidth);

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
      <div className="flex flex-col bg-amazon_blue">
        <div className="flex items-center justify-between flex-grow w-full h-16 pr-3 text-white">
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

          {currentWidth >= 640 && <SearchBar />}

          <div className="flex items-center mx-3 space-x-1 text-xs">
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
                    <p className="items-center justify-center p-1 px-2 text-xs font-medium bg-yellow-500 rounded-full">
                      {cart.totalQty}
                    </p>
                  </div>

                  <p className="hidden mt-4 text-base font-semibold sm:inline">
                    Cart
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>

        {currentWidth < 640 && currentWidth > 0 && (
          <div className="mx-3">
            <SearchBar />
          </div>
        )}
      </div>

      <Nav />
    </header>
  );
};

export default Header;
