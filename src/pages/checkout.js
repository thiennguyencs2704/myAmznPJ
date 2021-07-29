import { useSelector } from "react-redux";
import CheckoutProductList from "../components/Checkout/CheckoutProductList";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import HeadLayout from "../components/Layout/HeadLayout";

const Checkout = () => {
  const { totalQty, totalAmt } = useSelector((state) => state.cart);

  return (
    <HeadLayout title="Amazon | Checkout">
      <div className="bg-gray-100">
        <div className="flex min-h-screen mx-auto max-w-screen-2xl ">
          <div className="grid w-full grid-cols-1 px-4 pb-10 bg-gray-100 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col p-4 mt-6 bg-white md:col-span-2 md:mr-3 lg:col-span-3 lg:mr-4">
              <div className="relative pb-5 border-b border-gray-200">
                <h1 className="text-xl font-medium sm:text-2xl">
                  Shopping Cart
                </h1>
                <p className="text-xs text-blue-700 sm:text-sm">
                  Deselect all items
                </p>
                <p className="absolute right-0 text-xs text-gray-600 sm:text-sm">
                  Price
                </p>
              </div>

              <div className="my-4 border-b border-gray-200 ">
                {totalQty === 0 ? (
                  <div className="mb-4">
                    <ShoppingCartIcon className="w-12 h-12" />
                    <p>Your Amazon Cart is empty</p>
                    <Link href="/">
                      <a className="text-xs text-blue-800">
                        See recommendations
                      </a>
                    </Link>
                  </div>
                ) : (
                  <CheckoutProductList />
                )}
              </div>

              <div className="flex justify-end text-sm sm:text-lg">
                {totalQty === 0 ? null : (
                  <p>
                    Subtotal (
                    {totalQty === 1 ? `${totalQty} item` : `${totalQty} items`}
                    ):{"  "}
                    <span className="text-sm font-medium sm:text-lg">
                      ${totalAmt}
                    </span>
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col p-3 mt-3 bg-white h-36 whitespace-nowrap">
              <p className="mr-12 text-base sm:text-base md:text-base">
                Subtotal (
                {totalQty === 1 ? `${totalQty} item` : `${totalQty} items`}
                ):{" "}
                <span className="text-sm font-medium sm:text-base">
                  ${totalAmt}
                </span>
              </p>

              <div className="flex items-center text-sm">
                <input className="h-3" type="checkbox" />
                <p className="ml-1">This order contains a gift</p>
              </div>

              <div className="flex items-center mt-7 md:mx-3">
                <button className="flex items-center justify-center h-full text-xs font-medium text-gray-800 button span sm:text-sm">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeadLayout>
  );
};

export default Checkout;
