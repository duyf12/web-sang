/** @format */

"use client";
import React, { useEffect, useState } from "react";
import { PlusCircleIcon, SearchIcon, TrashIcon } from "lucide-react";
import { useTranslations } from "next-intl";
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
const image = [
  "/images/brand1.jpg",
  "/images/brand2.jpg",
  "/images/brand3.jpg",
  "/images/brand4.jpg",
  "/images/brand5.jpg",
  "/images/brand6.jpg",
];
const ServiceData = [
  {
    title: "duy1",
    content: "Lorem ipsum dolor sit amet, consectertur adiposcoing elit",
    backgroundImage: "/images/brand1.jpg",
  },
  {
    title: "duy2",
    content: "Lorem ipsum dolor sit amet, consectertur adiposcoing elit",
    backgroundImage: "/images/brand2.jpg",
  },
  {
    title: "duy3",
    content: "Lorem ipsum dolor sit amet, consectertur adiposcoing elit",
    backgroundImage: "/images/brand3.jpg",
  },
  {
    title: "duy4",
    content: "Lorem ipsum dolor sit amet, consectertur adiposcoing elit",
    backgroundImage: "/images/brand4.jpg",
  },
];
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
export default function Contact() {
  return (
    <div className="w-full  px-2 2xl:px-80 xl:px-64 lg:px-28 transition-all duration-500 bg-[#181818]">
      <motion.div
        variants={fadeIn("up", -0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className=" block md:flex py-12 px-2   transition-all duration-500 text-white"
      >
        <div className="  w-1/3  transition-all duration-500">
          <div className=" h-16 flex  items-center">
            <img src="/images/logo-white.png" className="" alt="Loago" />
          </div>
          <div className="mt-4 text-[#999999]">
            Welcome to contact us at anytime!
          </div>
          {/* <div className="mt-4 font-bold text-2xl text-rose-600">
            +84328115016
          </div> */}
        </div>

        <div className="w-full lg:w-1/3  hidden lg:block transition-all duration-500">
          <div className="font-bold text-2xl h-16 flex  items-center">
            <div>PRODUCTS</div>
          </div>
          <div className=" mt-4 grid   grid-cols-2 gap-4  content-center text-[#999999]">
            <div>2K Topcoat</div>
            <div>2K Topcoat</div>
            <div>1K Basecoat</div>
            <div>MS Clearcoat</div>
            <div>HS Hardener</div>
            <div>Thinner</div>
            <div>Primer/Putty</div>
            <div>Auxiliary</div>
            <div>Industrial Paint</div>
          </div>
          {/* <div className="mt-4 font-bold text-2xl">0961821294</div> */}
        </div>
        <div className="w-full lg:w-1/3  hidden lg:block transition-all duration-500 ">
          <div className="font-bold text-2xl h-16 flex  items-center ">
            {/* <div>Zalo</div> */}
          </div>
          <div className=" mt-4 grid   grid-cols-2 gap-4  content-center">
            {/* <div className="">Mã zalo</div> */}
          </div>
        </div>
      </motion.div>
      {/* khi ở màn hình nhỏ */}

      <div className="w-full lg:w-1/3  block lg:hidden transition-all duration-500 text-white">
        <div className="font-bold text-2xl h-16 flex  items-center">
          <div>PRODUCTS</div>
        </div>
        <div className=" mt-4 grid   grid-cols-2 gap-4  content-center  text-[#999999]">
          <div>2K Topcoat</div>
          <div>2K Topcoat</div>
          <div>1K Basecoat</div>
          <div>MS Clearcoat</div>
          <div>HS Hardener</div>
          <div>Thinner</div>
          <div>Primer/Putty</div>
          <div>Auxiliary</div>
          <div>Industrial Paint</div>
        </div>
        {/* <div className="mt-4 font-bold text-2xl text-white">+84328115016</div> */}
      </div>
      <div className="w-full lg:w-1/3  block lg:hidden transition-all duration-500">
        <div className="font-bold text-2xl h-16 flex  items-center text-white">
          {/* <div>Zalo</div> */}
        </div>
        <div className=" mt-4 grid   grid-cols-2 gap-4  content-center">
          {/* <div className="">Mã zalo</div> */}
        </div>
      </div>

      {/* ádsa */}
      {/* <div className="w-full border "></div> */}

      <div className="w-full border "></div>
    </div>
  );
}
