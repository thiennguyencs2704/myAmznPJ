import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import { store } from "../store/index";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
