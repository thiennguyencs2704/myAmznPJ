import HeadLayout from "../../components/Layout/HeadLayout";
import FilteredProductList from "../../components/Header/FilteredProductList";
import { useDispatch, useSelector } from "react-redux";

import {
  getProductResult,
  searchProducts,
  getInitialProducts,
} from "../../store/productSlice";
import { useEffect } from "react";
import axios from "axios";

export const getServerSideProps = async (context) => {
  const searchKeyword = context.query.slug[0].slice(15);

  const res = await axios("/products.json");
  const data = res.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

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
  const productSlice = useSelector((state) => state.products);

  useEffect(() => {
    if (productSlice.amznProducts.length === 0) {
      dispatch(getInitialProducts(myProducts));
      dispatch(searchProducts(searchKeyword));
    }

    dispatch(getProductResult());
  }, [searchKeyword]);

  const productResult = productSlice.productResult;

  return (
    <HeadLayout title={`Amazon | ${searchKeyword}`}>
      <div className="min-h-screen mx-auto max-w-screen-2xl">
        <FilteredProductList productResult={productResult} />
      </div>
    </HeadLayout>
  );
};

export default SearchResults;
