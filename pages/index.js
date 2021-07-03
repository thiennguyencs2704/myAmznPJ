import Banner from "../components/Home/Banner";
import ProductList from "../components/Home/ProductList";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/productSlice";
import HeadLayout from "../components/Layout/HeadLayout";
import { fetchUserProfile } from "../store/userActions";

export const getStaticProps = async () => {
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
    revalidate: 5,
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
