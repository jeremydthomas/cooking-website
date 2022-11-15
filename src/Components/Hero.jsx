import Image from "next/image";
import img from "../images/1.png";

function Hero({ heading, message }) {
  return (
    <div className="custom-img mb-12 flex h-screen items-center justify-center bg-fixed bg-center">
      {/* overlay */}
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[2] bg-black/40" />

      <div className="z-[2] ml-[-10rem] mt-[-10rem] p-5 text-white">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="py2 border px-8">book</button>
      </div>
    </div>
  );
}
export default Hero;
