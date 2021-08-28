import Image from "next/image";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";
import { addCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import React from "react";
import DetailProductLink from "../Link/DetailProductLink";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { id, category, image, title, description, price, star } = product;

  const handlerAddCart = () => {
    dispatch(
      addCart({
        ...product,
      })
    );
  };

  return (
    <div className="relative flex flex-col max-h-full p-10 mx-5 text-base bg-white rounded-lg">
      <div className="mb-5 space-y-3 bg-">
        <p className="absolute text-sm italic text-gray-400 top-2 right-2">
          {category}
        </p>

        <DetailProductLink id={id} title={title}>
          <div className="text-center">
            <Image src={image} width={150} height={150} objectFit="contain" />
          </div>

          <h4 className="pt-2 mt-2 line-clamp-3 hover:text-blue-700">
            {title}
          </h4>
        </DetailProductLink>

        <div className="flex">
          {[...Array(star)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
          ))}
        </div>
        <p className="text-xs line-clamp-3">{description}</p>
        <div>
          <Currency quantity={price} currency="USD" decimal="." />
        </div>
        {Math.random() > 0.5 && (
          <div className="flex items-center">
            <Image src="/Prime-tag-.png" width={50} height={50} />
            <p className="m-1 text-xs text-gray-600 whitespace-nowrap">
              FREE Next-Day Delivery
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center mt-auto">
        <button onClick={handlerAddCart} className="text-xs button span">
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
