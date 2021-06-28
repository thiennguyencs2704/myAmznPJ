import HeadLayout from "../../components/HeadLayout";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

export const getServerSideProps = async (context) => {
  // console.log("Object testing", context.query);

  const productObj = JSON.parse(context.query.productData);
  // console.log("Data looks like", JSON.parse(data));
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
  // console.log("Teting", productDetail);

  return (
    <HeadLayout title={`Amazon | ${title}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center my-5 space-x-6 md:space-x-10 min-h-screen">
        <div className="md:col-span-1 mx-auto mt-5 md:mr-20">
          <Image src={detailImg} width={400} height={400} objectFit="contain" />
        </div>

        <div className="flex flex-col text-sm md:text-base md:w-2/3 mx-auto">
          <h1 className="text-xl font-medium mb-3 mt-8">{title}</h1>
          <p className="text-blue-700 font-medium">Visit the Store</p>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex">
              {[...Array(star)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
              ))}
            </div>
            <p className="md:ml-2 text-blue-700 font-normal">
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
