import {
  searchProducts,
  clearProductSuggestion,
} from "../../store/productSlice";
import { SearchIcon } from "@heroicons/react/outline";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

const SearchBar = ({ mobileMode }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const productSuggestion = useSelector(
    (state) => state.products.productSuggestion
  );

  const [search, setSearch] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState(false);
  const searchInput = useRef();

  const handlerBlurInput = () => {
    searchInput.current.blur();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.length !== 0 && search === searchInput.current.value) {
        dispatch(searchProducts(searchInput.current.value.toLowerCase()));
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  useEffect(() => {
    if (
      productSuggestion.length !== 0 &&
      router.pathname !== "/searchresults/[...slug]"
    ) {
      setSearch("");
      dispatch(clearProductSuggestion());
    }
  }, [router.pathname]);

  const displayMobileMode = mobileMode
    ? "hidden md:flex flex-grow"
    : "md:hidden flex flex-grow";

  return (
    <div
      className={`${displayMobileMode} items-center h-10 bg-yellow-500 rounded-md`}
    >
      <div className="h-full items-center bg-amazon_blue  text-gray-500 text-sm">
        <select className="h-full pl-2 bg-gray-300 hover:cursor-pointer rounded-l-md rounded-r-none border-none border-0">
          <option>All</option>
        </select>
      </div>

      <div className="relative flex-grow h-full">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          ref={searchInput}
          type="text"
          className="w-full p-3 h-full text-black removeInputWebkit"
          onBlur={() => setSearchSuggestion(false)}
          onMouseDown={() => setSearchSuggestion(true)}
          id={mobileMode ? "searchInputMobile" : "searchInput"}
          autoComplete="off"
        />

        {searchSuggestion && (
          <div className="absolute bg-white text-black text-sm w-full rounded-b-sm shadow-md border-b border-l border-r border-gray-200">
            {productSuggestion
              .map((product) => (
                <Link
                  key={product.id}
                  href="/productdetail/[id]/[product]"
                  as={`/productdetail/${product.id}/${product.title.replace(
                    / /g,
                    "-"
                  )}`}
                >
                  <a
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      setSearchSuggestion(false);
                      handlerBlurInput();
                    }}
                    key={product.id}
                    className="line-clamp-1 py-1 px-3 hover:bg-gray-100"
                  >
                    {product.title}
                  </a>
                </Link>
              ))
              .slice(0, 6)}
          </div>
        )}
      </div>
      <div className="">
        <Link
          href="/searchresults/[...slug]"
          as={`/searchresults/keyword/${search}`}
        >
          <SearchIcon className="h-10 w-10 p-2 hover:cursor-pointer hover:bg-yellow-600 active:bg-yellow-700 rounded-r-md" />
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
