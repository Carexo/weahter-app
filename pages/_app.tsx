import "../styles/globals.scss";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "../components/template/layout/Layout";

import store from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Weather App</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
