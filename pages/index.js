import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import HeadLayout from "../components/HeadLayout";
import { fetchUserProfile, fetchProducts } from "../store/cartActions";

export const getServerSideProps = async () => {
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
      myProducts: productData,
    },
  };
};
export default function Home({ myProducts }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(myProducts));
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
          <ProductList amaProducts={myProducts} />
        </main>
      </div>
    </HeadLayout>
  );
}
