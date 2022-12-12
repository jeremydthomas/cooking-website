export default function Menu() {
  return (
    <div id="menu" className="custom-swiper">
      <div className=" flex flex-col items-center justify-center  ">
        <div className="w-screen px-1 sm:w-40w">
          {/* <picture>
            <img src="/images/dishes.svg" alt="menu" className="w-max" />
          </picture> */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-black">Menu</h1>
            <p className="w-36 border-t-2 border-black"></p>
          </div>
          <ul className="mt-6 text-lg  font-normal capitalize">
            <li className="flex justify-between">
              <span>lumpia</span>
              <span>$1 each</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
