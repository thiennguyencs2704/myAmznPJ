import HeadLayout from "../../components/Layout/HeadLayout";
import FilteredProductList from "../../components/Header/SearchBar/FilteredProductList";
import { useDispatch, useSelector } from "react-redux";

import {
  getProductResult,
  searchProducts,
  getInitialProducts,
} from "../../store/productSlice";
import { useEffect } from "react";
import axios from "axios";
import { SharingModal } from "../../components/Modals/SharingModal";

export const getServerSideProps = async (context) => {
  const searchKeyword = context.query.slug[0].slice(15);
  console.log("check context", context.query);

  let metaTags = {};
  if (context.query.channel === "facebook") {
    metaTags = {
      "og:image":
        "https://cdn-images.earthtoday.com/eyJrZXkiOiIvdXNlcnMvMjAzNDE4ODc5NTQ3NzI1NDE0NC9saW5rcy8xOTMwOTU3MDQ2NjI4MDU3MDg4LzQwMDYxZDJmLTllOTEtNDU5OS04OTQ5LWYxNjlkNTFjZTM2Ny1hYm91dGVhcnRodG9kYXkucG5nIiwiYnVja2V0IjoiZWFydGh0b2RheS1wcm9kLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODQwfX19",
      "fb:app_id": "356721174733993",
      "og:type": "website",
      "og:site_name": "EarthToday",
      "og:title": "FACEBOOKKKKKKK",
      "og:url": `${"https://www.google.com/"} `,
      "og:description": "What’s happening on EarthToday",
    };
  }

  if (context.query.channel === "twitter") {
    metaTags = {
      "og:image":
        "https://cdn-images.earthtoday.com/eyJrZXkiOiIvdXNlcnMvMTk0MTE4NjAxNzc1NTI3MTE2OC9saW5rcy8xOTMwOTU1NDk1NzQ4MTk0MzA0LzRlYWEyMGQ1LTRiZDQtNDMyYi1iZjU2LWU0ZTgzMDgyMTM4MS11b24tbTItMS5wbmciLCJidWNrZXQiOiJlYXJ0aHRvZGF5LXByb2QtaW1hZ2VzIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4NDB9fX0=",
      "fb:app_id": "356721174733993",
      "og:type": "website",
      "og:site_name": "EarthToday",
      "og:title": "FACEBOOKKKKKKK",
      "og:url": `${"https://www.google.com/"} `,
      "og:description": "What’s happening on EarthToday",
      "twitter:image":
        "https://cdn-images.earthtoday.com/eyJrZXkiOiIvdXNlcnMvMTk0MTE4NjAxNzc1NTI3MTE2OC9saW5rcy8xOTMwOTU1NDk1NzQ4MTk0MzA0LzRlYWEyMGQ1LTRiZDQtNDMyYi1iZjU2LWU0ZTgzMDgyMTM4MS11b24tbTItMS5wbmciLCJidWNrZXQiOiJlYXJ0aHRvZGF5LXByb2QtaW1hZ2VzIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4NDB9fX0=",
      "twitter:type": "website",
      "twitter:site_name": "EarthToday",
      "twitter:title": "TWITTERRRRRRRR",
      "twitter:url": `${"https://myamznsite.vercel.app/"}`,
      "twitter:description": "What’s happening on EarthToday",
    };
  }

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
      metaTags,
    },
  };
};

const SearchResults = ({ searchKeyword, myProducts, metaTags }) => {
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
    <HeadLayout title={`Amazon | ${searchKeyword}`} metaTags={metaTags}>
      <div className="min-h-screen mx-auto max-w-screen-2xl">
        <FilteredProductList productResult={productResult} />
      </div>
      <SharingModal />
    </HeadLayout>
  );
};

export default SearchResults;
