import Image from "next/image";
import React from "react";

const BestSellerProduct = ({ bestSellerProduct }) => {
  const { rank, image, title, price } = bestSellerProduct;

  return (
    <div className="flex flex-col p-5 pt-0 border-b border-gray-200 sm:border-l-0 sm:border-t-0 sm:border">
      <div className="flex -ml-5 overflow-hidden h-6 items-center">
        <p className="bg-amazon_orange py-1 text-white pl-1 text-sm font-medium w-6 z-20">
          #{rank}
        </p>
        <p className="bg-amazon_orange rotate-12 h-20 transform origin-top-right w-6 z-10"></p>
      </div>

      <div className="text-center pt-5 my-3">
        <Image src={image} width={200} height={200} objectFit="contain" />
      </div>

      <div className="pb-5">
        <h1 className="text-blue-700 text-sm line-clamp-2">{title}</h1>
        <p className="text-red-700 text-sm">${price}</p>
      </div>
    </div>
  );
};

export default BestSellerProduct;
