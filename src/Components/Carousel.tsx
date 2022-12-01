import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
  const images = [
    "/images/eggpie.jpg",
    "/images/lumpia1.jpg",
    "/images/lumpia2.jpg",
    "/images/thing.jpg",
    "/images/bibimbap.jpg",
    "/images/kutsinta.jpg",
    "/images/pancit-bihon.jpg",
    "/images/ube-bibingka.jpg",
    "/images/ube-bibingka2.jpg",
    "/images/ube-biko.jpg",
    "/images/ube-flan.jpg",
  ];
  return (
    <div id="gallery" className="-mt-12 bg-black ">
      <Swiper
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <picture>
              <img
                className="custom-carousel w-full object-contain"
                src={image}
                alt={`food ${index}`}
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
