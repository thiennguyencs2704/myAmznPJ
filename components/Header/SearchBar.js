import {
  getProductResult,
  searchProducts,
  clearProductSuggestion,
} from "../../store/productSlice";
import { SearchIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

const SearchBar = ({ mobileMode }) => {
  const productSuggestion = useSelector(
    (state) => state.products.productSuggestion
  );

  const router = useRouter();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState(false);

  const handlerBlurInput = () => {
    document.getElementById("searchInput").blur();
  };

  const handlerSearchChange = (e) => {
    setSearch(e.target.value);
    dispatch(searchProducts(e.target.value.toLowerCase()));
  };

  const handlerGetProductResult = () => {
    dispatch(getProductResult());
  };

  useEffect(() => {
    setSearch("");
    dispatch(clearProductSuggestion());
  }, [router.pathname]);

  return (
    <div
      className={`${
        mobileMode ? "hidden md:flex flex-grow" : "md:hidden flex flex-grow"
      } items-center h-10 bg-yellow-500 rounded-md`}
    >
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
          href={{
            pathname: "/searchresults/[search]",
            query: {
              search: search,
            },
          }}
          as={`/search?keyword=${search}`}
        >
          <SearchIcon
            onClick={handlerGetProductResult}
            className="h-10 w-10 p-2 hover:cursor-pointer hover:bg-yellow-600 active:bg-yellow-700 rounded-r-md"
          />
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
