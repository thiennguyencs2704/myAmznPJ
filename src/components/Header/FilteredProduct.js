import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import React from "react";

import DetailProductLink from "../Link/DetailProductLink";

const FilteredProduct = ({ filteredProduct }) => {
  const { id, image, title, price, star } = filteredProduct;

  return (
    <div className="flex justify-center w-full py-5 border-b border-gray-200">
      <div className="flex w-9/12">
        <DetailProductLink
          id={id}
          title={title}
          styleATag={"flex-shrink-0 mr-5"}
        >
          <Image src={image} width={200} height={200} objectFit="contain" />
        </DetailProductLink>

        <div className="pt-3 ml-2 text-xs w-max sm:text-sm">
          <DetailProductLink
            id={id}
            title={title}
            styleATag={
              "mb-2 text-base font-medium line-clamp-3 sm:text-lg hover:text-blue-700"
            }
          >
            {title}
          </DetailProductLink>

          <div className="flex md:items-center">
            {[...Array(star)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
            ))}
          </div>

          <p className="text-green-600">In Stock</p>

          <div className="items-center sm:flex">
            <div className="flex items-center">
              <input type="checkbox" />
              <p className="mx-1">This is a gift</p>
            </div>
            <p className="text-blue-700">Learn more</p>
          </div>
          <div className="w-3/12 text-sm font-medium sm:text-base">
            ${price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteredProduct;
