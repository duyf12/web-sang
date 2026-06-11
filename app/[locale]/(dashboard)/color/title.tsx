/** @format */

import { Skeleton } from "~/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full   flex justify-center items-center">
      <div className="w-10/12 h-40  ">
        <div className="h-20"></div>
        <div className=" text-2xl md:text-4xl h-20 font-bold text-[#1a4797]    items-center flex transition-all duration-300">
          COLOR TOOL
        </div>
      </div>
    </div>
  );
}
