import HeadLayout from "../../components/HeadLayout";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

export const getServerSideProps = async (context) => {
  return {
    props: {
      productDetail: context.query,
    },
  };
};

const ProductDetail = ({ productDetail }) => {
  const { id, title, category, description, price, star, detailImg } =
    productDetail;

  const review = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min).toLocaleString(
      "de-DE"
    );
  };
  console.log(review(3000, 10000));
  return (
    <HeadLayout title={`Amazon | ${title}`}>
      <div className="flex justify-center my-5 space-x-6 md:space-x-10 min-h-screen">
        <div className="mt-8">
          <Image src={detailImg} width={500} height={500} objectFit="contain" />
        </div>
        <div className="flex flex-col text-sm md:text-base w-1/2 mx-auto">
          <h1 className="text-xl font-medium mb-3 mt-8">{title}</h1>
          <p className="text-blue-700 font-medium">Visit the Store</p>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex">
              {[...Array(star)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
              ))}
            </div>
            <p className="md:ml-2 text-blue-700 font-normal">
              {review(3000, 10000)} ratings
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
