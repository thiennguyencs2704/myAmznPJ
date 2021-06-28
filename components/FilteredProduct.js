import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import React from "react";

const FilteredProduct = React.forwardRef(({ filteredProduct }, ref) => {
  const { image, title, price, star } = filteredProduct;

  return (
    <div className="flex border-b border-gray-200 py-5 w-full justify-center">
      <div className="flex w-9/12">
        <div className="flex-shrink-0 mr-5">
          <Image src={image} width={200} height={200} objectFit="contain" />
        </div>

        <div className="ml-2 w-max text-xs sm:text-sm pt-3">
          <p className="text-base font-medium line-clamp-3 sm:text-lg mb-2">
            {title}
          </p>

          <div className="flex md:items-center">
            {[...Array(star)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
            ))}
          </div>

          <p className="text-green-600">In Stock</p>

          <div className="sm:flex items-center">
            <div className="flex items-center">
              <input type="checkbox" />
              <p className="mx-1">This is a gift</p>
            </div>
            <p className="text-blue-700">Learn more</p>
          </div>
          <div className="text-sm sm:text-base font-medium w-3/12">
            ${price}
          </div>
        </div>
      </div>
    </div>
  );
});

export default FilteredProduct;
