import React, { useEffect, useState } from "react";

const Pagination = ({
  productPerPage,
  totalProduct,
  currentPage,
  setCurrentPage,
}) => {
  const [firstPage, setFirstPage] = useState(false);
  const [lastPage, setLastPage] = useState(false);
  const totalPage = Math.ceil(totalProduct / productPerPage);

  const pageIndex = [];
  for (let i = 1; i <= totalPage; i++) {
    pageIndex.push(i);
  }

  useEffect(() => {
    switch (currentPage) {
      case 1:
        setFirstPage(true);
        break;
      case totalPage:
        setLastPage(true);
        break;
      default:
        setFirstPage(false);
        setLastPage(false);
    }
  }, [currentPage]);

  const currentPageBtn =
    "h-9 bg-white border border-amazon_orange text-amazon_orange rounded-sm font-extrabold focus:outline-none";

  const startNum =
    currentPage > totalPage - 1
      ? currentPage - 3
      : currentPage >= 2
      ? currentPage - 2
      : 0;
  const endNum = currentPage >= 2 ? currentPage + 1 : 3;

  const middleBtns = pageIndex
    .slice(startNum, endNum)
    .filter((item) => item !== 1 && item !== totalPage)
    .map((i) => (
      <button
        className={`
    ${i === currentPage ? currentPageBtn : "paginationBtn"} 
    w-9 mx-[2px] `}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    ));

  return (
    <div className="items-center justify-center hidden my-5 text-xs text-gray-700 sm:flex">
      <button
        className={`${
          firstPage ? "disabledPaginationBtn" : "paginationBtn"
        } w-20 mr-1`}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={firstPage}
      >
        Previous
      </button>
      {totalProduct && (
        <button
          className={`
          ${currentPage === 1 ? currentPageBtn : "paginationBtn"} 
          w-9 mx-[2px] `}
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>
      )}

      {currentPage > 3 ? (
        <button className="paginationBtn pointer-events-none w-9 mx-[2px]">
          ...
        </button>
      ) : null}

      {/* middle buttons */}
      {middleBtns}

      {currentPage < totalPage - 2 ? (
        <button className="paginationBtn pointer-events-none w-9 mx-[2px]">
          ...
        </button>
      ) : null}

      {totalProduct && (
        <button
          className={`
          ${
            currentPage === pageIndex.length ? currentPageBtn : "paginationBtn"
          } 
          w-9 mx-[2px] `}
          onClick={() => setCurrentPage(pageIndex.length)}
        >
          {pageIndex.length}
        </button>
      )}

      <button
        className={`${
          lastPage ? "disabledPaginationBtn" : "paginationBtn"
        } w-20 ml-1`}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={lastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
