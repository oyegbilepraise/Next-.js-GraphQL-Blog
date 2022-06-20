import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import moment from "moment";

import "swiper/css";
import { getFeaturedPosts } from "../services";
import Link from "next/link";
import Image from "next/image";

const Swiperi = () => {
  SwiperCore.use([Autoplay]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      console.log(result);
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div className="mb-5">
      <Swiper
        loop
        slidesPerView={1.5}
        spaceBetween={40}
        speed={10000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          470: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          760: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
        }}
        className="showcase"
      >
        <div className="swiper-pagination"></div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            return (
            {featuredPosts.map((post, index) => (
            <SwiperSlide className="rounded-lg" key={index}>
              <div className="relative h-72">
                <div
                  className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
                  style={{
                    backgroundImage: `url('${post.featuredImage.url}')`,
                  }}
                />
                <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
                <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                  <p className="text-white mb-4 text-shadow font-semibold text-xs">
                    {moment(post.createdAt).format("MMM DD, YYYY")}
                  </p>
                  <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
                    {post.title}
                  </p>
                  <div className="flex items-center absolute bottom-5 w-full justify-center">
                    <Image
                      unoptimized
                      alt={post.author.name}
                      height="30px"
                      width="30px"
                      className="align-middle drop-shadow-lg rounded-full"
                      src={post.author.photo.url}
                    />
                    <p className="inline align-middle text-white text-shadow ml-2 font-medium">
                      {post.author.name}
                    </p>
                  </div>
                </div>
                <Link href={`/post/${post.slug}`}>
                  <span className="cursor-pointer absolute w-full h-full" />
                </Link>
              </div>
            </SwiperSlide>
            ))}
            );
          </div>
        </div>
      </Swiper>
      {/* <Swiper
        spaceBetween={40}
        slidesPerView={1.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper> */}
    </div>
  );
};

export default Swiperi;
