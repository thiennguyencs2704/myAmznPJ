import Image from "next/image";
import React from "react";

const BestSellerProduct = ({ bestSellerProduct }) => {
  const { rank, image, title, price } = bestSellerProduct;

  return (
    <div className="flex flex-col p-5 pt-0 border-b border-gray-200 sm:border-l-0 sm:border-t-0 sm:border">
      <div className="flex items-center h-6 -ml-5 overflow-hidden">
        <p className="z-20 w-6 py-1 pl-1 text-sm font-medium text-white bg-amazon_orange">
          #{rank}
        </p>
        <p className="z-10 w-6 h-20 origin-top-right transform bg-amazon_orange rotate-12"></p>
      </div>

      <div className="pt-5 my-3 text-center">
        <Image src={image} width={200} height={200} objectFit="contain" />
      </div>

      <div className="pb-5">
        <h1 className="text-sm text-blue-700 line-clamp-2">{title}</h1>
        <p className="text-sm text-red-700">${price}</p>
      </div>
    </div>
  );
};

export default BestSellerProduct;
