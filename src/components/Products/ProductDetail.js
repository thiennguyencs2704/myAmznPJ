import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

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

  return (
    <div className="grid justify-center min-h-screen grid-cols-1 my-5 space-x-6 md:grid-cols-2 md:space-x-10">
      <div className="mx-auto mt-5 md:col-span-1 md:pl-10 lg:mr-10 xl:mr-20">
        <Image src={detailImg} width={400} height={400} objectFit="contain" />
      </div>
      <div className="flex flex-col pr-5 mx-auto text-sm md:text-base xl:w-2/3 md:w-4/5">
        <h1 className="mt-8 mb-3 text-xl font-medium">{title}</h1>
        <p className="font-medium text-blue-700">Visit the Store</p>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex">
            {[...Array(star)].map((_) => (
              <StarIcon key={id} className="w-5 h-5 text-yellow-500" />
            ))}
          </div>
          <p className="text-xs font-normal text-blue-700 md:ml-2">
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
  );
};

export default ProductDetail;
