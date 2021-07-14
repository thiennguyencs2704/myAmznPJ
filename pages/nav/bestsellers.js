import { useEffect, useState } from "react";
import useSWR from "swr";
import HeadLayout from "../../components/Layout/HeadLayout";
import Pagination from "../../components/Pagination/Pagination";
import BestSellerList from "../../components/Products/BestSellerList";
import ShortCategoryList from "../../components/Sidecategory/ShortCategoryList";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const BestSellers = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(4);

  useEffect(() => {
    setMounted(true);
  }, []);

  const url = "https://my-amzn-web-default-rtdb.firebaseio.com/products.json";
  const { data, error } = useSWR(mounted ? url : null, fetcher);

  if (error) return <div>Fail to fetch</div>;
  if (!data) return <div>Loading...!</div>;

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const productsCurrentPage = data
    .sort(function (a, b) {
      return a.rank - b.rank;
    })
    .slice(indexOfFirstProduct, indexOfLastProduct);

  const categories = [...new Set(data.map((prod) => prod.category))];

  return (
    <HeadLayout title="Amazon | Best Sellers">
      <div className="h-[140px] bg-gradient-to-t from-amazon_blue_banner via-amazon_blue_banner-light to-amazon_blue_banner text-white text-center w-full">
        <p className="text-[40px] md:text-[60px] pt-3 md:pt-0">
          Amazon Best Sellers
        </p>
        <p className="text-[14px] md:text-[16px]">
          Our most popular products based on sales. Updated hourly!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row max-w-screen-2xl">
        <ShortCategoryList categories={categories} />

        <div className="min-h-screen mx-auto flex-1">
          <BestSellerList productsCurrentPage={productsCurrentPage} />

          <Pagination
            totalProduct={data.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            productPerPage={productPerPage}
          />
        </div>
      </div>
    </HeadLayout>
  );
};

export default BestSellers;
