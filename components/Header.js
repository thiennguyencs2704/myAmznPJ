import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../store/userSlice";
import { auth } from "../firebase";
import { clearProductSuggestion, searchProducts } from "../store/productSlice";
import { useEffect, useState } from "react";

import {
  ShoppingCartIcon,
  SearchIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart);
  const productSuggestion = useSelector(
    (state) => state.products.productSuggestion
  );

  const [search, setSearch] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState(false);

  const router = useRouter();

  const handlerSignout = () => {
    auth.signOut();
    dispatch(signout());
  };

  const handlerSearchChange = (e) => {
    setSearch(e.target.value);
    dispatch(searchProducts(e.target.value));
  };

  useEffect(() => {
    setSearch("");
    dispatch(clearProductSuggestion());
    console.log("Current Router", router.pathname);
  }, [router.pathname]);

  const handlerBlurInput = () => {
    document.getElementById("searchInput").blur();
  };

  return (
    <header className="sticky top-0 z-50">
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

          <div className="hidden md:flex flex-grow items-center h-10 bg-yellow-500 rounded-md">
            <select className="h-full items-center pl-2 rounded-l-md text-gray-500 text-sm bg-gray-300 hover:cursor-pointer rounded-r-none border-none">
              <option className="border-none">All</option>
            </select>

            <div className="relative flex-grow h-full">
              <input
                onChange={handlerSearchChange}
                value={search}
                type="text"
                className="w-full p-3 h-full text-black removeInputWebkit"
                onBlur={() => setSearchSuggestion(false)}
                onClick={() => setSearchSuggestion(true)}
                id="searchInput"
                autoComplete="off"
              />

              {searchSuggestion && (
                <div className="absolute bg-white text-black text-sm w-full rounded-b-sm shadow-md border-b border-l border-r border-gray-200">
                  {productSuggestion
                    .map((product) => (
                      <Link
                        key={product.id}
                        href={{
                          pathname: "/productdetail/[id]",
                          query: {
                            id: product.id,
                            productData: JSON.stringify(product),
                          },
                        }}
                      >
                        <a>
                          <p
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                              setSearchSuggestion(false);
                              handlerBlurInput();
                            }}
                            key={product.id}
                            className="line-clamp-1 py-1 px-3 hover:bg-gray-100"
                          >
                            {product.title}
                          </p>
                        </a>
                      </Link>
                    ))
                    .slice(0, 6)}
                </div>
              )}
            </div>
            <div className="">
              <Link
                href={{
                  pathname:
                    // search.length !== 0 ?
                    "/searchresults/[search]",
                  // : "/"
                  query: {
                    search: search,
                    filteredProducts: JSON.stringify(productSuggestion),
                  },
                }}
              >
                <SearchIcon className="h-10 w-10 p-2 hover:cursor-pointer hover:bg-yellow-600 active:bg-yellow-700 rounded-r-md" />
              </Link>
            </div>
          </div>

          <div className="flex space-x-1 mx-3 items-center text-xs">
            {user ? (
              <div onClick={handlerSignout} className="link">
                <p>Hello, {user.email}</p>
                <p className="text-sm font-semibold whitespace-nowrap">
                  Sign Out
                </p>
              </div>
            ) : (
              <Link href="/auth/signin">
                <a>
                  <div className="link">
                    <p>Hello, Sign in</p>
                    <p className="text-sm font-semibold whitespace-nowrap">
                      Account & Lists
                    </p>
                  </div>
                </a>
              </Link>
            )}

            <div className="link">
              <p>Returns</p>
              <p className="text-sm font-semibold whitespace-nowrap">
                & Orders
              </p>
            </div>

            <Link href="/checkout">
              <a>
                <div className="relative flex w-18 justify-between items-center link">
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
          <div className="flex md:hidden flex-grow items-center h-10 bg-yellow-500 rounded-md">
            <select className="h-full items-center pl-2 rounded-l-md text-gray-500 text-sm bg-gray-300 hover:cursor-pointer rounded-r-none border-none">
              <option className="border-none">All</option>
            </select>

            <div className="relative flex-grow h-full">
              <input
                onChange={handlerSearchChange}
                value={search}
                type="text"
                className="w-full p-3 h-full text-black removeInputWebkit"
                onBlur={() => setSearchSuggestion(false)}
                onClick={() => setSearchSuggestion(true)}
                id="searchInput"
                autoComplete="off"
              />

              {searchSuggestion && (
                <div className="absolute bg-white text-black text-sm w-full rounded-b-sm shadow-md border-b border-l border-r border-gray-200">
                  {productSuggestion
                    .map((product) => (
                      <Link
                        key={product.id}
                        href={{
                          pathname: "/productdetail/[id]",
                          query: {
                            id: product.id,
                            productData: JSON.stringify(product),
                          },
                        }}
                      >
                        <a>
                          <p
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                              setSearchSuggestion(false);
                              handlerBlurInput();
                            }}
                            key={product.id}
                            className="line-clamp-1 py-1 px-3 hover:bg-gray-100"
                          >
                            {product.title}
                          </p>
                        </a>
                      </Link>
                    ))
                    .slice(0, 5)}
                </div>
              )}
            </div>

            <div className="">
              <Link
                href={{
                  pathname:
                    // search.length !== 0 ?
                    "/searchresults/[search]",
                  // : "/"
                  query: {
                    search: search,
                    filteredProducts: JSON.stringify(productSuggestion),
                  },
                }}
              >
                <SearchIcon className="h-10 w-10 p-2 hover:cursor-pointer hover:bg-yellow-600 active:bg-yellow-700 rounded-r-md" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav className="flex items-center h-9 bg-amazon_blue-light">
        <div className="ml-4">
          <MenuIcon className="text-white w-6 h-6" />
        </div>

        <div className="flex items-center space-x-3 text-xs sm:text-sm text-white font-medium m-2 mr-3 ">
          <p>All</p>
          <p>Today's Deals</p>
          <p>Customer Service</p>
          <p>Gift Cards</p>
          <p className="hidden sm:inline">Registry</p>
          <p className="hidden sm:inline">Sell</p>
          <p className="hidden sm:inline">Health & Personal Care</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
