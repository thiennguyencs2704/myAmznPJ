import React from "react";
import Link from "next/link";

const SuggestionProducts = ({
  productSuggestion,
  handlerBlurInput,
  setSearchSuggestion,
}) => {
  return (
    <div className="absolute w-full text-sm text-black bg-white border-b border-l border-r border-gray-200 rounded-b-sm shadow-md">
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
              className="px-3 py-1 line-clamp-1 hover:bg-gray-100"
            >
              {product.title}
            </a>
          </Link>
        ))
        .slice(0, 6)}
    </div>
  );
};

export default SuggestionProducts;
