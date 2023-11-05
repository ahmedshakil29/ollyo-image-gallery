import "@/styles/globals.css";
import { Provider } from "react-redux";
//---INTERNAL IMPORT
import { NavBar, Footer } from "../components/componentsIndex.js";
import store from "@/Store/store.js";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <div>
    <Head>
      <title>Ollyo Image Gallery</title>
    </Head>
    <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  </div>
);

export default App;
