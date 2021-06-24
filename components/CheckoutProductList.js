import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";

const CheckoutProductList = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
      {cart.map((item) => (
        <CheckoutProduct key={item.id} product={item} />
      ))}
    </div>
  );
};

export default CheckoutProductList;
