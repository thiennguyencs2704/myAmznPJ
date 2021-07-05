import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchInitialProducts } from "../../store/productActions";

const Layout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const initialProduct = useSelector((state) => state.products.amznProducts);

  useEffect(() => {
    if (
      initialProduct.length === 0 &&
      router.pathname !== "/" &&
      router.pathname !== "/searchresults/[...slug]"
    ) {
      dispatch(fetchInitialProducts());
    }
  }, []);

  return (
    <>
      {router.pathname !== "/auth/signin" &&
      router.pathname !== "/auth/signup" ? (
        <Header />
      ) : null}

      {children}

      {router.pathname !== "/auth/signin" &&
      router.pathname !== "/auth/signup" ? (
        <Footer />
      ) : null}
    </>
  );
};

export default Layout;
