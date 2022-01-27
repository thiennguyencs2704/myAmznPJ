import Banner from "../components/Home/Banner";
import ProductList from "../components/Home/ProductList";
import HeadLayout from "../components/Layout/HeadLayout";
import CategoryList from "../components/Home/CategoryList";
import axios from "axios";
import { SharingModal } from "../components/Modals/SharingModal";
import { useEffect, useState } from "react";

export const getStaticProps = async () => {
  const URLs = ["/products.json", "/categories.json", "/browse.json"];

  const data = [];
  for (const url of URLs) {
    const res = await axios.get(url);
    const subData = res.data;

    //For handling catch error
    if (!subData) {
      return {
        notFound: true,
      };
    }

    data.push(subData);
  }

  const [productData, categoryData, browseData] = data;

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
  // const getResult = (x, time) => {
  //   return function () {
  //     return new Promise((resolve, reject) => {
  //       if (x >= 0) {
  //         setTimeout(() => {
  //           resolve(x);
  //         }, time);
  //       } else {
  //         reject("Failed");
  //       }
  //     });
  //   };
  // };

  // const api = getResult(1, 1000);
  // const api2 = getResult(2, 1000);

  // const api3 = getResult(3, 1000);

  // const printResults = async () => {
  //   try {
  //     const result = await api();
  //     console.log("result: ", result);

  //     const result2 = await api2();
  //     console.log("result2: ", result2);

  //     const result3 = await api3();
  //     console.log("result3: ", result3);
  //   } catch (err) {
  //     console.log("error: ", err);
  //   }
  // };

  // printResults();

  const [metaTags, setMetaTags] = useState({});
  console.log("check URL", process.env.NEXT_PREVIEW_URL);
  const handleFacebookMeta = () => {
    setMetaTags({
      "og:image":
        "https://cdn-images.earthtoday.com/eyJrZXkiOiIvdXNlcnMvMjAzNDE4ODc5NTQ3NzI1NDE0NC9saW5rcy8xOTMwOTU3MDQ2NjI4MDU3MDg4LzQwMDYxZDJmLTllOTEtNDU5OS04OTQ5LWYxNjlkNTFjZTM2Ny1hYm91dGVhcnRodG9kYXkucG5nIiwiYnVja2V0IjoiZWFydGh0b2RheS1wcm9kLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODQwfX19",
      "fb:app_id": "356721174733993",
      "og:type": "website",
      "og:site_name": "EarthToday",
      "og:title": "FACEBOOKKKKKKK",
      "og:url": `${"https://www.google.com/"} `,
      "og:description": "What’s happening on EarthToday",
    });
  };

  const handleTwitterMeta = () => {
    setMetaTags({
      "og:image":
        "https://cdn-images.earthtoday.com/eyJrZXkiOiIvdXNlcnMvMTk0MTE4NjAxNzc1NTI3MTE2OC9saW5rcy8xOTMwOTU1NDk1NzQ4MTk0MzA0LzRlYWEyMGQ1LTRiZDQtNDMyYi1iZjU2LWU0ZTgzMDgyMTM4MS11b24tbTItMS5wbmciLCJidWNrZXQiOiJlYXJ0aHRvZGF5LXByb2QtaW1hZ2VzIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4NDB9fX0=",
      "fb:app_id": "356721174733993",
      "og:type": "website",
      "og:site_name": "EarthToday",
      "og:title": "TWITTERRRRRRRR",
      "og:url": `${"https://myamznsite.vercel.app/"}`,
      "og:description": "What’s happening on EarthToday",
    });
  };

  useEffect(() => {
    console.log("META TAGGGGGGGGG", metaTags);
  }, metaTags);

  return (
    <HeadLayout title="Amazon | Home" metaTags={metaTags}>
      <div className="flex flex-col items-center min-h-screen pb-10 mx-auto bg-gray-100">
        <main className="mx-auto max-w-screen-2xl md:mx-10">
          <Banner />
          <CategoryList categoryData={categories} browseData={browse} />
          <ProductList amaProducts={myProducts} />
          <SharingModal
            handleFacebookMeta={handleFacebookMeta}
            handleTwitterMeta={handleTwitterMeta}
          />
          {/* <button className="w-10 h-10 bg-yellow-300"> Share </button> */}
        </main>
      </div>
    </HeadLayout>
  );
}
