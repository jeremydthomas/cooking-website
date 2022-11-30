import Link from "next/link";

function Hero({ heading, message }: { heading: string; message: string }) {
  return (
    <div className="custom-img mb-12 flex h-screen items-center justify-center bg-fixed bg-center">
      {/* overlay */}
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[2] h-60v bg-black/40" />
      {/* image */}
      <div className="relative top-2 z-10 flex flex-col items-center justify-center">
        {/* <Image
          className="hidden rounded-lg md:block"
          src={img}
          alt="logo"
          height={300}
          width={300}
        /> */}

        <div className=" flex flex-col items-center p-5 text-white">
          <h2 className="text-2xl font-bold sm:text-5xl">{heading}</h2>
          <p className="py-5 text-xl">{message}</p>
          <button className="py2 h-10 rounded-lg border bg-white px-8 text-black">
            <Link href="/menu"> View Menu </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
