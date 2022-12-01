import Head from "next/head";
import Hero from "../Components/Hero";
import Menu from "./menu";
import Contact from "../Components/Contact";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Bears Kitchen</title>
        <meta
          name="description"
          content="Order Your favorite Filipino food here."
        />
      </Head>

      <Hero
        heading="Try Bears Kitchen Today!"
        message="Fresh, Fast and Delicious!"
      />
      <Carousel />
      {/* <Menu /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
