import Head from "next/head";
import Home from "../Components/Home";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";

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
      <Home />
    </div>
  );
}
