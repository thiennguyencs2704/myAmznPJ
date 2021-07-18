import {
  searchProducts,
  clearProductSuggestion,
} from "../../store/productSlice";
import { SearchIcon } from "@heroicons/react/outline";
import { useState, useEffect, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

const SearchBar = ({ mobileMode }) => {
  const router = useRouter();
  //For changing search state if going back/forward
  const keyword = router.query?.slug?.length > 0 ? router.query.slug[1] : "";

  const dispatch = useDispatch();
  const productSlice = useSelector((state) => state.products);
  const productSuggestion = productSlice.productSuggestion;

  const [search, setSearch] = useState(keyword);
  const [searchSuggestion, setSearchSuggestion] = useState(false);
  const searchInput = useRef();

  //Change searchInput if go back/forward Note: it happens twice because there are 2 inputBar(1 for Mobile)
  useEffect(() => {
    console.log("Check mobileMode");
    if (search !== keyword) {
      setSearch(keyword);
      dispatch(searchProducts(keyword));
    }
  }, [keyword]);

  // Search and show suggestion Note: it happens twice because there are 2 inputBar(1 for Mobile)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        search.length !== 0 &&
        search === searchInput.current.value &&
        searchSuggestion //Only trigger if typing on searchBar
      ) {
        dispatch(searchProducts(searchInput.current.value.toLowerCase()));
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  //Clear suggestion if go to page which is not searchPage
  useEffect(() => {
    if (
      productSuggestion.length !== 0 &&
      router.pathname !== "/searchresults/[...slug]"
    ) {
      setSearch("");
      dispatch(clearProductSuggestion());
    }
  }, [router.pathname]);

  const handlerBlurInput = () => {
    searchInput.current.blur();
  };

  const displayMobileMode = mobileMode
    ? "md:hidden flex flex-grow"
    : "hidden md:flex flex-grow";

  return (
    <div
      className={`flex flex-grow items-center h-10 bg-yellow-500 rounded-md`}
    >
      <select className="h-full items-center pl-2 rounded-l-md text-gray-500 text-sm bg-gray-300 hover:cursor-pointer rounded-r-none">
        <option>All</option>
      </select>

      <div className="relative flex-grow h-full">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
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
