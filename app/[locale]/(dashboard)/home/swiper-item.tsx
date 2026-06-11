/** @format */

"use client";
import React, { useEffect, useState } from "react";
import { PlusCircleIcon, SearchIcon, TrashIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useStore } from "~/app/[locale]/(dashboard)/home/store";
import { confirm } from "~/components/comfirm";
import { Button } from "~/components/ui/button";
import { toast } from "~/components/ui/use-toast";
import { api } from "~/lib/api/client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

import { useRouter } from "next/navigation";
const Clear = [
  {
    id: 1,
    url: "/images/clearcoat1.jpg",
    name: "2K E9500",
  },
  {
    id: 2,
    url: "/images/clearcoat2.jpg",
    name: "2K HS9600",
  },
  {
    id: 3,
    url: "/images/clearcoat3.jpg",
    name: "2K TGM730",
  },
];
export default function SiperItem() {
  const router = useRouter();

  const navigateWithParams = (item: any) => {
    router.push(`/product?url=${item.url}&name=${item.name}`);
  };
  return (
    <motion.div
      variants={fadeIn("up", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className=" bg-[#f8f8f8] py-12"
    >
      <Swiper
        // install Swiper modules
        modules={[EffectCoverflow, Navigation]}
        // spaceBetween={200}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(e) => console.log("slide change,", e)}
      >
        {Clear.map((item: any, index: any) => (
          <SwiperSlide key={index}>
            <div
              className="justify-center items-center  w-full cursor-pointer"
              onClick={() => {
                navigateWithParams(item);
              }}
            >
              <div className="justify-center items-center flex w-full ">
                <img
                  src={item.url}
                  className="h-32 w-32  lg:w-72 lg:h-72 transition-all duration-500"
                  alt="Log1o"
                />
              </div>
              <div className="text-xs lg:text-base flex justify-center items-center mt-3">
                <div>{item.name}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className="justify-center items-center  w-full">
            <div className="justify-center items-center flex w-full ">
              <img
                src={"/images/son1.jpg"}
                className="h-32 w-32  lg:w-72 lg:h-72 transition-all duration-500"
                alt="Log1o"
              />
            </div>
            <div className="text-xs lg:text-base flex justify-center items-center mt-3">
              <div>C165 1k supper white pearl</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="justify-center items-center  w-full">
            <div className="justify-center items-center flex w-full ">
              <img
                src={"/images/son2.jpg"}
                className="h-32 w-32  lg:w-72 lg:h-72 transition-all duration-500"
                alt="Log1o"
              />
            </div>
            <div className="text-xs lg:text-base flex justify-center items-center mt-3">
              <div>C165 1k supper white pearl</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="justify-center items-center  w-full">
            <div className="justify-center items-center flex w-full ">
              <img
                src={"/images/son3.jpg"}
                className="h-32 w-32  lg:w-72 lg:h-72 transition-all duration-500"
                alt="Log1o"
              />
            </div>
            <div className="text-xs lg:text-base flex justify-center items-center mt-3">
              <div>C165 1k supper white pearl</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="justify-center items-center  w-full">
            <div className="justify-center items-center flex w-full ">
              <img
                src={"/images/son4.jpg"}
                className="h-32 w-32  lg:w-72 lg:h-72 transition-all duration-500"
                alt="Log1o"
              />
            </div>
            <div className=" text-xs lg:text-base flex justify-center items-center mt-3">
              <div>C165 1k supper white pearl</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="justify-center items-center  w-full">
            <div className="justify-center items-center flex w-full ">
              <img
                src={"/images/son5.jpg"}
                className="h-32 w-32  lg:w-72 lg:h-72 transition-all duration-500"
                alt="Log1o"
              />
            </div>
            <div className=" text-xs lg:text-base flex justify-center items-center mt-3">
              <div>C165 1k supper white pearl</div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </motion.div>
  );
}
