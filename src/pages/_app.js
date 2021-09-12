import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { SWRConfig } from "swr";
import { store } from "../store/index";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { fetchInitialProducts } from "../store/productActions";
import { fetchUserProfile } from "../store/userActions";
import { auth } from "../../firebase";

axios.defaults.baseURL = "https://my-amzn-web-default-rtdb.firebaseio.com";

const fetcher = async (...args) => {
  const res = await axios.get(...args);
  return res.data;
};

const MyApp = ({ Component, pageProps }) => {
  // fetch initialData to redux store
  useEffect(() => {
    store.dispatch(fetchInitialProducts());
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        store.dispatch(fetchUserProfile(userAuth.uid));
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <SWRConfig value={{ fetcher, dedupingInterval: 600000 }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </Provider>
  );
};

export default MyApp;
