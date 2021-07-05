import Banner from "../components/Home/Banner";
import ProductList from "../components/Home/ProductList";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { getInitialProducts } from "../store/productSlice";
import HeadLayout from "../components/Layout/HeadLayout";
import { fetchUserProfile } from "../store/userActions";
import CategoryList from "../components/Home/CategoryList";

export const getStaticProps = async () => {
  const res = await Promise.all([
    fetch("https://my-amzn-web-default-rtdb.firebaseio.com/products.json"),
    fetch("https://my-amzn-web-default-rtdb.firebaseio.com/categories.json"),
    fetch("https://my-amzn-web-default-rtdb.firebaseio.com/browse.json"),
  ]);

  const productData = await res[0].json();
  const categoryData = await res[1].json();
  const browseData = await res[2].json();

  const products = productData.map((item) => {
    const starScore = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    const star = starScore(2, 6);
    return { ...item, itemQty: 1, star };
  });

  return {
    props: {
      myProducts: products,
      categories: categoryData,
      browse: browseData,
    },
    revalidate: 5,
  };
};

export default function Home({ myProducts, categories, browse }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialProducts(myProducts));
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(fetchUserProfile(userAuth.uid));
      }
    });
  }, []);

  return (
    <HeadLayout title="Amazon | Home">
      <div className="flex flex-col bg-gray-100 min-h-screen pb-10 mx-auto items-center">
        <main className="max-w-screen-2xl mx-auto md:mx-10">
          <Banner />
          <CategoryList categoryData={categories} browseData={browse} />
          <ProductList amaProducts={myProducts} />
        </main>
      </div>
    </HeadLayout>
  );
}
