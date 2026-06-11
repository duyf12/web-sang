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

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
const image = [
  "/images/brand1.jpg",
  "/images/brand2.jpg",
  "/images/brand3.jpg",
  "/images/brand4.jpg",
  "/images/brand5.jpg",
  "/images/brand6.jpg",
];

import { useRouter } from "next/navigation";
export default function IntroTrademark() {
  const router = useRouter();
  const goToScreenContact = () => {
    router.push("/contact");
  };
  return (
    <div className="w-full  px-2 2xl:px-80 xl:px-64 lg:px-28 transition-all duration-500">
      <div className=" block md:flex py-12 px-2   transition-all duration-500">
        <motion.div
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="  w-full 2xl:w-full xl:w-full lg:w-full   md:w-2/3  transition-all duration-500"
        >
          <div className="text-4xl font-bold text-[#1a4797]">WHY CHOOSE US</div>
          <div className="mt-4">
            The product variety and excellent quality, stability is good, we
            will be responsible for the delivery to the market and high
            adhesion, good hiding power
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="w-full 2xl:w-full xl:w-full lg:w-full   md:w-1/3  flex justify-start items-center  md:justify-center mt-10 md:mt-0 transition-all duration-500"
        >
          <Button
            variant="default"
            className=" text-sm md:text-xl h-12 px-3 md:px-6 bg-[#1a4797] "
            onClick={goToScreenContact}
          >
            KNOW MORE US
          </Button>
        </motion.div>
      </div>

      {/* ádsa */}
      <div className="w-full border "></div>
      <div className="block xl:flex w-full transition-all duration-500 ">
        <motion.div
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="w-full xl:w-3/5  py-12 transition-all duration-500"
        >
          <div className="text-2xl font-bold transition-all duration-500">
            ESSE PAINT CO., LTD.
          </div>
          <div className="mt-4">
            Companies always adhere to the pragmatic, hard work, integrity,
            win-win spirit of enterprise, employees have more than fighting, and
            do not stop the pace of entrepreneurship. Industry pay fine God
            helps those who help themselves. Your satisfaction is our
            motivation, we will continue to forge ahead, with high quality
            service and satisfactory products to repay the community for
            ESSEPaint`s trust.
          </div>
          <div className="mt-4">
            Color masterbatch system independent research and development to the
            finished paint palette and establish matching system can give
            customers stability support.
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="w-2/5 hidden xl:block    content-center py-12 px-10 transition-all duration-500 "
        >
          <img src={"/images/home1.webp"} className=" w-full" alt="Log1o" />
        </motion.div>
      </div>
      <div className=" block xl:hidden      content-center transition-all duration-500">
        <img src={"/images/home1.webp"} className=" w-full" alt="Log1o" />
      </div>
      <div className="w-full border "></div>
    </div>
  );
}
