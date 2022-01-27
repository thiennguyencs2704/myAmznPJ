import Banner from "../components/Home/Banner";
import ProductList from "../components/Home/ProductList";
import HeadLayout from "../components/Layout/HeadLayout";
import CategoryList from "../components/Home/CategoryList";
import axios from "axios";

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
  return (
    <HeadLayout title="Amazon | Home">
      <div className="flex flex-col items-center min-h-screen pb-10 mx-auto bg-gray-100">
        <main className="mx-auto max-w-screen-2xl md:mx-10">
          <Banner />
          <CategoryList categoryData={categories} browseData={browse} />
          <ProductList amaProducts={myProducts} />
        </main>
      </div>
    </HeadLayout>
  );
}
