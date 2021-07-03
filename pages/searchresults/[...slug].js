import HeadLayout from "../../components/Layout/HeadLayout";
import FilteredProductList from "../../components/Header/FilteredProductList";
import { useDispatch, useSelector } from "react-redux";

import {
  getProductResult,
  searchProducts,
  getProducts,
} from "../../store/productSlice";
import { useEffect } from "react";

export const getServerSideProps = async (context) => {
  const searchKeyword = context.query.slug[1];

  const res = await fetch(
    "https://my-amzn-web-default-rtdb.firebaseio.com/products.json"
  );
  const data = await res.json();

  const productData = data.map((item) => {
    const starScore = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    const star = starScore(2, 6);
    return { ...item, itemQty: 1, star };
  });

  return {
    props: {
      searchKeyword,
      myProducts: productData,
    },
  };
};

const SearchResults = ({ searchKeyword, myProducts }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(myProducts));
    dispatch(searchProducts(searchKeyword));
    dispatch(getProductResult());
  }, [searchKeyword]);

  const productResult = useSelector((state) => state.products.productResult);

  return (
    <HeadLayout title={`Amazon | ${searchKeyword}`}>
      <div className="min-h-screen">
        <FilteredProductList productResult={productResult} />
      </div>
    </HeadLayout>
  );
};

export default SearchResults;
