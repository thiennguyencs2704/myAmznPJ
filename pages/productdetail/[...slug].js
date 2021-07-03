import HeadLayout from "../../components/Layout/HeadLayout";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://my-amzn-web-default-rtdb.firebaseio.com/products.json`
  );
  const data = await res.json();
  const paths = data.map((product) => {
    return {
      params: {
        slug: [product.id.toString(), product.title.replace(/ /g, "-")],
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  // console.log("Props", context.params.slug[0]);
  const productId = Number(context.params.slug[0]) - 1;
  const res = await fetch(
    `https://my-amzn-web-default-rtdb.firebaseio.com/products/${productId}.json`
  );
  const productObj = await res.json();

  const review = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min).toLocaleString(
      "de-DE"
    );
  };
  const reviewNumber = review(3000, 10000);
  return {
    props: {
      productDetail: { ...productObj, reviewNumber },
    },
  };
};

const ProductDetail = ({ productDetail }) => {
  const {
    id,
    title,
    category,
    description,
    price,
    star,
    detailImg,
    reviewNumber,
  } = productDetail;

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading product ... Wait for a second!</div>;
  }

  return (
    <HeadLayout title={`Amazon | ${title}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center my-5 space-x-6 md:space-x-10 min-h-screen">
        <div className="md:col-span-1 md:pl-10 lg:mr-10 mx-auto mt-5 xl:mr-20">
          <Image src={detailImg} width={400} height={400} objectFit="contain" />
        </div>
        <div className="flex flex-col text-sm md:text-base xl:w-2/3 md:w-4/5 mx-auto pr-5">
          <h1 className="text-xl font-medium mb-3 mt-8">{title}</h1>
          <p className="text-blue-700 font-medium">Visit the Store</p>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex">
              {[...Array(star)].map((_) => (
                <StarIcon key={id} className="w-5 h-5 text-yellow-500" />
              ))}
            </div>
            <p className="md:ml-2 text-blue-700 text-xs font-normal">
              {reviewNumber} ratings
            </p>
          </div>
          <p>
            <span className="font-medium">Price:</span> ${price}
          </p>
          <div className="mt-2">
            <p className="text-sm font-medium">About this item:</p>
            <p className="text-xs">{description}</p>
          </div>
        </div>
      </div>
    </HeadLayout>
  );
};

export default ProductDetail;
