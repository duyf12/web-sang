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
export function Demo() {
  const [item, setItem] = useState(null);
  const [data, setData] = useState([]);
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [listImage, setListImage] = useState<any[]>([]);

  const [sheetValue, setSheetValue] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const opts = {
    height: "340",
    width: "400",
    playerVars: {
      autoplay: 1,
    },
  };

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
      <div className=" h-40 ">
        <div className="h-20"></div>
        <div className=" text-2xl md:text-4xl h-20 font-bold text-[#1a4797]  px-2 2xl:px-80 xl:px-64 lg:px-28  items-center flex transition-all duration-300">
          COMPANY PROFILE
        </div>
        <div
          className="  xl:flex  block px-2 2xl:px-80 xl:px-64 lg:px-28  transition-all duration-300"
          ref={divRef}
        >
          <div className="xl:w-1/2  w-full   transition-all duration-300">
            <img
              src={"/images/company/company1.webp"}
              className=" w-full"
              alt="Log1o"
            />
          </div>
          <div className="xl:w-1/2  w-full  flex flex-col justify-center items-center transition-all duration-300">
            <div className="font-bold">Our factory mainly introducesd</div>
            <div className="px-2 mt-2">
              {sheetValue == 1
                ? "Esse Paint German technology co., Ltd. We mainly produce and sell car refinishing paint, water-based paint, Industrial advertising paint."
                : "We mainly produce and sell car refinishing paint, water-based paint, Industrial advertising paint."}
            </div>
          </div>
        </div>

        <div className=" mt-4 xl:flex  block px-2 2xl:px-80 xl:px-64 lg:px-28  transition-all duration-300">
          <div className=" xl:w-1/2  w-full  xl:hidden block transition-all duration-300">
            <img
              src={"/images/company/company2.webp"}
              className=" w-full"
              alt="Log1o"
            />
          </div>
          <div className=" xl:w-1/2  w-full    flex flex-col justify-center items-center transition-all duration-300">
            <div className=" font-bold">Our corporate culture</div>
            <div className="px-2 mt-2">
              Esse paint has always pursued the enterprise spirit of
              steadfastness, hard work, integrity and win-win, and employees
              have the entrepreneurial spirit of continuous struggle and
              continuous pace.
            </div>
          </div>
          <div className=" xl:block hidden  xl:w-1/2  w-full  transition-all duration-300">
            <img
              src={"/images/company/company7.webp"}
              className=" w-full"
              alt="Log1o"
            />
          </div>
        </div>
        {sheetValue == 1 ? (
          <div className=" mt-4 xl:flex  block px-2 2xl:px-80 xl:px-64 lg:px-28  transition-all duration-300">
            <div className="xl:w-1/2  w-full   transition-all duration-300">
              <div className="w-full ">
                <YouTube videoId={"vDvAT5zH8Vk"} opts={opts} />
              </div>
            </div>
            <div className="xl:w-1/2  w-full   flex flex-col justify-center items-center transition-all duration-300">
              <div className=" font-bold">We provide high-quality service</div>
              <div className="px-2 mt-2">
                Your satisfaction is our driving force. We will continue to
                forge ahead and repay the trust of people from all walks of life
                in Esse with high-quality service and satisfactory products.
              </div>
            </div>
          </div>
        ) : null}
        {sheetValue == 1 ? (
          <div className=" mt-4 xl:flex  block px-2 2xl:px-80 xl:px-64 lg:px-28  transition-all duration-300">
            <div className=" xl:w-1/2  w-full  xl:hidden block transition-all duration-300">
              <YouTube videoId={"5-vilO4DGFY"} opts={opts} />
            </div>

            <div className=" xl:w-1/2  w-full    flex flex-col justify-center items-center transition-all duration-300">
              <div className=" font-bold">
                We purchase high-quality raw materials
              </div>
              <div className="px-2 mt-2">
                They are high-quality raw materials from well-known
                manufacturers such as Germany, the Netherlands, and the United
                States, and the company has independent product research and
                development strength. Its products are rich in categories,
                excellent in quality and stable in performance. We will
                responsibly deliver qualified products with high adhesion, good
                covering power, good weather resistance, ideal fullness and
                gloss, and excellent curing effect to the market.
              </div>
            </div>
            <div className=" xl:block hidden  xl:w-1/2  w-full  transition-all duration-300">
              <YouTube videoId={"5-vilO4DGFY"} opts={opts} />
            </div>
          </div>
        ) : null}

        <div className=" mt-4 xl:flex  block px-2 2xl:px-80 xl:px-64 lg:px-28  transition-all duration-300">
          <div className="xl:w-1/2  w-full   transition-all duration-300">
            <img
              src={"/images/company/company5.webp"}
              className=" w-full"
              alt="Log1o"
            />
          </div>
          <div className="xl:w-1/2  w-full   flex flex-col justify-center items-center transition-all duration-300">
            <div className=" font-bold">Good color, good car paint</div>
            <div className="px-2 mt-2">
              The color formula, precise finished paint and electronic version
              formula all use the color master system independently developed by
              Esse. The color matching is accurate, convenient and has good
              compatibility, providing customers with stable support. We also
              attach great importance to technology research and development,
              and continuously introduce advanced production and testing
              equipment.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
