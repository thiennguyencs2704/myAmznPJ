import Head from "next/head";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { signin, signout } from "../store/userSlice";

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://my-amzn-web-default-rtdb.firebaseio.com/products.json"
  );
  const data = await res.json();
  const productData = data.map((item) => {
    return { ...item, itemQty: 1 };
  });

  return {
    props: {
      products: productData,
    },
  };
};

export default function Home({ products }) {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          signin({
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
      } else {
        dispatch(signout());
      }
    });
  });
  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <Head>
        <title>Amazon | Home</title>
        <link rel="icon" href="/8364-amazon_102478.png" />
      </Head>

      <main className="max-w-screen-2xl mx-auto md:mx-10">
        <Banner />
        <ProductList products={products} />
      </main>
    </div>
  );
}
