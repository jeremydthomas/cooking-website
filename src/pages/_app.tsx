import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}
