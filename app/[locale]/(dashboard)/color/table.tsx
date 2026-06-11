/** @format */

"use client";

import { useTranslations } from "next-intl";
import { Skeleton } from "~/components/ui/skeleton";
import { api } from "~/lib/api/client";
import { DataTable } from "./data-table";
import { columns } from "./data-table-columns";
import {
  ArrowDownToLine,
  ArrowRightToLine,
  LucideArrowLeft,
} from "lucide-react";

import { useStore } from "~/app/[locale]/(dashboard)/color/store";
import { useRouter } from "next/navigation";
import Data from "./data";
interface Person {
  __EMPTY: number;
  A: number;
  B: string;
  C: number;
  D: string;
  E: number;
  F: string;
  G: string;
  H: string;
}
export default function Table() {
  const router = useRouter();
  const itemChoose = useStore((store) => store.itemChoose);

  const resetItemChoose = useStore((store) => store.resetItemChoose);

  const setCheckFilter = useStore((store) => store.setCheckFilter);
  const setValueWeight = useStore((store) => store.setValueWeight);
  const dataListFilter = useStore((store) => store.dataListFilter);
  const checkFilter = useStore((store) => store.checkFilter);
  Data.sort((a, b) => {
    if (a.G < b.G) return -1;
    if (a.G > b.G) return 1;
    return 0;
  });
  // console.log("Data = ", Data);

  let dataTable: any[] = Data;

  const goToTable = () => {
    setCheckFilter(false);
    resetItemChoose();
    setValueWeight(100);
  };

  if (itemChoose?.A) {
    return (
      <div className="w-full flex justify-center items-center transition-all duration-300 ">
        <div className="w-10/12 flex items-center">
          <div
            className="cursor-pointer w-[50px]  flex items-center justify-center border rounded"
            onClick={goToTable}
          >
            <LucideArrowLeft className="h-[40px] w-[40px]" />
          </div>
          <div className="ml-2">Return to choose color</div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex justify-center items-center transition-all duration-300 ">
      {/* checkFilter ? dataListFilter : data.data */}
      <div className="w-10/12 ">
        <DataTable
          columns={columns}
          data={checkFilter ? dataListFilter : dataTable}
        />
      </div>
    </div>
  );
}
function FormSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
    </div>
  );
}
