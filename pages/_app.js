import "@/styles/globals.css";

//---INTERNAL IMPORT
import { NavBar, Footer } from "../components/componentsIndex.js";

const App = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />;
    <Footer />
  </div>
);

export default App;
