/** @format */

"use client";

import { log } from "console";
import { LayoutGrid, Radio, Settings, User2Icon, Menu } from "lucide-react";
import Link from "next-intl/link";

import { HTMLAttributes } from "react";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";

import { useRouter } from "next/navigation";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
type Checked = DropdownMenuCheckboxItemProps["checked"];
export default function Navbar() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  const [showcolor, setShowcolor] = React.useState<Checked>(false);
  const [showContact, setShowContact] = React.useState<Checked>(false);
  const router = useRouter();
  const a = [
    { name: "HOME", id: 1 },
    { name: "ABOUT ESSE", id: 5 },
    { name: "PRODUCTION", id: 2 },
    { name: "COLOR TOOL", id: 3 },
    { name: "CONTACT US", id: 4 },
  ];
  const listDrop = [
    { name: "2K Topcoat", id: 1 },
    { name: "1K Basecoat", id: 2 },
    { name: "MS Clearcoat", id: 3 },
    { name: "HS Hardner", id: 4 },
    { name: "Thinner", id: 5 },
    { name: "Primer/Putty", id: 6 },
    { name: "Auxiliary", id: 7 },
    { name: "Industrial Paint", id: 8 },
    { name: "Finished paint series", id: 9 },
  ];

  const goToProductScreen = (index: any) => {
    if (index == 1) {
      router.push("/about");
    } else if (index == 0) {
      router.push("/home");
    } else if (index == 2) {
      router.push("/product");
    } else if (index == 3) {
      router.push("/color");
    } else {
      router.push("/contact");
    }
  };

  return (
    // <div
    //   className="w-full h-7
    //   opacity-100   md:opacity-50
    // bg-red-800
    // fixed top-0 left-0 right-0"
    // >
    //   <div>ádasdasd</div>
    // </div>
    //  hover:bg-primary transition-all duration-300
    //  hover:-translate-y-4 transiton-all duration-300
    // sử dụng framer-motion

    // <div className="w-64 h-64 bg-gray-300 transition-opacity duration-500 ease-in-out opacity-100 md:opacity-0 ">
    //   ád
    // </div>

    <div className=" w-full justify-between   absolute  h-20 flex px-8 z-40  bg-gradient-to-b from-slate-400">
      <div className="w-1/3 h-full">
        <div className="flex h-full items-center ">
          <img src="/icon/logo.png" className="h-[110px]" alt="Logo" />
        </div>
      </div>
      <div className=" w-2/3   justify-between ">
        <div className="hidden md:flex  h-full items-center">
          {a.map((item: any, index: any) => (
            <div className=" w-full h-full" key={index}>
              <div
                onClick={() => {
                  goToProductScreen(index);
                }}
                className={`${
                  index == 0 ? "" : ""
                } cursor-pointer w-full h-full justify-center flex  items-center text-white font-medium hover:text-[#1a4797]`}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>
        <div className="opacity-100 md:opacity-0  h-full flex justify-end items-center">
          {/* <Menu className=" h-9 w-9" /> */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Menu className=" h-9 w-9" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuCheckboxItem
                // checked={showStatusBar}
                onClick={() => {
                  goToProductScreen(0);
                }}
              >
                HOME
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                onClick={() => {
                  goToProductScreen(1);
                }}
                // onCheckedChange={setShowActivityBar}
              >
                ABOUT ESSE
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                // checked={showPanel}
                onClick={() => {
                  goToProductScreen(2);
                }}
                // onCheckedChange={setShowPanel}
              >
                PRODUCTION
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                // checked={showPanel}
                onClick={() => {
                  goToProductScreen(3);
                }}
                // onCheckedChange={setShowcolor}
              >
                COLOR TOOL
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                // checked={showPanel}
                onClick={() => {
                  goToProductScreen(4);
                }}
                // onCheckedChange={setShowContact}
              >
                CONTACT US
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
