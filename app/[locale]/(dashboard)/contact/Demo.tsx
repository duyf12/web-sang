/** @format */

"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "~/components/ui/button";
import { api } from "~/lib/api/client";
import { read, utils, writeFile } from "xlsx";
import {
  ArrowDownToLine,
  ArrowRightToLine,
  LucideArrowLeft,
} from "lucide-react";
import YouTube from "react-youtube";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
export function Demo() {
  const [item, setItem] = useState(null);
  const [data, setData] = useState([]);
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [listImage, setListImage] = useState<any[]>([]);
  const [sheetValue, setSheetValue] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const opts = {
    height: "390",
    width: "450",
    playerVars: {
      autoplay: 1,
    },
  };

  // useEffect(() => {
  //   const resizeObserver = new ResizeObserver((entries) => {
  //     if (entries[0]) {
  //       const { width, height } = entries[0].contentRect;
  //       console.log("width - = ", width);
  //       console.log("height - = ", height);
  //       // setDimensions({ width, height });
  //     }
  //   });

  //   if (divRef.current) {
  //     resizeObserver.observe(divRef.current);
  //   }

  //   return () => {
  //     if (divRef.current) {
  //       resizeObserver.unobserve(divRef.current);
  //     }
  //   };
  // }, []);
  // console.log("dimensions =", dimensions);

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
    <div className="h-full w-full pb-12">
      {sheetValue == 1 ? (
        <div>
          <div className=" h-40 ">
            <div className="h-20"></div>
            <div className=" text-2xl md:text-4xl h-20 font-bold text-[#1a4797]  px-2 2xl:px-80 xl:px-64 lg:px-28  items-center flex transition-all duration-300">
              CONTACT US
            </div>
          </div>

          <div className="  px-2 2xl:px-80 xl:px-64 lg:px-28  transition-all duration-300">
            <div>OFFICE:</div>
          </div>
          <div className="mt-6  px-2 2xl:px-80 xl:px-64 lg:px-28  transition-all duration-300">
            <div>EMAIL:</div>
            <div>Essepaintgermany@gmail.com</div>
          </div>
          <div className="mt-6  px-2 2xl:px-80 xl:px-64 lg:px-28  transition-all duration-300">
            <div>COMPANY:</div>
            <div>Esse Paint German technology co., LTD</div>
          </div>
        </div>
      ) : (
        <div className=" h-64"></div>
      )}

      <div className="mt-10 w-full  px-2 2xl:px-80 xl:px-64 lg:px-28 transition-all duration-500 bg-[#181818]">
        <motion.div
          variants={fadeIn("up", -0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className=" block md:flex py-12 px-2   transition-all duration-500 text-white"
        >
          <div className="  w-1/2  transition-all duration-500">
            <div className=" h-16 flex  items-center">
              <img src="/icon/logo.png" className="h-[150px]" alt="Logo" />
            </div>
            <div className="mt-4 text-[#999999]">
              Welcome to contact us at anytime!
            </div>
            <div className="mt-4 font-bold text-2xl text-rose-600">
              {/* 0961821294 */}
            </div>
          </div>

          <div className="w-full lg:w-1/2  hidden lg:block transition-all duration-500">
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
        </motion.div>
        {/* khi ở màn hình nhỏ */}

        <div className="w-full lg:w-1/2  block lg:hidden transition-all duration-500 text-white">
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

        {/* ádsa */}
        {/* <div className="w-full border "></div> */}

        <div className="w-full border "></div>
      </div>
    </div>
  );
}
