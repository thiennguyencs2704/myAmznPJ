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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 pb-10  w-full bg-gray-100">
            <div className="md:col-span-2 md:mr-3 lg:col-span-3 lg:mr-4 flex flex-col bg-white mt-6 p-4">
              <div className="relative border-b border-gray-200 pb-5">
                <h1 className="text-xl sm:text-2xl font-medium">
                  Shopping Cart
                </h1>
                <p className="text-xs sm:text-sm text-blue-700">
                  Deselect all items
                </p>
                <p className="absolute right-0 text-xs sm:text-sm text-gray-600">
                  Price
                </p>
              </div>

              <div className="border-b border-gray-200 my-4 ">
                {totalQty === 0 ? (
                  <div className="mb-4">
                    <ShoppingCartIcon className="h-12 w-12" />
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
                    <span className="text-sm sm:text-lg font-medium">
                      ${totalAmt}
                    </span>
                  </p>
                )}
              </div>
            </div>

            <div className="h-36 flex flex-col bg-white p-3 mt-3 whitespace-nowrap">
              <p className="text-base sm:text-base md:text-base mr-12">
                Subtotal (
                {totalQty === 1 ? `${totalQty} item` : `${totalQty} items`}
                ):{" "}
                <span className="text-sm sm:text-base font-medium">
                  ${totalAmt}
                </span>
              </p>

              <div className="flex items-center text-sm">
                <input className="h-3" type="checkbox" />
                <p className="ml-1">This order contains a gift</p>
              </div>

              <span className="span my-auto mx-5 h-8">
                <button className="button flex items-center justify-center text-xs sm:text-sm lg:text-base h-full">
                  Proceed to checkout
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </HeadLayout>
  );
};

export default Checkout;
