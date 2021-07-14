import Image from "next/image";
import React from "react";
import BestSellerProduct from "./BestSellerProduct";

const BestSellerList = ({ productsCurrentPage }) => {
  return (
    <div>
      <p className="text-[21px] pl-5 sm:py-5 py-3 font-bold border-b border-gray-200">
        Best Seller Products
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsCurrentPage.map((prod) => (
          <BestSellerProduct bestSellerProduct={prod} />
        ))}
      </div>
    </div>
  );
};

export default BestSellerList;
