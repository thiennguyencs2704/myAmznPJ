import {
  searchProducts,
  clearProductSuggestion,
} from "../../store/productSlice";
import { SearchIcon } from "@heroicons/react/outline";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import SuggestionProducts from "./SuggestionProducts";

const SearchBar = () => {
  const router = useRouter();
  //For changing search state if going back/forward
  const keyword =
    router.query?.slug?.length > 0 ? router.query.slug[0].slice(8) : "";

  const dispatch = useDispatch();
  const productSlice = useSelector((state) => state.products);
  const productSuggestion = productSlice.productSuggestion;

  const [search, setSearch] = useState("");
  console.log("search", search);
  const [searchSuggestion, setSearchSuggestion] = useState(false);
  const searchInput = useRef();

  //Change searchInput if go back/forward
  useEffect(() => {
    if (search !== keyword && router.pathname === "/searchresults/[...slug]") {
      setSearch(keyword);
      dispatch(searchProducts(keyword));
    }
  }, [keyword]);

  // Search and show suggestion
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

  return (
    <div
      className={"flex flex-grow items-center h-10 bg-yellow-500 rounded-md"}
    >
      <select className="items-center h-full pl-2 text-sm text-gray-500 bg-gray-300 rounded-r-none rounded-l-md hover:cursor-pointer">
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
          className="w-full h-full p-3 text-black removeInputWebkit"
          onBlur={() => setSearchSuggestion(false)}
          onMouseDown={() => setSearchSuggestion(true)}
          id="searchInput"
          autoComplete="off"
        />

        {searchSuggestion && (
          <SuggestionProducts
            handlerBlurInput={handlerBlurInput}
            productSuggestion={productSuggestion}
            setSearchSuggestion={setSearchSuggestion}
          />
        )}
      </div>

      <div className="">
        <Link
          href="/searchresults/[...slug]"
          as={`/searchresults/keyword=${search}`}
        >
          <SearchIcon className="w-10 h-10 p-2 hover:cursor-pointer hover:bg-yellow-600 active:bg-yellow-700 rounded-r-md" />
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
