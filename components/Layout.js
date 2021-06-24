import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

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
