import Footer from "@/components/modules/Footer/Footer";
import Header from "@/components/modules/Header/Header";
import Navbar from "@/components/modules/Navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
