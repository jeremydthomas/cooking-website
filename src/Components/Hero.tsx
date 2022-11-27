import Image from "next/image";
import img from "../images/1.png";

function Hero({ heading, message }: { heading: string; message: string }) {
  return (
    <div className="custom-img mb-12 flex h-screen items-center justify-center bg-fixed bg-center">
      {/* overlay */}
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[2] bg-black/40" />
      {/* image */}
      <div className="fixed top-20 z-10 flex flex-col items-center justify-center">
        <Image
          className="rounded-lg"
          src={img}
          alt="logo"
          height={400}
          width={400}
        />

        <div className="mt-20 flex flex-col items-center p-5 text-white">
          <h2 className="text-5xl font-bold">{heading}</h2>
          <p className="py-5 text-xl">{message}</p>
          <button className="py2 h-10 rounded-lg border bg-white px-8 text-black">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
