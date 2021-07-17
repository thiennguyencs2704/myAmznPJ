import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import Link from "next/link";

const FilteredProduct = ({ filteredProduct }) => {
  const { id, image, title, price, star } = filteredProduct;

  return (
    <div className="flex border-b border-gray-200 py-5 w-full justify-center">
      <div className="flex w-9/12">
        <Link
          key={id}
          href="/productdetail/[...slug]"
          as={`/productdetail/${id}/${title
            .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
            .replace(/  /g, "-")
            .replace(/ /g, "-")}`}
        >
          <a className="flex-shrink-0 mr-5">
            <Image src={image} width={200} height={200} objectFit="contain" />
          </a>
        </Link>

        <div className="ml-2 w-max text-xs sm:text-sm pt-3">
          <Link
            key={id}
            href="/productdetail/[...slug]"
            as={`/productdetail/${id}/${title
              .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
              .replace(/  /g, "-")
              .replace(/ /g, "-")}`}
          >
            <a className="text-base font-medium line-clamp-3 sm:text-lg mb-2 hover:text-blue-700">
              {title}
            </a>
          </Link>

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
};

export default FilteredProduct;
