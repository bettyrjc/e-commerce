import { Provider } from "react-redux";
import Head from "next/head";
import store from "../src/store/reducers";

import "../styles/tailwind.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>PRODUCTOS MERU</title>
        {/* <link rel="icon" href="/static/images/favicon.png" /> */}
      </Head> 
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
