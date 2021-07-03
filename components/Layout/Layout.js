import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchInitialProducts } from "../../store/productActions";

const Layout = ({ children }) => {
  const router = useRouter();

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchInitialProducts());
  //   console.log("Fetch pridcut first load");
  // }, []);

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
