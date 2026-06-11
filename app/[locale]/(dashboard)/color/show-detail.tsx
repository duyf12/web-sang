/** @format */

"use client";
import React, { useEffect, useState } from "react";
import { PlusCircleIcon, SearchIcon, TrashIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useStore } from "~/app/[locale]/(dashboard)/color/store";
import { confirm } from "~/components/comfirm";
import { Button } from "~/components/ui/button";
import { toast } from "~/components/ui/use-toast";
import { api } from "~/lib/api/client";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { Input } from "~/components/ui/input";

interface Props {
  data: any;
}
const RecipeDetails = (props: Props) => {
  const valueWeight = useStore((store) => store.valueWeight);
  const [value, setValue] = useState(100);

  const [errorValue, setErrorValue] = useState(false);
  const setValueWeight = useStore((store) => store.setValueWeight);
  const onChangeValue = (event: any) => {
    const inputValue = event.target.value;
    // Kiểm tra xem giá trị nhập vào có phải là số không

    if (/^\d+$/.test(inputValue) && parseInt(inputValue) > 0) {
      // setValueWeight(event.target.value);
      setErrorValue(false);
      setValue(inputValue);
    } else {
      console.log("ko phải là số");
      setErrorValue(true);
    }
  };

  const onSubmit = () => {
    setValueWeight(value);
  };
  console.log("props.data = ", props.data);
  console.log("props.data.Iprops.data.Iprops.data.I= ", props.data.I);
  const getFirebaseUrl = (fileName: string) => {
    if (!fileName) return "";
    const bucketName = "essepaintapp.firebasestorage.app";
    const folderName = "app_images";
    return `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${folderName}%2F${encodeURIComponent(fileName)}?alt=media`;
  };

  console.log("getFirebaseUrl= ", getFirebaseUrl("0001.jpg"));

  return (
    <div className="w-full">
      <div className="py-3  border-x border-[#BFBFBF] border-t px-2 text-xl  font-semibold flex justify-center items-center bg-[#bbcce1]">
        Recipe details
      </div>
      <div className="flex  border-[#BFBFBF] border-t   border-x  ">
        <div className="w-4/5 ">
          <div className=" w-full flex ">
            <div className="w-2/5 sm:w-1/5  border-[#BFBFBF] border-r py-2 px-2 transition-all duration-300">
              Masterbatch series
            </div>
            <div className="w-3/5 sm:w-4/5 border-[#BFBFBF] border-r py-2 px-2 transition-all duration-300">
              Essepaint
            </div>
          </div>
          <div className=" w-full border-[#BFBFBF] border-t flex">
            <div className="  border-[#BFBFBF] border-r py-2 px-2 w-2/5 sm:w-1/5 transition-all duration-300">
              Color category
            </div>
            <div className=" border-[#BFBFBF] border-r py-2 px-2 w-3/5 sm:w-4/5 transition-all duration-300">
              {props.data.G}
            </div>
          </div>
          <div className=" w-full border-[#BFBFBF] border-t flex">
            <div className="  border-[#BFBFBF] border-r py-2 px-2 w-2/5 sm:w-1/5 transition-all duration-300">
              Automobile brand
            </div>
            <div className="   border-[#BFBFBF] border-r py-2 px-2 w-3/5 sm:w-4/5 transition-all duration-300">
              {props.data.H}
            </div>
          </div>
          <div className=" w-full border-[#BFBFBF] border-t flex">
            <div className="  border-[#BFBFBF] border-r py-2 px-2 w-2/5 sm:w-1/5 transition-all duration-300">
              Car model
            </div>
            <div className="  border-[#BFBFBF] border-r py-2 px-2 w-3/5 sm:w-4/5 transition-all duration-300">
              {props.data.H}
            </div>
          </div>
          <div className=" w-full border-[#BFBFBF] border-t flex">
            <div className="  border-[#BFBFBF] border-r py-2 px-2 w-2/5 sm:w-1/5 transition-all duration-300">
              Year
            </div>
            <div className=" border-[#BFBFBF] border-r py-2 px-2 w-3/5 sm:w-4/5 transition-all duration-300">
              {props.data.E}
            </div>
          </div>
          <div className=" w-full border-[#BFBFBF] border-t flex">
            <div className="  border-[#BFBFBF] border-r py-2 px-2 w-2/5 sm:w-1/5 transition-all duration-300">
              Color number
            </div>
            <div className="  border-[#BFBFBF] border-r py-2 px-2 w-3/5 sm:w-4/5 transition-all duration-300">
              {props.data.B}
            </div>
          </div>
          <div className=" w-full border-[#BFBFBF] border-t flex">
            <div className="  border-[#BFBFBF] border-r py-2 px-2 w-2/5 sm:w-1/5 transition-all duration-300">
              Total weight（g）
            </div>
            <div className="  border-[#BFBFBF] border-r py-2 px-2 w-3/5 sm:w-4/5 transition-all duration-300">
              100.0
            </div>
          </div>
          <div className=" w-full border-[#BFBFBF] border-t flex">
            <div className="  border-[#BFBFBF] border-r py-2 px-2 w-2/5 sm:w-1/5 transition-all duration-300">
              Usage method
            </div>
            <div className="w-4/5  border-[#BFBFBF] border-r py-2 px-2 w-3/5 sm:w-4/5 transition-all duration-300"></div>
          </div>
          <div className=" w-full border-[#BFBFBF] border-t border-b flex">
            <div className="   border-[#BFBFBF] border-r py-2 px-2 w-2/5 sm:w-1/5 transition-all duration-300">
              Recipe weight（g）
            </div>
            <div className="  border-[#BFBFBF] border-r py-2 px-2 w-3/5 sm:w-4/5 transition-all duration-300">
              <div className="flex">
                <div className="w-[100px]">
                  <Input
                    defaultValue={valueWeight}
                    onChange={(event) => onChangeValue(event)}
                  />
                </div>
                <div className="h-10 w-[80px] ml-2 ">
                  <Button
                    className="bg-[#bbcce1] text-black hover:text-white"
                    onClick={onSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </div>

              {errorValue && (
                <div className="text-xs mt-2 text-red-500">
                  Please enter a positive number
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-1/5 border-[#BFBFBF] border-b p-2 flex justify-center items-center">
          <img
            src={getFirebaseUrl(props.data.I)}
            className="w-ful"
            alt="Log111o"
          />
        </div>
      </div>
    </div>
  );
};
interface PropsColor {
  data: any;
}
const FormulaColor = (pram: PropsColor) => {
  const valueWeight = useStore((store) => store.valueWeight);

  let sum = 0;

  const newArray: any[] = [];

  for (let i = 0; i < pram.data.length; i++) {
    sum += pram.data[i][3];
    newArray.push(sum);
  }

  return (
    <div className="w-full mt-5">
      <div className="py-3  border-x border-[#BFBFBF] border-t px-2 text-xl  font-semibold flex justify-center items-center bg-[#bbcce1]">
        Formula color relation table
      </div>
      <div className="flex ">
        <div className="w-3/12  lg:w-1/12 py-2 px-2 border-[#BFBFBF] border-t border-x transition-all duration-300">
          Num
        </div>
        <div className="w-4/12   py-2 px-2 border-[#BFBFBF] border-t border-r">
          Color number
        </div>
        <div className="w-4/12 py-2 px-2 border-[#BFBFBF] border-t border-r">
          Color name
        </div>
        <div className="w-4/12 py-2 px-2 border-[#BFBFBF] border-t border-r">
          Net weight（g）
        </div>
        <div className="w-4/12 py-2 px-2 border-[#BFBFBF] border-t border-r ">
          Total weight（g）
        </div>
      </div>

      {pram.data.map((item: any, index: any) => {
        const netWeight = (Number(item[3]) * valueWeight) / 1000;
        const totalWeight = (newArray[index] * valueWeight) / 1000;
        return (
          <div className="flex" key={index}>
            <div className="w-3/12  lg:w-1/12     py-2 px-2 border-[#BFBFBF] border-t border-x transition-all duration-300 ">
              {index + 1}
            </div>
            <div className="w-4/12  py-2 px-2 border-[#BFBFBF] border-t border-r overflow-hidden overflow-ellipsis">
              {item[2]}
            </div>
            <div className="w-4/12 py-2 px-2 border-[#BFBFBF] border-t border-r overflow-hidden overflow-ellipsis">
              {item[4]}
            </div>
            <div className="w-4/12 py-2 px-2 border-[#BFBFBF] border-t border-r overflow-hidden overflow-ellipsis">
              {netWeight.toFixed(2)}
            </div>
            <div className="w-4/12 py-2 px-2 border-[#BFBFBF] border-t border-r overflow-hidden overflow-ellipsis">
              {totalWeight.toFixed(2)}
            </div>
          </div>
        );
      })}
      <div className="flex">
        <div className="w-3/12  lg:w-1/12     py-2 px-2 border-[#BFBFBF] border-t border-b border-l transition-all duration-300 "></div>
        <div className="w-4/12  py-2 px-2 border-[#BFBFBF] border-t border-r border-b overflow-hidden overflow-ellipsis flex justify-end">
          Total
        </div>
        <div className=" w-4/12 py-2 px-2 border-[#BFBFBF] border-t border-b border-r overflow-hidden overflow-ellipsis">
          {valueWeight}
        </div>
        <div className="  w-4/12 py-2 px-2 border-[#BFBFBF] border-t  overflow-hidden overflow-ellipsis"></div>
        <div className="  w-4/12 py-2 px-2 border-[#BFBFBF] border-t  overflow-hidden overflow-ellipsis"></div>
      </div>
    </div>
  );
};

export default function Contact() {
  const itemChoose = useStore((store) => store.itemChoose);

  const dataListColor = useStore((store) => store.dataListColor);

  if (itemChoose?.A) {
    const a = dataListColor.filter((item: any) => item[0] == itemChoose?.A);

    return (
      <div className="w-full flex justify-center items-center  transition-all duration-300 ">
        <div className="w-10/12  ">
          <RecipeDetails data={itemChoose} />
          <FormulaColor data={a} />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full  px-2 2xl:px-80 xl:px-64 lg:px-28 transition-all duration-300 ">
      <div className="w-full  "></div>
    </div>
  );
}
