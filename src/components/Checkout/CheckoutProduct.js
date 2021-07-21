import Image from "next/image";
import {
  addCart,
  removeCart,
  changeCart,
  changeItemQty,
} from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({ product }) => {
  const { image, title, itemQty, price } = product;
  const dispatch = useDispatch();

  const handlerAddCart = () => {
    dispatch(addCart({ ...product }));
  };

  const handlerRemoveCart = () => {
    dispatch(
      removeCart({
        ...product,
      })
    );
  };

  const handlerChangeItemQty = (e) => {
    dispatch(
      changeItemQty({
        ...product,
        itemQty: Number(e.target.value),
      })
    );
  };

  const handlerChangeCart = (e) => {
    dispatch(
      changeCart({
        ...product,
        itemQty: Number(e.target.value),
      })
    );
  };

  return (
    <div className="flex justify-between py-5 -mt-2 border-b border-gray-200">
      <div className="flex w-9/12">
        <div className="flex-shrink-0">
          <Image src={image} width={120} height={120} objectFit="contain" />
        </div>

        <div className="ml-2 text-xs w-max sm:text-sm">
          <p className="mb-2 text-sm font-medium sm:text-base line-clamp-3">
            {title}
          </p>
          <p className="text-green-600">In Stock</p>

          <div className="items-center sm:flex">
            <div className="flex items-center">
              <input type="checkbox" />
              <p className="mx-1">This is a gift</p>
            </div>
            <p className="text-blue-700">Learn more</p>
          </div>

          <div className="flex justify-start mt-1 appearance-none">
            <button
              onClick={handlerRemoveCart}
              className="bg-gray-300 h-7 w-7 rounded-l-md"
            >
              -
            </button>
            <input
              className="w-8 text-center border border-gray-200 removeInputWebkit"
              type="text"
              inputMode="numeric"
              value={`${itemQty}`}
              onChange={handlerChangeItemQty}
              onBlur={handlerChangeCart}
            ></input>
            <button
              onClick={handlerAddCart}
              className="bg-gray-300 h-7 w-7 rounded-r-md"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="w-3/12 text-sm font-medium text-right sm:text-base">
        {price}
      </div>
    </div>
  );
};

export default CheckoutProduct;
