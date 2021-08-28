import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const router = useRouter();

  //For getting the screen of the user's device
  const [screenWidth, setScreenWidth] = useState("");
  useEffect(() => {
    setScreenWidth(window.innerWidth);
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
