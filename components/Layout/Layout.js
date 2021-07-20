import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchInitialProducts } from "../../store/productActions";

const Layout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  //For getting the screen of the user's device
  const [screenWidth, setScreenWidth] = useState("");
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  // For getting the initialProduct into Redux if user goes to page directly in the first loading without calling API
  const initialProduct = useSelector((state) => state.products.amznProducts);
  const routerGetInitialProductItself = [
    "/",
    "/searchresults/[...slug]",
    "/nav/bestsellers",
  ];

  useEffect(() => {
    if (
      !routerGetInitialProductItself.includes(router.pathname) &&
      initialProduct.length === 0
    ) {
      dispatch(fetchInitialProducts());
    }
  }, []);

  return (
    <>
      {router.pathname !== "/auth/signin" &&
      router.pathname !== "/auth/signup" ? (
        <Header screenWidth={screenWidth} />
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
