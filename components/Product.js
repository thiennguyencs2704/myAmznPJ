import { useState } from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";
import { addCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { id, category, image, title, description, price, itemQty } = product;

  const starScore = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const [star] = useState(starScore(1, 6));

  const handlerAddCart = () => {
    dispatch(
      addCart({
        cart: {
          ...product,
        },
      })
    );
  };

  return (
    <div className="relative flex flex-col bg-white m-5 p-10 rounded-lg text-base z-30">
      <div className="space-y-3 mb-3">
        <p className="absolute text-sm top-2 right-2 italic text-gray-400">
          {category}
        </p>
        <div className="text-center">
          <Image src={image} width={150} height={150} objectFit="contain" />
        </div>

        <h4 className="mt-2 pt-2 line-clamp-3">{title}</h4>
        <div className="flex">
          {[...Array(star)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
          ))}
        </div>
        <p className="line-clamp-3 text-xs">{description}</p>
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

      <span className="span text-center mt-auto">
        <button onClick={handlerAddCart} className="button">
          Add to Basket
        </button>
      </span>
    </div>
  );
};

export default Product;
