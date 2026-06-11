/* eslint-disable @next/next/no-img-element */
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

import { useRouter } from "next/navigation";
export default function Banner() {
  const router = useRouter();
  const slides = [
    {
      url: "/images/car1.webp",
    },
    {
      url: "/images/car2.webp",
    },
    {
      url: "/images/car3.webp",
    },
    {
      url: "/images/car4.webp",
    },
    {
      url: "/images/car5.webp",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [browserHeight, setBrowserHeight] = useState(window.innerHeight);

  useEffect(() => {
    setTimeout(() => {
      console.log("vao dayyyy");

      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 6000);
  }, [currentIndex]);
  const goToScreenContact = () => {
    router.push("/contact");
  };
  return (
    <div className="w-full h-full ">
      {/* <p>Browser height: {browserHeight}px</p> */}
      <div className=" w-full">
        <div className=" ">
          <img
            src={`${slides[currentIndex].url}`}
            className="  bg-cover  transition-opacity duration-500 ease-in-out   "
            alt="Log1o"
          />
        </div>
        <div className=" h-[100px] sm:h-full  sm:mt-0 mt-20 absolute inset-0 flex items-center justify-end pr-8 md:pr-40 ">
          <div className="text-white text-end">
            <h1 className="text-xl md:text-6xl font-bold">
              Esse Paint co., Ltd.
            </h1>
            <p className="text-xs  md:text-base mt-1 md:mt-6">
              Mainly produces and sell automotive refinsh paints,
            </p>
            <p className="text-xs  md:text-base">
              multifuntional industrial paints
            </p>
            <p className="text-xs  md:text-base">
              alloy paints and water-based paints, etc.
            </p>
            <Button
              variant="default"
              className=" text-base md:text-xl h-12 px-3 md:px-6 bg-[#1a4797] mt-4"
              onClick={goToScreenContact}
            >
              KNOW MORE US
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
