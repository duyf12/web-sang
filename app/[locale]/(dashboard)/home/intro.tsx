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
export default function Banner() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="w-full"
    >
      <div className="pt-7 md:pt-14 font-bold text-[#1a4797] flex justify-center items-center text-3xl md:text-6xl transition-all duration-300">
        ESSE PAINT
      </div>
      <div className=" w-full mt-5   pb-7 md:pb-14  px-4  xl:px-96 lg:px-52 md:px-32 transition-all duration-300">
        <div className="text-xl font-bold">AUTOMOTIVE REFINISH PAINT</div>
        <div className="text-lg ">
          We have a complete set of car refinish paint.
        </div>

        <div className="text-lg ">
          <span className="text-[#5b9bd5] font-bold">
            <strong>
              <span>1K autobase colors </span>
            </strong>
          </span>
          (1K pure colors, 1K silver, 1K pearl colors and 1K crystal pearl
          color).
        </div>
        <div className="text-lg ">
          <span className="text-[#5b9bd5] font-bold">
            <strong>
              <span>2K autocryl colors </span>
            </strong>
          </span>
          (2K pure colors).
        </div>
        <div className="text-lg ">
          <span className="text-[#5b9bd5] font-bold">
            <strong>
              <span>primers </span>
            </strong>
          </span>
          (1K primer surfacer, 1k nc putty, 2k intermediate primer, 2k epoxy
          primer and 1k plastic primer)
          <span className="text-[#5b9bd5] font-bold">
            <strong>
              <span>
                . Clear coats, hardeners, thinners, putty, 1k binder, 2k binder{" "}
              </span>
            </strong>
          </span>
          and other auto refinish paint additives, etc.
        </div>
      </div>
    </motion.div>
  );
}
