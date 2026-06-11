/** @format */

"use client";

import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { api } from "~/lib/api/client";
import { read, utils, writeFile } from "xlsx";
import apis from "./test";
import {
  ArrowDownToLine,
  ArrowRightToLine,
  LucideArrowLeft,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
const Paint1K = [
  {
    id: 1,
    url: "/images/1k/117 Yellowish Green.webp",
    name: "117 Yellowish Green",
  },
  {
    id: 2,
    url: "/images/1k/118 Blueish green.webp",
    name: "118 Blueish green",
  },
  {
    id: 3,
    url: "/images/1k/119 Throughly blue.webp",
    name: "119 Throughly blue",
  },
  {
    id: 4,
    url: "/images/1k/120 Standard Blue.webp",
    name: "120 Standard Blue",
  },
  {
    id: 5,
    url: "/images/1k/124 Ultramarine.webp",
    name: "124 Ultramarine",
  },
  {
    id: 6,
    url: "/images/1k/143 Reddish Purple Translucent.webp",
    name: "143 Reddish Purple Translucent",
  },
  {
    id: 7,
    url: "/images/1k/143 Reddish Yellowish Black.webp",
    name: "143 Reddish Yellowish Black",
  },
  {
    id: 8,
    url: "/images/1k/150 High Purple Chroma On The Side.webp",
    name: "150 High Purple Chroma On The Side",
  },
  {
    id: 9,
    url: "/images/1k/151 Blue And Red Have High Chroma.webp",
    name: "151 Blue And Red Have High Chroma",
  },
  {
    id: 10,
    url: "/images/1k/151 BLue and RED.webp",
    name: "151 BLue and RED",
  },
  {
    id: 11,
    url: "/images/1k/154 Deep Purple With High Chroma.webp",
    name: "154 Deep Purple With High Chroma",
  },
  {
    id: 12,
    url: "/images/1k/156 Golden Is More Transparent.webp",
    name: "156 Golden Is More Transparent",
  },
  {
    id: 13,
    url: "/images/1k/157 Bright Color And Translucent.webp",
    name: "157 Bright Color And Translucent",
  },
  {
    id: 14,
    url: "/images/1k/158 High Saturation And Transparency.webp",
    name: "158 High Saturation And Transparency",
  },
  {
    id: 15,
    url: "/images/1k/160 Red On The Front And Green On The Side.webp",
    name: "160 Red On The Front And Green On The Side",
  },
  {
    id: 16,
    url: "/images/1k/163 Yellowish Shade And High Chroma.webp",
    name: "163 Yellowish Shade And High Chroma",
  },
  {
    id: 17,
    url: "/images/1k/164 Bluish Shade.webp",
    name: "164 Bluish Shade",
  },
  {
    id: 18,
    url: "/images/1k/165 Front Green And Side Red.webp",
    name: "165 Front Green And Side Red",
  },
  {
    id: 19,
    url: "/images/1k/166 Pure Blue.webp",
    name: "166 Pure Blue",
  },
  {
    id: 20,
    url: "/images/1k/169 Blue With Red.webp",
    name: "169 Blue With Red",
  },
  {
    id: 1,
    url: "/images/1k/184 Mud Yellow.webp",
    name: "184 Mud Yellow",
  },
];
const Paint2K = [
  {
    id: 1,
    url: "/images/2k/Blue on the front and light yellow on the side.webp",
    name: "Blue on the front and light yellow on the side",
  },
  {
    id: 2,
    url: "/images/2k/Bright blue side red.webp",
    name: "Bright blue side red",
  },
  {
    id: 2,
    url: "/images/2k/Bright Red.webp",
    name: "Bright Red",
  },
  {
    id: 2,
    url: "/images/2k/color of blue sliver.webp",
    name: "Color of blue sliver",
  },
  {
    id: 2,
    url: "/images/2k/Color of gold sliver.webp",
    name: "Color of gold sliver",
  },
  {
    id: 2,
    url: "/images/2k/color of orange sliver.webp",
    name: "Color of orange sliver",
  },
  {
    id: 2,
    url: "/images/2k/color of red sliver.webp",
    name: "Color of red sliver",
  },
  {
    id: 2,
    url: "/images/2k/Copper mica.webp",
    name: "Copper mica",
  },
  {
    id: 2,
    url: "/images/2k/Crystal copper pearl.webp",
    name: "Crystal copper pearl",
  },
  {
    id: 2,
    url: "/images/2k/Crystal red pearl.webp",
    name: "Crystal red pearl",
  },
  {
    id: 2,
    url: "/images/2k/Diamond White.webp",
    name: "Diamond White",
  },
  {
    id: 2,
    url: "/images/2k/Extra Black.webp",
    name: "Extra Black",
  },
  {
    id: 2,
    url: "/images/2k/Fine particle  red mica.webp",
    name: "Fine particle  red mica",
  },
  {
    id: 2,
    url: "/images/2k/Fine red pear.webp",
    name: "Fine red pear",
  },
  {
    id: 2,
    url: "/images/2k/Glistening red pearl.webp",
    name: "Glistening red pearl",
  },
  {
    id: 2,
    url: "/images/2k/Golden green sliver.webp",
    name: "Golden green sliver",
  },
  {
    id: 2,
    url: "/images/2k/Golden pearl.webp",
    name: "Golden pearl",
  },
  {
    id: 2,
    url: "/images/2k/Lemon Yellow.webp",
    name: "Lemon Yellow",
  },
  {
    id: 2,
    url: "/images/2k/Light yellow on the front and light blue on the side.webp",
    name: "Light yellow on the front and light blue on the side",
  },
  {
    id: 2,
    url: "/images/2k/Medium think red mica.webp",
    name: "Medium think red mica",
  },
  {
    id: 2,
    url: "/images/2k/Olive Green.webp",
    name: "Olive Green",
  },
  {
    id: 2,
    url: "/images/2k/Pure White.webp",
    name: "Pure White",
  },
  {
    id: 2,
    url: "/images/2k/Purple on the front and green on the side.webp",
    name: "Purple on the front and green on the side",
  },
  {
    id: 2,
    url: "/images/2k/Purple Red.webp",
    name: "Purple Red",
  },
  {
    id: 2,
    url: "/images/2k/red pear.webp",
    name: "Red pear",
  },
  {
    id: 2,
    url: "/images/2k/Slightly yellow side 2.webp",
    name: "Slightly yellow side 2",
  },
  {
    id: 2,
    url: "/images/2k/Slightly yellow side.webp",
    name: "Slightly yellow side",
  },
  {
    id: 2,
    url: "/images/2k/Strong White Flashing on the front side.webp",
    name: "Strong White Flashing on the front side",
  },
  {
    id: 2,
    url: "/images/2k/Translucent, Coarse particle size.webp",
    name: "Translucent, Coarse particle size",
  },
  {
    id: 2,
    url: "/images/2k/Transparent Iron  yellow.webp",
    name: "Transparent Iron  yellow",
  },
  {
    id: 2,
    url: "/images/2k/Transparent red.webp",
    name: "Transparent red",
  },
  {
    id: 2,
    url: "/images/2k/Yellow mica.webp",
    name: "Yellow mica",
  },
];
const Epoxy = [
  {
    id: 1,
    url: "/images/epoxyprimer1.webp",
    name: "2K 805",
  },
];
const Plastic = [
  {
    id: 1,
    url: "/images/plasticprimer1.webp",
    name: "1K900P",
  },
];
const Filler = [
  {
    id: 1,
    url: "/images/fillerptutty1.webp",
    name: "P90 MATIT MULTFUNCTIONAL",
  },
  {
    id: 3,
    url: "/images/fillerptutty3.webp",
    name: "MATIT E800",
  },

  {
    id: 2,
    url: "/images/fillerptutty2.webp",
    name: "P99 ESSE",
  },
];
const Clear = [
  {
    id: 1,
    url: "/images/clearcoat1.webp",
    name: "E9500",
    urlInfo: "/images/clearcoat1-info.webp",
  },
  {
    id: 2,
    url: "/images/clearcoat2.webp",
    name: "HS9600",
    urlInfo: "/images/clearcoat2-info.webp",
  },
  {
    id: 3,
    url: "/images/clearcoat3.webp",
    name: "TGM730",
    urlInfo: "/images/clearcoat3-info.webp",
  },
];

const Polishing = [
  {
    id: 1,
    url: "/images/polish1.webp",
    name: "POLISH 688",
  },
  {
    id: 2,
    url: "/images/polish2.webp",
    name: "User manual",
  },
  {
    id: 3,
    url: "/images/polish3.webp",
    name: "Uses",
  },
  {
    id: 4,
    url: "/images/polish4.webp",
    name: "Before and after use",
  },
];
const Gun = [
  {
    id: 1,
    url: "/images/sung1.webp",
    name: "",
  },
  {
    id: 2,
    url: "/images/sung2.webp",
    name: "",
  },
  {
    id: 3,
    url: "/images/sung3.webp",
    name: "",
  },
  {
    id: 4,
    url: "/images/sung4.webp",
    name: "",
  },
  {
    id: 5,
    url: "/images/sung5.webp",
    name: "",
  },
  {
    id: 6,
    url: "/images/sung6.webp",
    name: "",
  },
  {
    id: 7,
    url: "/images/sung7.webp",
    name: "",
  },
];
const Paint = [
  {
    id: 1,
    url: "/images/paint175.webp",
    name: "1K A175",
  },
  {
    id: 2,
    url: "/images/paint500.webp",
    name: "1K A500",
  },
];
const Texture = [
  {
    id: 1,
    url: "/images/texture808.webp",
    name: "1K 808",
  },
];
const Thinner = [
  {
    id: 1,
    url: "/images/thinner361.webp",
    name: "A361 Thinner",
  },
];
const TableData1K = () => {
  return (
    <div className=" px-2 2xl:px-80 xl:px-64 lg:px-28  ">
      <div className="py-8  flex items-center justify-center font-bold">
        Detailed
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Product introduction
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        It consists of a variety of weathering resin, High quality, good hiding
        power, A combination of solid color, metal effect and pearl effect
        single - group primer paint, Excellent adhesion between coatings
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Product characteristics
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Metal effect, Silver powder and pearl arrange uniform rules, Good
        printing, strong covering
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Quick drying, good leveling, good construction, easy operation, small
        smell.
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆The color is rich and complete to meet the changing color of the car.
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Most of the imported raw materials, good weather resistance, make the
        car look durable and new.
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Physical parameters
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Appearance status
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          All sorts of color
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          gloss
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Semi matte
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          specific gravity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          0.95±0.05kg/L (depend on the color)
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Nonvolatile component
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          33±3% (depend on the color)
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          viscosity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          1K 150±20S (-4 cups 25℃)
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Auxiliary product
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          The base paint
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Mix of high concentration and 1K resin
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Thinner
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Advanced thinner (A380、A381、A382)
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Construction parameters
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Mix proportion
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          1 k metallic paint Volume 1 Advanced thinner Volume 1-1.2 （Mix
          according to formula and mix well before using）
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Pot life
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          12hours 25℃
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying viscosity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          14~18 second (-4 cups, 25℃)
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying tool
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Upper pot spray gun diameter of 1.2 ~ 1.5mm lower pot nozzle diameter
          is 1.2 ~ 1.7mm
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying pressure
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Gun pressure for 3 to 5 kg/c ㎡
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying method
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Spray 2 ~ 3 layers at 3.5 KG air pressure, Volatile time is 2 ~ 3
          minutes (25 ℃), Gun for 15 ~ 20 cm。Cover completely and then spray
          the last layer with 2KG air pressure。Volatilize for 5-10 minutes, the
          longest is one hour, respray varnish
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Drying time
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          At 25 ℃, in 15 minutes, 1 hour spray varnish
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Using range
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          After the P1000 # sandpaper is sanded, or the paint surface and primer
          surface after oil pollution
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Packing specification
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        4L*4;1L*12
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Storage
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-y px-2 text-sm">
        The storage period of the open tank is 5 years
      </div>
    </div>
  );
};

const TableData2K = () => {
  return (
    <div className=" px-2 2xl:px-80 xl:px-64 lg:px-28  ">
      <div className="py-8  flex items-center justify-center font-bold">
        Detailed
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Product introduction
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        It consists of a variety of weathering resin, High quality, good hiding
        power, A combination of solid color, metal effect and pearl effect
        single - group primer paint, Excellent adhesion between coatings
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Product characteristics
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Metal effect, Silver powder and pearl arrange uniform rules, Good
        printing, strong covering
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Quick drying, good leveling, good construction, easy operation, small
        smell.
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆The color is rich and complete to meet the changing color of the car.
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Most of the imported raw materials, good weather resistance, make the
        car look durable and new.
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Physical parameters
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Appearance status
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          All sorts of color
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Gloss
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          100%
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          specific gravity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          0.95±0.05kg/L (depend on the color)
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Nonvolatile component
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          33±3% (depend on the color)
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          viscosity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          2K 150±20S (-4 cups 25℃)
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Auxiliary product
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          The base paint
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          9000 or 730
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Thinner
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          2230
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Construction parameters
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Mix proportion
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          2 k metallic paint Volume 2 Advanced thinner Volume (2-1)+30% （Mix
          according to formula and mix well before using）
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Pot life
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          12hours 25℃
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying viscosity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          14~18 second (-4 cups, 25℃)
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying tool
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Upper pot spray gun diameter of 1.2 ~ 1.5mm lower pot nozzle diameter
          is 1.2 ~ 1.7mm
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying pressure
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Gun pressure for 3 to 5 kg/c ㎡
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying method
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Spray 2 ~ 3 layers at 3.5 KG air pressure, Volatile time is 2 ~ 3
          minutes (25 ℃), Gun for 15 ~ 20 cm。Cover completely and then spray
          the last layer with 2KG air pressure。Volatilize for 5-10 minutes, the
          longest is one hour, respray varnish
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Drying time
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          At 25 ℃, in 15 minutes, 1 hour spray varnish
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Using range
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          After the P1000 # sandpaper is sanded, or the paint surface and primer
          surface after oil pollution
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Packing specification
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        4L*4;1L*12
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Storage
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-y px-2 text-sm">
        The storage period of the open tank is 5 years
      </div>
    </div>
  );
};

const TableDataPrimerPutty = () => {
  return (
    <div className=" px-2 2xl:px-80 xl:px-64 lg:px-28  ">
      <div className="py-8  flex items-center justify-center font-bold">
        Detailed
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Product introduction
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        Multi-purpose nitrocellulose single group grey primer. To fill the marks
        or minor indentations left by the grinding of sandpaper，And provides
        simple isolation, is a kind of general economic type primer.
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Product characteristics
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Economy, can reduce cost.
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆The paint film is exquisite, filling ability is good.
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Single unit, easy to construct.
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Fast drying and easy to polish.
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Physical parameters
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Appearance status
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Grey thick liquid
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          gloss
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          matte
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          specific gravity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          0.95±0.05kg/L (depend on the color)
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Nonvolatile component
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          54±3%
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          viscosity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          5:1 Acetic acid butyl ester100±10S（-4 cups，25℃）
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Auxiliary product
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Thinner
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Universal thinner
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Construction parameters
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Mix proportion
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          1/0.25 + 40% thiner
          <br />
        </div>
      </div>

      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying viscosity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          18～22 seconds（-4cups，25℃））
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying tool
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Upper pot spray gun diameter of 1.4～1.6mm
          <br />
          The lower pot nozzle diameter is 1.6～1.8mm
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying pressure
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Gun pressure for 3 to 5 kg/c ㎡
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying method
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Spraying layer, each layer of evaporation time for 5 ~ 10 minutes (25
          ℃)，If the plastic parts are repaired, thin the first layer and give a
          longer evaporation
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Film thickness
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          20～30 micron
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Drying time
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Can be polished：30 minutes（25℃），10 minutes（60℃）
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Dry consolidation
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          400#～600# sandpaper to Dry grinding or 800#～1000# sandpaper to water
          grinding
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Nonapplicable range
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Does not apply to stainless steel, aluminum, zinc, iron, wood and
          other surfaces
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Considerations
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          1．Recommended for local repair, not recommended for large area
          construction;
          <br />
          2．If high adhesion and strong corrosion resistance are to be
          obtained, it is recommended to apply a dual-component paint.
          <br />
          3．It is not recommended to use diluents with high moisture content
          and too fast drying.
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Packing specification
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        1kg*12 3.7KG*4
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Storage
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-y px-2 text-sm">
        The storage period of the open tank is 2 years
      </div>
    </div>
  );
};

const Testtt = () => {
  return (
    <div className=" px-2 2xl:px-80 xl:px-64 lg:px-28  ">
      <div className="py-8  flex items-center justify-center font-bold">
        Detailed
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Product introduction
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        Multi-purpose nitrocellulose single group grey primer. To fill the marks
        or minor indentations left by the grinding of sandpaper，And provides
        simple isolation, is a kind of general economic type primer.
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Product characteristics
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Economy, can reduce cost.
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆The paint film is exquisite, filling ability is good.
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Single unit, easy to construct.
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Fast drying and easy to polish.
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Physical parameters
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Appearance status
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Transparent
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          gloss
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          matte
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          specific gravity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          0.95±0.05kg/L (depend on the color)
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Nonvolatile component
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          54±3%
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          viscosity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          5:1 Acetic acid butyl ester100±10S（-4 cups，25℃）
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Auxiliary product
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Thinner
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Universal thinner
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Construction parameters
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Mix proportion
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Use directly
        </div>
      </div>

      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying viscosity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          18～22 seconds（-4cups，25℃））
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying tool
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Upper pot spray gun diameter of 1.4～1.6mm
          <br />
          The lower pot nozzle diameter is 1.6～1.8mm
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying pressure
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Gun pressure for 3 to 5 kg/c ㎡
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying method
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Spraying layer, each layer of evaporation time for 5 ~ 10 minutes (25
          ℃)，If the plastic parts are repaired, thin the first layer and give a
          longer evaporation
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Film thickness
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          20～30 micron
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Drying time
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Can be polished：30 minutes（25℃），10 minutes（60℃）
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Dry consolidation
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          400#～600# sandpaper to Dry grinding or 800#～1000# sandpaper to water
          grinding
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Nonapplicable range
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Does not apply to stainless steel, aluminum, zinc, iron, wood and
          other surfaces
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Considerations
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          1．Recommended for local repair, not recommended for large area
          construction;
          <br />
          2．If high adhesion and strong corrosion resistance are to be
          obtained, it is recommended to apply a dual-component paint.
          <br />
          3．It is not recommended to use diluents with high moisture content
          and too fast drying.
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Packing specification
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        1kg*12
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Storage
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-y px-2 text-sm">
        The storage period of the open tank is 2 years
      </div>
    </div>
  );
};
interface Props {
  mix: boolean;
}
const TableDataClear = (params: Props) => {
  return (
    <div className=" px-2 2xl:px-80 xl:px-64 lg:px-28  ">
      <div className="py-8  flex items-center justify-center font-bold">
        Detailed
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Product introduction
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        It consists of high quality isocyanate, solvent and special additives.
        It contains high efficiency anti-ultraviolet and light absorber，Golden
        brown，Good gloss and hardness，Provide protection, durability and
        brightness.
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Product characteristics
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Economy, can reduce cost.
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆The paint film is exquisite, filling ability is good.
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Single unit, easy to construct.
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        ◆Fast drying and easy to polish.
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Physical parameters
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Appearance status
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Grey thick liquid
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Gloss
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          matte
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Specific gravity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          0.95±0.05kg/L (depend on the color)
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Nonvolatile component
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          54±3%
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          viscosity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          4:1 Acetic acid butyl ester100±10S（-4 cups，25℃）
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Auxiliary product
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Thinner
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          5% và 10%
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Construction parameters
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Mix proportion
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          {params.mix ? "thinner 0%-5%" : " thinner 10%-15%"}
        </div>
      </div>

      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying viscosity
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          18～22 seconds（-4cups，25℃））
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying tool
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Upper pot spray gun diameter of 1.4～1.6mm
          <br />
          The lower pot nozzle diameter is 1.6～1.8mm
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying pressure
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Gun pressure for 3 to 5 kg/c ㎡
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Spraying method
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Spraying layer, each layer of evaporation time for 5 ~ 10 minutes (25
          ℃)，If the plastic parts are repaired, thin the first layer and give a
          longer evaporation
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Film thickness
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          20～30 micron
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Drying time
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Can be polished：30 minutes（25℃），10 minutes（60℃）
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Dry consolidation
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          400#～600# sandpaper to Dry grinding or 800#～1000# sandpaper to water
          grinding
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Nonapplicable range
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          Does not apply to stainless steel, aluminum, zinc, iron, wood and
          other surfaces
        </div>
      </div>
      <div className="   text-sm flex">
        <div className=" font-medium w-1/5  py-3 border-x border-[#BFBFBF] border-t px-2 text-sm">
          Considerations
        </div>
        <div className="w-4/5 py-3 px-2 border-t border-r border-[#BFBFBF]">
          1．Recommended for local repair, not recommended for large area
          construction;
          <br />
          2．If high adhesion and strong corrosion resistance are to be
          obtained, it is recommended to apply a dual-component paint.
          <br />
          3．It is not recommended to use diluents with high moisture content
          and too fast drying.
        </div>
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Packing specification
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-t px-2 text-sm">
        3.7KG*4
      </div>
      <div className="font-bold py-3  border-x border-[#BFBFBF] border-t px-2 bg-[#DEEBF6]">
        Storage
      </div>
      <div className=" py-3  border-x border-[#BFBFBF] border-y px-2 text-sm">
        The storage period of the open tank is 2 years
      </div>
    </div>
  );
};
interface President {
  stt: string;
  colorCode: string;
  Brand: string;
  year: string;
  unit: string;
  BrandNumber: string;
  carBrand: string;
  ReciprPictures: string;
}
export function Demo() {
  const [item, setItem] = useState(null);
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();
  const param1 = searchParams.get("url");
  const param2 = searchParams.get("name");
  console.log("name= ", param2);

  const [dataHome, setDataHome] = useState(param2);
  const [dataUrlHome, setDataUrlHome] = useState<any>(param1);
  const [listImage, setListImage] = useState<any[]>([]);

  const [typelist, setTypeList] = useState(1);
  const [urlImage, setUrlImage] = useState("");
  const [urlImageInfo, setUrlImageInfo] = useState("");

  const [urlImageClear, setUrlImageClear] = useState("");

  const [mixHS9600, setMixHS9600] = useState(false);

  const [nameProduct, setNameProduct] = useState("");

  const [category, setCategory] = useState("");
  const [showListProduct, setShowListProduct] = useState(false);

  /* the component state is an array of presidents */
  const [pres, setPres] = useState<President[]>([]);
  const chooseProduct = (item: any) => {
    if (typelist == 5 || typelist == 7 || typelist == 8) {
    } else if (typelist == 6) {
      console.log("itemmmm= ", item);
      setUrlImageClear(item.url);
      setUrlImageInfo(item.urlInfo);

      setNameProduct(item.name);
    } else {
      // console.log("vao day item = , ", item);

      if (item.name == "2K HS9600") {
        setMixHS9600(true);
      } else {
        setMixHS9600(false);
      }

      handleScrollToTop();
      setItem(item.id);
      setUrlImage(item.url);
      setNameProduct(item.name);
    }
  };

  const onPressShowList = (type: any) => {
    if (type == 1) {
      setListImage(Paint2K);
      setTypeList(1);
      setCategory("2K Topcoat");
    } else if (type == 2) {
      setListImage(Paint1K);
      setTypeList(2);
      setCategory("1K Basecoat");
    } else if (type == 3) {
      setListImage(Epoxy);
      setTypeList(3);
      setCategory("Epoxy primer");
    } else if (type == 4) {
      setListImage(Plastic);
      setTypeList(4);
      setCategory("Plastic primer");
    } else if (type == 5) {
      setListImage(Filler);
      setTypeList(5);
      setCategory("Filler ptutty");
    } else if (type == 6) {
      setListImage(Clear);
      setTypeList(6);
      setCategory("Clear coat");
    } else if (type == 7) {
      setListImage(Polishing);
      setTypeList(7);
      setCategory("Polishing compound");
    } else if (type == 8) {
      setListImage(Gun);
      setTypeList(8);
      setCategory("Spray gun");
    } else if (type == 9) {
      setListImage(Paint);
      setTypeList(8);
      setCategory("Paint additive");
    } else if (type == 10) {
      setListImage(Texture);
      setTypeList(8);
      setCategory("Texture black");
    } else if (type == 11) {
      setListImage(Thinner);
      setTypeList(8);
      setCategory("Thinner");
    }
    setTimeout(() => {
      setShowListProduct(true);
    }, 100);
  };
  const goToTable = () => {
    setUrlImageClear("");
    setUrlImageInfo("");
    setUrlImage("");
    setShowListProduct(false);
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 'auto' cho cuộn không mượt
    });
  };
  console.log("dataHome = ", dataHome);
  const goToTableHome = () => {
    setDataHome("");
  };
  if (dataHome) {
    return (
      <div className="h-full w-full pb-12">
        <div className=" h-40 ">
          <div className="h-20"></div>
          <div className=" text-2xl md:text-4xl h-20 font-bold text-[#1a4797]  px-2 2xl:px-80 xl:px-64 lg:px-28  items-center flex transition-all duration-300">
            PRODUCTS
          </div>
        </div>

        <div>
          <div>
            <div className="px-2 2xl:px-80 xl:px-64 lg:px-28  transition-all duration-300">
              <div className="w-10/12 flex items-center">
                <div
                  className="cursor-pointer w-[50px]  flex items-center justify-center border rounded"
                  onClick={goToTableHome}
                >
                  <LucideArrowLeft className="h-[40px] w-[40px]" />
                </div>
                <div className="ml-2">Return to choose color</div>
              </div>
            </div>
          </div>

          <div className="mt-4 px-2 2xl:px-80 xl:px-64 lg:px-28 block 2xl:flex transition-all duration-300">
            <img
              src={dataUrlHome}
              className="h-auto w-auto 2xl:h-80 2xl:w-80 border transition-all duration-300"
              alt="Loago"
            />
            <div className="ml-0 2xl:ml-4 mt-2 2xl:mt-0 transition-all duration-300">
              <div className="text-2xl md:text-4xl font-semibold transition-all duration-300">
                {nameProduct}
              </div>
              <div className="mt-2">
                Category: <span className="font-bold">Clear coat</span>
              </div>
            </div>
          </div>

          <TableDataClear mix={dataHome == "2K HS9600"} />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full pb-12">
      <div className=" h-40 ">
        <div className="h-20"></div>
        <div className=" text-2xl md:text-4xl h-20 font-bold text-[#1a4797]  px-2 2xl:px-80 xl:px-64 lg:px-28  items-center flex transition-all duration-300">
          PRODUCTS
        </div>
      </div>

      {!showListProduct && (
        <div className=" px-2 2xl:px-80 xl:px-64 lg:px-28  transition-all duration-300">
          <div className="font-bold">List product</div>

          <div className="ml-4">
            <div
              className="border w-40  p-2 mt-2 rounded cursor-pointer hover:bg-[#1a4797] hover:text-white hover:translate-x-3 transition-all duration-300"
              onClick={() => {
                onPressShowList(1);
              }}
            >
              2K Topcoat
            </div>
            <div
              className="border w-40 p-2 mt-2 rounded cursor-pointer hover:bg-[#1a4797] hover:text-white hover:translate-x-3 transition-all duration-300"
              onClick={() => {
                onPressShowList(2);
              }}
            >
              1K Basecoat
            </div>
            <div
              className="border w-40 p-2 mt-2 rounded cursor-pointer hover:bg-[#1a4797] hover:text-white hover:translate-x-3 transition-all duration-300"
              onClick={() => {
                onPressShowList(3);
              }}
            >
              Epoxy primer
            </div>
            <div
              className="border w-40 p-2 mt-2 rounded cursor-pointer hover:bg-[#1a4797] hover:text-white hover:translate-x-3 transition-all duration-300"
              onClick={() => {
                onPressShowList(4);
              }}
            >
              Plastic primer
            </div>
            <div
              className="border w-40 p-2 mt-2 rounded cursor-pointer hover:bg-[#1a4797] hover:text-white hover:translate-x-3 transition-all duration-300"
              onClick={() => {
                onPressShowList(5);
              }}
            >
              Automotive putty
            </div>
            <div
              className="border w-40 p-2 mt-2 rounded cursor-pointer hover:bg-[#1a4797] hover:text-white hover:translate-x-3 transition-all duration-300"
              onClick={() => {
                onPressShowList(6);
              }}
            >
              Clear coat
            </div>

            <div
              className="border w-40 p-2 mt-2 rounded cursor-pointer hover:bg-[#1a4797] hover:text-white hover:translate-x-3 transition-all duration-300"
              onClick={() => {
                onPressShowList(7);
              }}
            >
              Polishing compound
            </div>
            <div
              className="border w-40 p-2 mt-2 rounded cursor-pointer hover:bg-[#1a4797] hover:text-white hover:translate-x-3 transition-all duration-300"
              onClick={() => {
                onPressShowList(9);
              }}
            >
              Paint additive
            </div>
            <div
              className="border w-40 p-2 mt-2 rounded cursor-pointer hover:bg-[#1a4797] hover:text-white hover:translate-x-3 transition-all duration-300"
              onClick={() => {
                onPressShowList(10);
              }}
            >
              Texture black
            </div>
            <div
              className="border w-40 p-2 mt-2 rounded cursor-pointer hover:bg-[#1a4797] hover:text-white hover:translate-x-3 transition-all duration-300"
              onClick={() => {
                onPressShowList(11);
              }}
            >
              Thinner
            </div>
            <div
              className="border w-40 p-2 mt-2 rounded cursor-pointer hover:bg-[#1a4797] hover:text-white hover:translate-x-3 transition-all duration-300"
              onClick={() => {
                onPressShowList(8);
              }}
            >
              Spray gun
            </div>
          </div>
        </div>
      )}

      {showListProduct && (
        <div>
          <div>
            <div className="px-2 2xl:px-80 xl:px-64 lg:px-28  transition-all duration-300">
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
          </div>

          {urlImage == "" && urlImageInfo == "" && (
            <div className="px-2 2xl:px-80 xl:px-64 lg:px-28 transition-all duration-300 flex flex-wrap  justify-between ">
              {listImage.map((item: any, index: any) => (
                <div
                  className="mt-6 cursor-pointer transition-all duration-300"
                  key={index}
                  onClick={() => {
                    chooseProduct(item);
                  }}
                >
                  <div className="group">
                    <img
                      src={item.url}
                      className=" w-[300px] border group-hover:border-[#1a4797]"
                      alt="Log1o"
                    />
                    <div className="w-[300px] mt-2 flex justify-center font-medium group-hover:text-[#1a4797]">
                      {item.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {urlImage != "" ? (
            <div className="mt-4 px-2 2xl:px-80 xl:px-64 lg:px-28 block 2xl:flex transition-all duration-300">
              <img
                src={urlImage}
                className="h-auto w-auto 2xl:h-80 2xl:w-80 border transition-all duration-300"
                alt="Loago"
              />
              <div className="ml-0 2xl:ml-4 mt-2 2xl:mt-0 transition-all duration-300">
                <div className="text-2xl md:text-4xl font-semibold transition-all duration-300">
                  {nameProduct}
                </div>
                <div className="mt-2">
                  Category: <span className="font-bold"> {category}</span>
                </div>
              </div>
            </div>
          ) : null}

          {urlImageInfo != "" ? (
            // <div className="mt-4 px-2 2xl:px-80 xl:px-64 lg:px-28  transition-all duration-300">
            //   <img
            //     src={urlImageClear}
            //     className="h-auto w-auto 2xl:h-80 2xl:w-80 border transition-all duration-300"
            //     alt="Loago"
            //   />

            //   <div className="  2xl:ml-4 mt-2 2xl:mt-0 transition-all duration-300  flex items-center justify-center">
            //     <img
            //       src={urlImageInfo}
            //       className="mt-5 h-auto w-11/12  border transition-all duration-300"
            //       alt="Loagoinfo"
            //     />
            //   </div>
            // </div>
            <div>
              <div className="mt-4 px-2 2xl:px-80 xl:px-64 lg:px-28 block 2xl:flex transition-all duration-300">
                <img
                  src={urlImageClear}
                  className="h-auto w-auto 2xl:h-80 2xl:w-80 border transition-all duration-300"
                  alt="Loago"
                />
                <div className="ml-0 2xl:ml-4 mt-2 2xl:mt-0 transition-all duration-300">
                  <div className="text-2xl md:text-4xl font-semibold transition-all duration-300">
                    {nameProduct}
                  </div>
                  <div className="mt-2">
                    Category: <span className="font-bold"> {category}</span>
                  </div>
                </div>
              </div>
              <div className="  mt-4 px-2 2xl:px-80 xl:px-64 lg:px-28 block 2xl:flex transition-all duration-300">
                <img
                  src={urlImageInfo}
                  className="mt-5 h-auto w-11/12  border transition-all duration-300"
                  alt="Loagoinfo"
                />
              </div>
            </div>
          ) : null}

          {urlImage != "" ? (
            typelist == 1 ? (
              <TableData2K />
            ) : typelist == 3 ? (
              <TableDataPrimerPutty />
            ) : typelist == 2 ? (
              <TableData1K />
            ) : typelist == 4 ? (
              <Testtt />
            ) : (
              <TableDataClear mix={mixHS9600} />
            )
          ) : null}
        </div>
      )}
    </div>
  );
}
