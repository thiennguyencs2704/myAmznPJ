import Image from "next/image";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";
import { addCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import React from "react";
import Link from "next/link";

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
    <div className="relative flex flex-col bg-white mx-5 p-10 rounded-lg text-base max-h-full">
      <div className="space-y-3 mb-5">
        <p className="absolute text-sm top-2 right-2 italic text-gray-400">
          {category}
        </p>

        <Link
          key={id}
          href="/productdetail/[...slug]"
          as={`/productdetail/${id}/${title.replace(/ /g, "-")}`}
        >
          <a>
            <div className="text-center">
              <Image src={image} width={150} height={150} objectFit="contain" />
            </div>

            <h4 className="mt-2 pt-2 line-clamp-3 hover:text-blue-700">
              {title}
            </h4>
          </a>
        </Link>
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
