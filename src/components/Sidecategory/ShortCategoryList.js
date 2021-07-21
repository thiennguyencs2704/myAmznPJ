import React from "react";

const ShortCategoryList = ({ categories }) => {
  return (
    <div className="w-full sm:w-[200px] sm:border-r border-gray-200 pl-5 sm:pt-3 py-2 sm:py-0 bg-gray-300 sm:bg-white">
      <h3 className="text-base font-bold">Any Category</h3>
      <div className="hidden ml-4 sm:block">
        {categories.map((item) => (
          <p className="text-sm capitalize">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ShortCategoryList;
