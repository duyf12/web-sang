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

import { read, utils, writeFile } from "xlsx";
interface Props {
  title: string;
  sub1: string;
  sub2: string;
}
import { useRouter } from "next/navigation";
const TextInfo = (params: Props) => {
  const router = useRouter();
  const goToScreenContact = () => {
    router.push("/contact");
  };
  return (
    <div className="absolute text-white  z-10 bottom-0 w-full block px-10 pb-6 md:flex transition-all duration-500">
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="w-full lg:w-2/3 md:w-1/2 "
      >
        <div className="text-2xl font-bold mb-6 md:text-4xl">
          {params.title}
        </div>

        <div className="hidden  md:block transition-all duration-500 ">
          <span className="">
            <strong>
              <span className="font-normal">{params.sub1} </span>
            </strong>
          </span>
          <span className="hidden  lg:inline transition-all duration-500">
            {params.sub2}
          </span>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="w-full lg:w-2/3 md:w-1/2   flex justify-center items-center transition-all duration-500"
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
  );
};

export default function Banner() {
  const [sheetValue, setSheetValue] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const text1 =
    "Corporate Vision: Leading German, Comparing Internationally This is the grand goal that ESSE is committed to pursuing, it is also the inexhaustible driving force for ESSE people to carry";
  const text2 =
    "Corporate Vision: Comparing Internationally This is the grand goal that ESSE is committed to pursuing, it is also the inexhaustible driving force for ESSE people to carry";
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Chuyển đổi URL sang định dạng xuất bản CSV để fetch được dữ liệu thô
        const sheetId = "12Eb_d5_Rw3i4EHdnf2szdiuGgAMrXBD6DSmWzRN7pVY";
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

        const response = await fetch(url);
        const csvText = await response.text();

        /* Parse dữ liệu */
        const wb = read(csvText, { type: "string" });
        const ws = wb.Sheets[wb.SheetNames[0]];

        /* Sử dụng { header: 1 } để lấy mảng của mảng (Array of Arrays)
           data[0] sẽ là hàng đầu tiên, data[0][0] sẽ là ô A1
        */
        const data = utils.sheet_to_json(ws, { header: 1 }) as any[][];

        if (data.length > 0 && data[0].length > 0) {
          const valueA1 = data[0][0]; // Đây là số 1 bạn thấy trên ảnh

          // 2. Cập nhật vào useState
          setSheetValue(valueA1);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-full  sm:h-screen h-1/2  flex">
      <motion.div
        variants={fadeIn("right", -0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="w-1/2 h-full  relative overflow-hidden"
      >
        <img
          src={"/images/car-13.webp"}
          className="w-full sm:h-full h-[300px]  hover:scale-125 transition-all duration-300 "
          alt="Log1o"
        />
        <TextInfo
          title={"WHAT DO WE DO?"}
          sub1={sheetValue == 1 ? text1 : text2}
          sub2={
            "on the past and forging forward, and it is also the spiritual source of ESSE's eternal youth."
          }
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", -0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="w-1/2 h-full "
      >
        <div className="sm:h-1/2 h-[150px] relative overflow-hidden transition-all duration-300">
          <img
            src={"/images/car-11.webp"}
            className=" w-full h-full  hover:scale-125 transition-all duration-300"
            alt="Log1o"
          />
          <TextInfo
            title={"TECHNOLOGY"}
            sub1={
              "With the help of professional training facilities and technical service team, ESSE is based on the mid-to-high-end segment"
            }
            sub2={
              "market and spreads the brand of ESSE to all corners of the world."
            }
          />
        </div>
        <div className="sm:h-1/2 h-[150px]  relative overflow-hidden transition-all duration-300">
          <img
            src={"/images/car-12.webp"}
            className=" w-full h-full hover:scale-125 transition-all duration-300 "
            alt="Log1o"
          />
          <TextInfo
            title={"COLOR"}
            sub1={
              "Esse's products fully integrate P3 technology, namely Profit, Perfect, and Professional. These three elements are outstanding benefit, perfect effect, and product professionalism."
            }
            sub2={
              "P3 technology provides customers with a series of solutions in terms of toning, construction, covering power, etc."
            }
          />
        </div>
      </motion.div>
    </div>
  );
}
