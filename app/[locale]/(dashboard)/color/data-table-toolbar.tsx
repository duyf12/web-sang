/** @format */

"use client";

import { Table } from "@tanstack/react-table";
import {
  ArrowDownToLine,
  ArrowRightToLine,
  ArrowUpCircle,
  ArrowUpToLine,
  CheckCircle2,
  Circle,
  HelpCircle,
  PackagePlusIcon,
  Trash2Icon,
  X,
  XCircle,
  RefreshCcw,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";

import { api } from "~/lib/api/client";
import { useStore } from "~/app/[locale]/(dashboard)/color/store";
import { removeVietnameseTones } from "./index";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Data from "./data";
export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in-progress",
    label: "In Progress",
    icon: ArrowUpCircle,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownToLine,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightToLine,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpToLine,
  },
];
const Audi = [
  { value: "", name: "All" },
  {
    value: "A6L",
    name: "A6L",
  },
  {
    value: "AUDI",
    name: "AUDI",
  },
  {
    value: "Audi A3",
    name: "Audi A3",
  },
  {
    value: "Audi A4L",
    name: "Audi A4L",
  },
  {
    value: "Audi A6",
    name: "Audi A6",
  },
  {
    value: "Audi A6L",
    name: "Audi A6L",
  },
  {
    value: "Audi Q3",
    name: "Audi Q3",
  },
  {
    value: "Audi Q5",
    name: "Audi Q5",
  },
  {
    value: "Audi Q7",
    name: "Audi Q7",
  },
];
const BaicMotor = [
  { value: "", name: "All" },
  {
    value: "BAIC",
    name: "BAIC",
  },
  {
    value: "BAIC EC150",
    name: "BAIC EC150",
  },
  {
    value: "BAIC EC180",
    name: "BAIC EC180",
  },
  {
    value: "BAIC EC200",
    name: "BAIC EC200",
  },
  {
    value: "BAIC EV",
    name: "BAIC EV",
  },
  {
    value: "BAIC EX260",
    name: "BAIC EX260",
  },
  {
    value: "baic senova D50",
    name: "baic senova D50",
  },
  {
    value: "baic ww 205",
    name: "baic ww 205",
  },
  {
    value: "baic ww 306",
    name: "baic ww 306",
  },
  {
    value: "baic ww 307",
    name: "baic ww 307",
  },
  {
    value: "baic ww M20",
    name: "baic ww M20",
  },
  {
    value: "baic ww M30",
    name: "baic ww M30",
  },
  {
    value: "baic ww M35",
    name: "baic ww M35",
  },
  {
    value: "baic ww S50",
    name: "baic ww S50",
  },
  {
    value: "baic-hs H2",
    name: "baic-hs H2",
  },
  {
    value: "baic-hs H3",
    name: "baic-hs H3",
  },
  {
    value: "baic-hs S2",
    name: "baic-hs S2",
  },
  {
    value: "baic-hs S3",
    name: "baic-hs S3",
  },
  {
    value: "baic-hs S6",
    name: "baic-hs S6",
  },
  {
    value: "S6",
    name: "S6",
  },
];
const Besturn = [
  { value: "", name: "All" },
  {
    value: "BESTUNE B50",
    name: "BESTUNE B50",
  },
  {
    value: "BESTUNE B70",
    name: "BESTUNE B70",
  },
  {
    value: "BESTUNE X80",
    name: "BESTUNE X80",
  },
];
const BMW = [
  { value: "", name: "All" },
  {
    value: "3 Series",
    name: "3 Series",
  },
  {
    value: "5 Series",
    name: "5 Series",
  },
  {
    value: "7 Series",
    name: "7 Series",
  },
  {
    value: "BMW",
    name: "BMW",
  },
  {
    value: "BMW 3",
    name: "BMW 3",
  },
  {
    value: "BMW 5",
    name: "BMW 5",
  },
  {
    value: "BMW 7",
    name: "BMW 7",
  },
  {
    value: "BMW X3",
    name: "BMW X3",
  },
  {
    value: "BMW X5",
    name: "BMW X5",
  },
  {
    value: "X1",
    name: "X1",
  },
];
const BrillianceAuto = [
  { value: "", name: "All" },
  {
    value: "brilliance",
    name: "brilliance",
  },
  {
    value: "H530",
    name: "H530",
  },
  {
    value: "Haishi",
    name: "Haishi",
  },
  {
    value: "Haishi X30",
    name: "Haishi X30",
  },
  {
    value: "Ode to China 7",
    name: "Ode to China 7",
  },
  {
    value: "S30",
    name: "S30",
  },
  {
    value: "wagon",
    name: "wagon",
  },
  {
    value: "Zunchi",
    name: "Zunchi",
  },
];
const Buick = [
  { value: "", name: "All" },
  {
    value: "BUICK",
    name: "BUICK",
  },
  {
    value: "Buick Enclave",
    name: "Buick Enclave",
  },
  {
    value: "Buick encore",
    name: "Buick encore",
  },
  {
    value: "Buick envision",
    name: "Buick envision",
  },
  {
    value: "Buick Excelle",
    name: "Buick Excelle",
  },
  {
    value: "Buick Excelle GT",
    name: "Buick Excelle GT",
  },
  {
    value: "Buick GL6",
    name: "Buick GL8",
  },
  {
    value: "Buick Lacrosse",
    name: "Buick Lacrosse",
  },
  {
    value: "Buick Regal",
    name: "Buick Regal",
  },
  {
    value: "Buick VERANO",
    name: "Buick VERANO",
  },
  {
    value: "ENVISION",
    name: "ENVISION",
  },
  {
    value: "Excelle XT",
    name: "ExcelleGT",
  },
  {
    value: "GL8",
    name: "GL8",
  },
  {
    value: "Lacrosse",
    name: "Lacrosse",
  },
  {
    value: "Regal",
    name: "Regal",
  },
];
const BYD = [
  { value: "", name: "All" },
  {
    value: "BYD",
    name: "BYD",
  },
  {
    value: "BYD F0",
    name: "BYD F0",
  },
  {
    value: "BYD F3",
    name: "BYD F3",
  },
  {
    value: "BYD F3R",
    name: "BYD F3R",
  },
  {
    value: "BYD F6",
    name: "BYD F6",
  },
  {
    value: "BYD FLYER",
    name: "BYD FLYER",
  },
  {
    value: "BYD G3",
    name: "BYD G3",
  },
  {
    value: "BYD G5",
    name: "BYD G5",
  },
  {
    value: "BYD G6",
    name: "BYD G6",
  },
  {
    value: "BYD QING",
    name: "BYD QING",
  },
  {
    value: "BYD QING PRO",
    name: "BYD QING PRO",
  },
  {
    value: "BYD S6",
    name: "BYD S6",
  },
  {
    value: "BYD S7",
    name: "BYD S7",
  },
  {
    value: "BYD Sirui",
    name: "BYD Sirui",
  },
  {
    value: "BYD SONG",
    name: "BYD SONG",
  },
  {
    value: "BYD SONG MAX",
    name: "BYD SONG MAX",
  },
  {
    value: "BYD Surui",
    name: "BYD Surui",
  },
  {
    value: "BYD Tang",
    name: "BYD Tang",
  },
  {
    value: "BYD YUAN",
    name: "BYD YUAN",
  },
  {
    value: "S7",
    name: "S7",
  },
];
const Cadilac = [
  { value: "", name: "All" },
  {
    value: "ATS-L",
    name: "ATS-L",
  },
  {
    value: "CT6",
    name: "CT6",
  },
  {
    value: "XT5",
    name: "XT5",
  },
  {
    value: "XTS",
    name: "XTS",
  },
];
const Changan = [
  { value: "", name: "All" },
  {
    value: "Alto",
    name: "Alto",
  },
  {
    value: "CHANA",
    name: "CHANA",
  },
  {
    value: "CHANGNA",
    name: "CHANGNA",
  },
  {
    value: "CHANGNA ALSVIN",
    name: "CHANGNA ALSVIN",
  },
  {
    value: "CHANGNA ALSVIN V3",
    name: "CHANGNA ALSVIN V3",
  },
  {
    value: "CHANGNA ALSVIN V7",
    name: "CHANGNA ALSVIN V7",
  },
  {
    value: "CHANGNA Auchan",
    name: "CHANGNA Auchan",
  },
  {
    value: "CHANGNA Benni",
    name: "CHANGNA Benni",
  },
  {
    value: "CHANGNA CS15",
    name: "CHANGNA CS15",
  },
  {
    value: "CHANGNA CS35",
    name: "CHANGNA CS35",
  },
  {
    value: "CHANGNA CS75",
    name: "CHANGNA CS75",
  },
  {
    value: "CHANGNA CS75 coupe",
    name: "CHANGNA CS75 coupe",
  },
  {
    value: "CHANGNA CS75 PLUS",
    name: "CHANGNA CS75 PLUS",
  },
  {
    value: "CHANGNA CX20",
    name: "CHANGNA CX20",
  },
  {
    value: "CHANGNA CX70",
    name: "CHANGNA CX70",
  },
  {
    value: "CHANGNA EADO",
    name: "CHANGNA EADO",
  },
  {
    value: "CHANGNA Eulove",
    name: "CHANGNA Eulove",
  },
  {
    value: "CHANGNA HONOR",
    name: "CHANGNA HONOR",
  },
  {
    value: "CHANGNA STAR",
    name: "CHANGNA STAR",
  },
  {
    value: "CHANGNA STAR2",
    name: "CHANGNA STAR2",
  },
  {
    value: "CHANGNA STAR3",
    name: "CHANGNA STAR3",
  },
  {
    value: "CS75",
    name: "CS75",
  },
  {
    value: "CS75 PLUS",
    name: "CS75 PLUS",
  },
  {
    value: "CS76",
    name: "CS76",
  },
  {
    value: "EADO",
    name: "EADO",
  },
  {
    value: "Lingyang",
    name: "Lingyang",
  },
  {
    value: "Swifts",
    name: "Swifts",
  },
  {
    value: "SX4",
    name: "SX4",
  },
  {
    value: "VITARA suzuki",
    name: "VITARA suzuki",
  },
];
const Changhe = [
  { value: "", name: "All" },
  {
    value: "Beidou",
    name: "Beidou",
  },
  {
    value: "Beidouxing",
    name: "Beidouxing",
  },
  {
    value: "Changhe",
    name: "Changhe",
  },
  {
    value: "Ideal",
    name: "Ideal",
  },
  {
    value: "Liana",
    name: "Liana",
  },
  {
    value: "MOTO",
    name: "MOTO",
  },
];
const Chevrolet = [
  { value: "", name: "All" },
  {
    value: "AVEO",
    name: "AVEO",
  },
  {
    value: "Captiva",
    name: "Captiva",
  },
  {
    value: "Cavalier",
    name: "Cavalier",
  },
  {
    value: "Chevrolet",
    name: "Chevrolet",
  },
  {
    value: "Cruze",
    name: "Cruze",
  },
  {
    value: "Epica",
    name: "Epica",
  },
  {
    value: "Equinox",
    name: "Equinox",
  },
  {
    value: "LOVA",
    name: "LOVA",
  },
  {
    value: "Mabibu",
    name: "Mabibu",
  },
  {
    value: "Malibu",
    name: "Malibu",
  },
  {
    value: "Malibu XL",
    name: "Malibu XL",
  },
  {
    value: "old Sail",
    name: "old Sail",
  },
  {
    value: "SAIL",
    name: "SAIL",
  },
  {
    value: "SPARK",
    name: "SPARK",
  },
  {
    value: "Tracker",
    name: "Tracker",
  },
];
const CHZC = [
  { value: "", name: "All" },
  {
    value: "TAXI",
    name: "TAXI",
  },
];
const Citroen = [
  { value: "", name: "All" },
  {
    value: "C2",
    name: "C2",
  },
  {
    value: "C4",
    name: "C4",
  },
  {
    value: "C4 C-Quatre",
    name: "C4 C-Quatre",
  },
  {
    value: "C4L",
    name: "C4L",
  },
  {
    value: "C5",
    name: "C5",
  },
  {
    value: "Citroen",
    name: "Citroen",
  },
  {
    value: "C-Quatre",
    name: "C-Quatre",
  },
  {
    value: "C-Triomphe",
    name: "C-Triomphe",
  },
  {
    value: "Elysee",
    name: "Elysee",
  },
  {
    value: "Fukang",
    name: "Fukang",
  },
  {
    value: "LINGZHI",
    name: "LINGZHI",
  },
  {
    value: "Picasso",
    name: "Picasso",
  },
  {
    value: "triumph",
    name: "triumph",
  },
];
const Dongfeng = [
  { value: "", name: "All" },
  {
    value: "AEOLUS A30",
    name: "AEOLUS A30",
  },
  {
    value: "AEOLUS AX3",
    name: "AEOLUS AX3",
  },
  {
    value: "AEOLUS AX7",
    name: "AEOLUS AX7",
  },
  {
    value: "DF LINGZHI",
    name: "DF LINGZHI",
  },
  {
    value: "DF S500",
    name: "DF S500",
  },
  {
    value: "DFSK",
    name: "DFSK",
  },
  {
    value: "DFSK K07",
    name: "DFSK K07",
  },
  {
    value: "DFSK K17",
    name: "DFSK K17",
  },
  {
    value: "DFSK V27",
    name: "DFSK V27",
  },
  {
    value: "Joyear",
    name: "Joyear",
  },
  {
    value: "Joyear X5",
    name: "Joyear X5",
  },
  {
    value: "R30",
    name: "R30",
  },
  {
    value: "R50",
    name: "R50",
  },
  {
    value: "SX6",
    name: "SX6",
  },
  {
    value: "T70",
    name: "T70",
  },
  {
    value: "T70X",
    name: "T70X",
  },
];
const Enranger = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const FAW = [
  { value: "", name: "All" },
  {
    value: "FAW Jiabao",
    name: "FAW Jiabao",
  },
  {
    value: "FAW Jiaxing",
    name: "FAW Jiaxing",
  },
  {
    value: "FAW Junpai",
    name: "FAW Junpai",
  },
  {
    value: "FAWcar",
    name: "FAWcar",
  },
  {
    value: "HONGQI H5",
    name: "HONGQI H5",
  },
  {
    value: "SHENGSHI",
    name: "SHENGSHI",
  },
  {
    value: "Xenia",
    name: "Xenia",
  },
  {
    value: "XENIA S80",
    name: "XENIA S80",
  },
  {
    value: "XIALI",
    name: "XIALI",
  },
  {
    value: "XIALI N3",
    name: "XIALI N3",
  },
  {
    value: "XIALI N5",
    name: "XIALI N5",
  },
  {
    value: "XIALI V5",
    name: "XIALI V5",
  },
  {
    value: "XIALI VIZI",
    name: "XIALI VIZI",
  },
  {
    value: "XIALI WEIZHI",
    name: "XIALI WEIZHI",
  },
];
const Fiat = [
  { value: "", name: "All" },
  {
    value: "Fiat",
    name: "Fiat",
  },
  {
    value: "viaggio",
    name: "viaggio",
  },
];
const Ford = [
  { value: "", name: "All" },
  {
    value: "EcoSport",
    name: "EcoSport",
  },
  {
    value: "EDGE",
    name: "EDGE",
  },
  {
    value: "Escort",
    name: "Escort",
  },
  {
    value: "FIESTA",
    name: "FIESTA",
  },
  {
    value: "FOCUS",
    name: "FOCUS",
  },
  {
    value: "FOCUS (old)",
    name: "FOCUS (old)",
  },
  {
    value: "Ford Transit",
    name: "Ford Transit",
  },
  {
    value: "KUGA",
    name: "KUGA",
  },
  {
    value: "MONDEO",
    name: "MONDEO",
  },
  {
    value: "S-MAX",
    name: "S-MAX",
  },
  {
    value: "Taurus",
    name: "Taurus",
  },
];
const Foton = [
  { value: "", name: "All" },
  {
    value: "AUMAN",
    name: "AUMAN",
  },
  {
    value: "AUMAN EST",
    name: "AUMAN EST",
  },
  {
    value: "AUMAN ETX",
    name: "AUMAN ETX",
  },
  {
    value: "AUMAN GTL",
    name: "AUMAN GTL",
  },
  {
    value: "AUMAN old",
    name: "AUMAN old",
  },
  {
    value: "Foton G9",
    name: "Foton G9",
  },
  {
    value: "Foton H",
    name: "Foton H",
  },
  {
    value: "OLLIN CTX",
    name: "OLLIN CTX",
  },
];
const Geely = [
  { value: "", name: "All" },
  {
    value: "EC7",
    name: "EC7",
  },
  {
    value: "emgrand",
    name: "emgrand",
  },
  {
    value: "Englon SC7",
    name: "Englon SC7",
  },
  {
    value: "Geely",
    name: "Geely",
  },
  {
    value: "GEELY Binyue",
    name: "GEELY Binyue",
  },
  {
    value: "Geely boyue",
    name: "Geely boyue",
  },
  {
    value: "GEELY CK",
    name: "GEELY CK",
  },
  {
    value: "GL",
    name: "GL",
  },
  {
    value: "Gleagle",
    name: "Gleagle",
  },
  {
    value: "GS",
    name: "GS",
  },
  {
    value: "Haoqing",
    name: "Haoqing",
  },
  {
    value: "ICON",
    name: "ICON",
  },
  {
    value: "Jingang",
    name: "Jingang",
  },
  {
    value: "new Dihao",
    name: "new Dihao",
  },
  {
    value: "New Yuanjing",
    name: "Yuanjing",
  },
  {
    value: "Panda",
    name: "Panda",
  },
  {
    value: "RS",
    name: "RS",
  },
  {
    value: "Vision",
    name: "Vision",
  },
  {
    value: "Yuanjing",
    name: "Yuanjing",
  },
  {
    value: "Yuanjing X1",
    name: "Yuanjing X1",
  },
  {
    value: "Yuanjing X6",
    name: "Yuanjing X6",
  },
];
const GreatWallHaval = [
  { value: "", name: "All" },
  {
    value: "Great Wall C30",
    name: "Great Wall C30",
  },
  {
    value: "Great Wall C50",
    name: "Great Wall C50",
  },
  {
    value: "Great Wall FLORID",
    name: "Great Wall FLORID",
  },
  {
    value: "Great Wall GWPERI",
    name: "Great Wall GWPERI",
  },
  {
    value: "Great Wall H6",
    name: "Great Wall H6",
  },
  {
    value: "Great Wall M2",
    name: "Great Wall M2",
  },
  {
    value: "Great Wall M4",
    name: "Great Wall M4",
  },
  {
    value: "Great Wall Pickup",
    name: "Great Wall Pickup",
  },
  {
    value: "GreatWall",
    name: "GreatWall",
  },
  {
    value: "H5",
    name: "H5",
  },
  {
    value: "haval",
    name: "haval",
  },
  {
    value: "Haval H1",
    name: "Haval H1",
  },
  {
    value: "Haval H2",
    name: "Haval H2",
  },
  {
    value: "Haval H3",
    name: "Haval H3",
  },
  {
    value: "Haval H5",
    name: "Haval H5",
  },
  {
    value: "Haval H6",
    name: "Haval H6",
  },
  {
    value: "Haval H8",
    name: "Haval H8",
  },
  {
    value: "WEY VV5",
    name: "WEY VV5",
  },
  {
    value: "WEY VV7",
    name: "WEY VV7",
  },
];
const Hafei = [
  { value: "", name: "All" },
  {
    value: "HAFEI",
    name: "HAFEI",
  },
];
const Haima = [
  { value: "", name: "All" },
  {
    value: "Haima",
    name: "Haima",
  },
  {
    value: "HAIMA 8S",
    name: "HAIMA 8S",
  },
  {
    value: "HAIMA PRIMA",
    name: "HAIMA PRIMA",
  },
  {
    value: "HAIMA S7",
    name: "HAIMA S7",
  },
];
const Hanteng = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const HAWTAI = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const Honda = [
  { value: "", name: "All" },
  {
    value: "Accord",
    name: "Accord",
  },
  {
    value: "Accord Crosstour",
    name: "Accord Crosstour",
  },
  {
    value: "City",
    name: "City",
  },
  {
    value: "civic",
    name: "civic",
  },
  {
    value: "CRV",
    name: "CRV",
  },
  {
    value: "Elysion",
    name: "Elysion",
  },
  {
    value: "Fit",
    name: "Fit",
  },
  {
    value: "Honda",
    name: "Honda",
  },
  {
    value: "Honda Accord",
    name: "Honda Accord",
  },
  {
    value: "Honda City",
    name: "Honda City",
  },
  {
    value: "Honda CIVIC",
    name: "Honda CIVIC",
  },
  {
    value: "Honda Crider",
    name: "Honda Crider",
  },
  {
    value: "Honda CRV",
    name: "Honda CRV",
  },
  {
    value: "Honda EVERUS",
    name: "Honda EVERUS",
  },
  {
    value: "Honda Fit",
    name: "Honda Fit",
  },
  {
    value: "Honda Greiz",
    name: "Honda Greiz",
  },
  {
    value: "Honda JADE",
    name: "Honda JADE",
  },
  {
    value: "Honda Odyssey",
    name: "Honda Odyssey",
  },
  {
    value: "Honda URV",
    name: "Honda URV",
  },
  {
    value: "Honda VEZEL",
    name: "Honda VEZEL",
  },
  {
    value: "Honda XRV",
    name: "Honda XRV",
  },
  {
    value: "Odyssey",
    name: "Odyssey",
  },
  {
    value: "XRV",
    name: "XRV",
  },
];
const Hyundai = [
  { value: "", name: "All" },
  {
    value: "Accent",
    name: "Accent",
  },
  {
    value: "Celesta,Elantra",
    name: "Celesta,Elantra",
  },
  {
    value: "Elantra",
    name: "Elantra",
  },
  {
    value: "Hyundai",
    name: "Hyundai",
  },
  {
    value: "i30",
    name: "i30",
  },
  {
    value: "ix25",
    name: "ix25",
  },
  {
    value: "ix35",
    name: "ix35",
  },
  {
    value: "LA FESTA",
    name: "LA FESTA",
  },
  {
    value: "MISTRA",
    name: "MISTRA",
  },
  {
    value: "Santafe",
    name: "Santafe",
  },
  {
    value: "Sonata",
    name: "Sonata",
  },
  {
    value: "Sonata 8",
    name: "Sonata 8",
  },
  {
    value: "Sonata 9",
    name: "Sonata 9",
  },
  {
    value: "Tucson",
    name: "Tucson",
  },
  {
    value: "Tucson L",
    name: "Tucson L",
  },
  {
    value: "VERNA",
    name: "VERNA",
  },
];
const IndustrialLogo = [
  { value: "", name: "All" },
  {
    value: "Industrial Logo",
    name: "Industrial Logo",
  },
];
const Isuzu = [
  { value: "", name: "All" },
  {
    value: "ISUZU",
    name: "ISUZU",
  },
];
const Iveco = [
  { value: "", name: "All" },
  {
    value: "NAVECO",
    name: "NAVECO",
  },
];
const JAC = [
  { value: "", name: "All" },
  {
    value: "jac",
    name: "jac",
  },
  {
    value: "Ruifeng",
    name: "Ruifeng",
  },
  {
    value: "Ruifeng S3",
    name: "Ruifeng S3",
  },
  {
    value: "Ruifeng S5",
    name: "Ruifeng S5",
  },
  {
    value: "Weiling",
    name: "Weiling",
  },
];
const JeepFca = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const JMC = [
  { value: "", name: "All" },
  {
    value: "Baodian",
    name: "Baodian",
  },
  {
    value: "JMC",
    name: "JMC",
  },
  {
    value: "JMC S330",
    name: "JMC S330",
  },
  {
    value: "JMC Truck",
    name: "JMC Truck",
  },
  {
    value: "LANDWIND X5",
    name: "LANDWIND X5",
  },
  {
    value: "S330",
    name: "S330",
  },
  {
    value: "Yuhu3",
    name: "Yuhu3",
  },
];
const Kia = [
  { value: "", name: "All" },
  {
    value: "cerato",
    name: "cerato",
  },
  {
    value: "Forte",
    name: "Forte",
  },
  {
    value: "K2",
    name: "K2",
  },
  {
    value: "K3",
    name: "K3",
  },
  {
    value: "K4",
    name: "K4",
  },
  {
    value: "K5",
    name: "K5",
  },
  {
    value: "K9",
    name: "K9",
  },
  {
    value: "KIA",
    name: "KIA",
  },
  {
    value: "Kia Sportage",
    name: "Kia Sportage",
  },
  {
    value: "KX3",
    name: "KX3",
  },
  {
    value: "KX5",
    name: "KX5",
  },
  {
    value: "Qianlima",
    name: "Qianlima",
  },
  {
    value: "RIO",
    name: "RIO",
  },
  {
    value: "SORENTO",
    name: "SORENTO",
  },
  {
    value: "SOUL",
    name: "SOUL",
  },
  {
    value: "Sportage",
    name: "Sportage",
  },
  {
    value: "Sportage R",
    name: "Sportage R",
  },
];
const LandRover = [
  { value: "", name: "All" },
  {
    value: "discovery",
    name: "discovery",
  },
  {
    value: "Evoque",
    name: "Evoque",
  },
  {
    value: "Range Rover",
    name: "Range Rover",
  },
];
const Leopaard = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const Lexus = [
  { value: "", name: "All" },
  {
    value: "ES",
    name: "ES",
  },
];
const Lifan = [
  { value: "", name: "All" },
  {
    value: "Lifan",
    name: "Lifan",
  },
];
const Lincoln = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const Luxgen = [
  { value: "", name: "All" },
  {
    value: "Luxgen",
    name: "Luxgen",
  },
  {
    value: "LUXGEN 6",
    name: "LUXGEN 6",
  },
  {
    value: "LUXGEN 7",
    name: "LUXGEN 7",
  },
];
const Maple = [
  { value: "", name: "All" },
  {
    value: "SMA",
    name: "SMA",
  },
];
const Mazda = [
  { value: "", name: "All" },
  {
    value: "ATENZA",
    name: "ATENZA",
  },
  {
    value: "Axela",
    name: "Axela",
  },
  {
    value: "CX5",
    name: "CX5",
  },
  {
    value: "CX-5",
    name: "CX5-",
  },
  {
    value: "CX-7",
    name: "CX-7",
  },
  {
    value: "MAZDA",
    name: "MAZDA",
  },
  {
    value: "Mazda2",
    name: "Mazda2",
  },
  {
    value: "Mazda3",
    name: "Mazda3",
  },
  {
    value: "Mazda6",
    name: "Mazda6",
  },
  {
    value: "Mazda8",
    name: "Mazda8",
  },
];
const MercedesBenz = [
  { value: "", name: "All" },
  {
    value: "BENZ E",
    name: "BENZ E",
  },
  {
    value: "Benz GLA",
    name: "Benz GLA",
  },
  {
    value: "Benz GLC",
    name: "Benz GLC",
  },
];
const MG = [
  { value: "", name: "All" },
  {
    value: "MG",
    name: "MG",
  },
  {
    value: "MG GS",
    name: "MG GS",
  },
  {
    value: "MG GT",
    name: "MG GT",
  },
  {
    value: "MG6",
    name: "MG6",
  },
];
const Mini = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const Mitsubishi = [
  { value: "", name: "All" },
  {
    value: "Lancer",
    name: "Lancer",
  },
  {
    value: "Lancer EX",
    name: "Lancer EX",
  },
  {
    value: "Mitsubishi ASX",
    name: "Mitsubishi ASX",
  },
  {
    value: "Old",
    name: "Old",
  },
  {
    value: "Outlander",
    name: "Outlander",
  },
  {
    value: "PAJERO",
    name: "PAJERO",
  },
];
const Nissan = [
  { value: "", name: "All" },
  {
    value: "LANNIA",
    name: "LANNIA",
  },
  {
    value: "LIVINA",
    name: "LIVINA",
  },
  {
    value: "MURANO",
    name: "MURANO",
  },
  {
    value: "NISSAN",
    name: "NISSAN",
  },
  {
    value: "Q70L",
    name: "Q70L",
  },
  {
    value: "QASHQAI",
    name: "QASHQAI",
  },
  {
    value: "SUNNY",
    name: "SUNNY",
  },
  {
    value: "SYLPHY",
    name: "SYLPHY",
  },
  {
    value: "teana",
    name: "teana",
  },
  {
    value: "TIIDA",
    name: "TIIDA",
  },
  {
    value: "VAN",
    name: "VAN",
  },
  {
    value: "Venucia",
    name: "Venucia",
  },
  {
    value: "X-TRAIL",
    name: "X-TRAIL",
  },
];
const Other = [
  { value: "", name: "All" },
  {
    value: "Engineering",
    name: "Engineering",
  },
  {
    value: "Forklift",
    name: "Forklift",
  },
  {
    value: "Military",
    name: "Military",
  },
  {
    value: "OTHER",
    name: "OTHER",
  },
  {
    value: "police car",
    name: "police car",
  },
  {
    value: "Post Car",
    name: "Post Car",
  },
  {
    value: "Wuzheng",
    name: "Wuzheng",
  },
  {
    value: "XPEV G3",
    name: "XPEV G3",
  },
];
const Peugeot = [
  { value: "", name: "All" },
  {
    value: "3008",
    name: "3008",
  },
  {
    value: "301",
    name: "301",
  },
  {
    value: "408",
    name: "408",
  },
  {
    value: "508",
    name: "508",
  },
  {
    value: "DS DS4",
    name: "DS DS4",
  },
  {
    value: "DS DS5",
    name: "DS DS5",
  },
  {
    value: "DS DS5LS",
    name: "DS DS5LS",
  },
  {
    value: "DS DS6",
    name: "DS DS6",
  },
  {
    value: "Peugeot",
    name: "Peugeot",
  },
  {
    value: "Peugeot 2008",
    name: "Peugeot 2008",
  },
  {
    value: "Peugeot 206",
    name: "Peugeot 206",
  },
  {
    value: "Peugeot 207",
    name: "Peugeot 207",
  },
  {
    value: "Peugeot 3008",
    name: "Peugeot 3008",
  },
  {
    value: "Peugeot 301",
    name: "Peugeot 301",
  },
  {
    value: "Peugeot 307",
    name: "Peugeot 307",
  },
  {
    value: "Peugeot 308",
    name: "Peugeot 308",
  },
  {
    value: "Peugeot 4008",
    name: "Peugeot 4008",
  },
  {
    value: "Peugeot 408",
    name: "Peugeot 408",
  },
  {
    value: "Peugeot 508",
    name: "Peugeot 508",
  },
];
const Porsche = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const Qoros = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const Qr = [
  { value: "", name: "All" },
  {
    value: "3XE",
    name: "3XE",
  },
  {
    value: "A1",
    name: "A1",
  },
  {
    value: "A3",
    name: "A3",
  },
  {
    value: "A5",
    name: "A5",
  },
  {
    value: "Arize 5",
    name: "Arize 5",
  },
  {
    value: "ARRIZO GX",
    name: "ARRIZO GX",
  },
  {
    value: "ARRIZO3",
    name: "ARRIZO3",
  },
  {
    value: "ARRIZO5",
    name: "ARRIZO5",
  },
  {
    value: "ARRIZO7",
    name: "ARRIZO7",
  },
  {
    value: "Chery",
    name: "Chery",
  },
  {
    value: "cowin",
    name: "cowin",
  },
  {
    value: "CROSS",
    name: "CROSS",
  },
  {
    value: "EQ1",
    name: "EQ1",
  },
  {
    value: "JETOUR X70",
    name: "JETOUR X70",
  },
  {
    value: "QQ",
    name: "QQ",
  },
  {
    value: "TIGGO3",
    name: "TIGGO3",
  },
  {
    value: "TIGGO5",
    name: "TIGGO5",
  },
  {
    value: "TIGGO7",
    name: "TIGGO7",
  },
  {
    value: "TIGGO8",
    name: "TIGGO8",
  },
  {
    value: "V5",
    name: "V5",
  },
];
const Ral = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const Renault = [
  { value: "", name: "All" },
  {
    value: "KADJAR",
    name: "KADJAR",
  },
  {
    value: "KOLEOS",
    name: "KOLEOS",
  },
];
const SaicGeneral = [
  { value: "", name: "All" },
  {
    value: "SAIC",
    name: "SAIC",
  },
];
const SaicMaxus = [
  { value: "", name: "All" },
  {
    value: "D90",
    name: "D90",
  },
  {
    value: "G10",
    name: "G10",
  },
  {
    value: "G50",
    name: "G50",
  },
  {
    value: "V80",
    name: "V80",
  },
];
const SaicRover = [
  { value: "", name: "All" },
  {
    value: "350",
    name: "350",
  },
  {
    value: "360",
    name: "360",
  },
  {
    value: "550",
    name: "550",
  },
  {
    value: "e16",
    name: "e16",
  },
  {
    value: "e50",
    name: "e50",
  },
  {
    value: "e550",
    name: "e550",
  },
  {
    value: "ei5",
    name: "ei5",
  },
  {
    value: "eRX5",
    name: "eRX5",
  },
  {
    value: "i5",
    name: "i5",
  },
  {
    value: "i6",
    name: "i6",
  },
  {
    value: "Roewe",
    name: "Roewe",
  },
  {
    value: "RX5",
    name: "RX5",
  },
  {
    value: "RX8",
    name: "RX8",
  },
  {
    value: "w5",
    name: "w5",
  },
];
const Sinotruk = [
  { value: "", name: "All" },
  {
    value: "142",
    name: "142",
  },
  {
    value: "153",
    name: "153",
  },
  {
    value: "Aowei",
    name: "Aowei",
  },
  {
    value: "Auria",
    name: "Auria",
  },
  {
    value: "Balong",
    name: "Balong",
  },
  {
    value: "Dayun N9H",
    name: "Dayun N9H",
  },
  {
    value: "DE LONG",
    name: "DE LONG",
  },
  {
    value: "DE LONG3000",
    name: "DE LONG3000",
  },
  {
    value: "DE LONGx3000",
    name: "DE LONGx3000",
  },
  {
    value: "DE LONGx5000",
    name: "DE LONGx5000",
  },
  {
    value: "delong3000",
    name: "delong3000",
  },
  {
    value: "DF Balong",
    name: "DF Balong",
  },
  {
    value: "DF dalishen",
    name: "DF dalishen",
  },
  {
    value: "DF Tianjing",
    name: "DF Tianjing",
  },
  {
    value: "DF Tianlong",
    name: "DF Tianlong",
  },
  {
    value: "Hanwei",
    name: "Hanwei",
  },
  {
    value: "haowo",
    name: "haowo",
  },
  {
    value: "HONGYAN",
    name: "HONGYAN",
  },
  {
    value: "HOWO",
    name: "HOWO",
  },
  {
    value: "HOWO T7H",
    name: "HOWO T7H",
  },
  {
    value: "HUALING",
    name: "HUALING",
  },
  {
    value: "J6",
    name: "J6",
  },
  {
    value: "J6P",
    name: "J6P",
  },
  {
    value: "Jie Fang V",
    name: "Jie Fang V",
  },
  {
    value: "Jiefang",
    name: "Jiefang",
  },
  {
    value: "Junengwang",
    name: "Junengwang",
  },
  {
    value: "Liuzhou Motor",
    name: "Liuzhou Motor",
  },
  {
    value: "Nanjun",
    name: "Nanjun",
  },
  {
    value: "ShiFeng",
    name: "ShiFeng",
  },
  {
    value: "Slag car",
    name: "Slag car",
  },
  {
    value: "Steyr",
    name: "Steyr",
  },
  {
    value: "TRUCK",
    name: "TRUCK",
  },
  {
    value: "Xindawei",
    name: "Xindawei",
  },
  {
    value: "Xugong G5",
    name: "Xugong G5",
  },
  {
    value: "Xugong G7",
    name: "Xugong G7",
  },
];
const Skoda = [
  { value: "", name: "All" },
  {
    value: "Fabia",
    name: "Fabia",
  },
  {
    value: "Octavia",
    name: "Octavia",
  },
  {
    value: "SUPERB",
    name: "SUPERB",
  },
  {
    value: "Yeti",
    name: "Yeti",
  },
];
const Soueast = [
  { value: "", name: "All" },
  {
    value: "SOUEAST",
    name: "SOUEAST",
  },
  {
    value: "Soueast DX7",
    name: "Soueast DX7",
  },
  {
    value: "Soueast V3",
    name: "Soueast V3",
  },
  {
    value: "Soueast V5",
    name: "Soueast V5",
  },
];
const Ssangyong = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const Subaru = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const Suzuki = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const Tesla = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const Toyota = [
  { value: "", name: "All" },
  {
    value: "AVALON",
    name: "AVALON",
  },
  {
    value: "Camry",
    name: "Camry",
  },
  {
    value: "Camry Levin",
    name: "Camry Levin",
  },
  {
    value: "COASTER",
    name: "COASTER",
  },
  {
    value: "Corolla",
    name: "Corolla",
  },
  {
    value: "CROWN",
    name: "CROWN",
  },
  {
    value: "HIGHLANDER",
    name: "HIGHLANDER",
  },
  {
    value: "LAND CRUISER",
    name: "LAND CRUISER",
  },
  {
    value: "LEVIN",
    name: "LEVIN",
  },
  {
    value: "PRADO",
    name: "PRADO",
  },
  {
    value: "RAV4",
    name: "RAV4",
  },
  {
    value: "REIZ",
    name: "REIZ",
  },
  {
    value: "Toyota",
    name: "Toyota",
  },
  {
    value: "Velv",
    name: "Velv",
  },
  {
    value: "Verso",
    name: "Verso",
  },
  {
    value: "VIOS",
    name: "VIOS",
  },
  {
    value: "Yaris",
    name: "Yaris",
  },
];
const Trumpchi = [
  { value: "", name: "All" },
  {
    value: "Aion S",
    name: "Aion S",
  },
  {
    value: "GA8",
    name: "GA8",
  },
  {
    value: "GS4",
    name: "GS4",
  },
  {
    value: "GS5",
    name: "GS5",
  },
  {
    value: "GS8",
    name: "GS8",
  },
  {
    value: "Trumpchi",
    name: "Trumpchi",
  },
  {
    value: "Trumpchi GS4",
    name: "Trumpchi GS4",
  },
];
const Volvo = [
  { value: "", name: "All" },
  {
    value: "S60",
    name: "S60",
  },
  {
    value: "S90",
    name: "S90",
  },
  {
    value: "XC60",
    name: "XC60",
  },
  {
    value: "XC90",
    name: "XC90",
  },
];
const VwAudi = [
  { value: "", name: "All" },
  {
    value: "Bora",
    name: "Bora",
  },
  {
    value: "CC",
    name: "CC",
  },
  {
    value: "Cross Lavida",
    name: "Cross Lavida",
  },
  {
    value: "DasAuto",
    name: "DasAuto",
  },
  {
    value: "golf",
    name: "golf",
  },
  {
    value: "golf 7",
    name: "golf 7",
  },
  {
    value: "Gran Lavida",
    name: "Gran Lavida",
  },
  {
    value: "Jetta",
    name: "Jetta",
  },
  {
    value: "Lamando",
    name: "Lamando",
  },
  {
    value: "LAVIDA",
    name: "LAVIDA",
  },
  {
    value: "Magotan",
    name: "Magotan",
  },
  {
    value: "old VOLKSWAGEN",
    name: "old VOLKSWAGEN",
  },
  {
    value: "PASSAT",
    name: "PASSAT",
  },
  {
    value: "POLO",
    name: "POLO",
  },
];
const WulingBaojun = [
  { value: "", name: "All" },
  {
    value: "560",
    name: "560",
  },
  {
    value: "730",
    name: "730",
  },
  {
    value: "SGMW",
    name: "SGMW",
  },
  {
    value: "SGMW 310",
    name: "SGMW 310",
  },
  {
    value: "SGMW 510",
    name: "SGMW 510",
  },
  {
    value: "SGMW 560",
    name: "SGMW 560",
  },
  {
    value: "SGMW 630",
    name: "SGMW 630",
  },
  {
    value: "SGMW 630S",
    name: "SGMW 630S",
  },
  {
    value: "SGMW 730",
    name: "SGMW 730",
  },
  {
    value: "SGMW Hongtu",
    name: "SGMW Hongtu",
  },
  {
    value: "SGMW RM-5",
    name: "SGMW RM-5",
  },
  {
    value: "SGMW RS-3",
    name: "SGMW RS-3",
  },
  {
    value: "SGMW RS-5",
    name: "SGMW RS-5",
  },
  {
    value: "SGMW S",
    name: "SGMW S",
  },
  {
    value: "SGMW S3",
    name: "SGMW S3",
  },
  {
    value: "SGMW V",
    name: "SGMW V",
  },
  {
    value: "SGMW560",
    name: "SGMW560",
  },
];
const Zhongxin = [
  { value: "", name: "All" },
  {
    value: "Non",
    name: "Non",
  },
];
const Zotye = [
  { value: "", name: "All" },
  {
    value: "Damai X5",
    name: "Damai X5",
  },
  {
    value: "SR7",
    name: "SR7",
  },
  {
    value: "T700",
    name: "T700",
  },
  {
    value: "Z700",
    name: "Z700",
  },
  {
    value: "Zotye",
    name: "Zotye",
  },
];

//year

const year = [
  "All",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
];
interface Props<TData> {
  table: Table<TData>;
}
interface MyObject {
  value: string;
  name: string;
}
export function DataTableToolbar<TData>({ table }: Props<TData>) {
  const isFiltered =
    table.getPreFilteredRowModel().rows.length >
    table.getFilteredRowModel().rows.length;

  const router = useRouter();
  const ctx = api.useContext();

  const [textFilter, setTextFilter] = useState("");

  const [carBrand, setCarBrand] = useState("");
  const [arrayCarModel, setArrayCarModel] = useState<MyObject[]>([]);
  const [yearSelect, setYearSelect] = useState("");
  const [carModel, setCarModel] = useState("");
  const [input, setInput] = useState("");

  const setDataListFilter = useStore((store) => store.setDataListFilter);
  const setCheckFilter = useStore((store) => store.setCheckFilter);
  const showCreateForm = useStore((store) => store.showCreateForm);

  const stringFiterConnect = useStore((store) => store.stringFiterConnect);

  const onChangeText = (event: any) => {
    setInput(event.target.value);

    const a = Data.filter(
      (item: any) =>
        String(item.E).match(String(yearSelect)) &&
        String(item.B).match(removeVietnameseTones(event.target.value)) &&
        String(item.G).match(carBrand) &&
        String(item.H).match(carModel)
    );

    setCheckFilter(true);
    setDataListFilter(a);
  };

  const onChangeValueCarModel = (value: any) => {
    setCarModel(value);

    const a = Data.filter(
      (item: any) =>
        String(item.E).match(String(yearSelect)) &&
        String(item.B).match(input) &&
        String(item.G).match(carBrand) &&
        String(item.H).match(value)
    );

    setCheckFilter(true);
    setDataListFilter(a);
  };

  const onChangeValueYear = (value: any) => {
    setYearSelect(value);

    const a = Data.filter(
      (item: any) =>
        String(item.E).match(String(value)) &&
        String(item.B).match(input) &&
        String(item.G).match(carBrand) &&
        String(item.H).match(carModel)
    );

    setCheckFilter(true);
    setDataListFilter(a);
  };

  // useEffect(() => {
  //   if (
  //     stringFiterConnect == "hyujhuhyhg" ||
  //     stringFiterConnect == "nmnmdncnbs" ||
  //     stringFiterConnect == ""
  //   ) {
  //     setTextFilter("");
  //   }
  // }, [stringFiterConnect]);

  const onShowCreate = async () => {
    showCreateForm();
  };
  const setArrayCarModelToCarBrand = (value: any) => {
    if (value == "all") {
    } else if (value == "AU") {
      setArrayCarModel(Audi);
    } else if (value == "BQ") {
      setArrayCarModel(BaicMotor);
    } else if (value == "Besturn") {
      setArrayCarModel(Besturn);
    } else if (value == "BMW") {
      setArrayCarModel(BMW);
    } else if (value == "BA") {
      setArrayCarModel(BrillianceAuto);
    } else if (value == "BUICK") {
      setArrayCarModel(Buick);
    } else if (value == "BYD") {
      setArrayCarModel(BYD);
    } else if (value == "CAD") {
      setArrayCarModel(Cadilac);
    } else if (value == "CHANA") {
      setArrayCarModel(Changan);
    } else if (value == "CH") {
      setArrayCarModel(Changhe);
    } else if (value == "CHEV") {
      setArrayCarModel(Chevrolet);
    } else if (value == "CHZC") {
      setArrayCarModel(CHZC);
    } else if (value == "AC") {
      setArrayCarModel(Citroen);
    } else if (value == "DF") {
      setArrayCarModel(Dongfeng);
    } else if (value == "WCEN") {
      setArrayCarModel(Enranger);
    } else if (value == "FAW") {
      setArrayCarModel(FAW);
    } else if (value == "Ford") {
      setArrayCarModel(Ford);
    } else if (value == "FOTON") {
      setArrayCarModel(Foton);
    } else if (value == "GL") {
      setArrayCarModel(Geely);
    } else if (value == "GW") {
      setArrayCarModel(GreatWallHaval);
    } else if (value == "HFG") {
      setArrayCarModel(Hafei);
    } else if (value == "Haima") {
      setArrayCarModel(Haima);
    } else if (value == "Hanteng") {
      setArrayCarModel(Hanteng);
    } else if (value == "HAWTAI") {
      setArrayCarModel(HAWTAI);
    } else if (value == "HON") {
      setArrayCarModel(Honda);
    } else if (value == "HY") {
      setArrayCarModel(Hyundai);
    } else if (value == "LOGO") {
      setArrayCarModel(IndustrialLogo);
    } else if (value == "ISU") {
      setArrayCarModel(Isuzu);
    } else if (value == "IC") {
      setArrayCarModel(Iveco);
    } else if (value == "JAC") {
      setArrayCarModel(JAC);
    } else if (value == "AMC") {
      setArrayCarModel(JeepFca);
    } else if (value == "JMC") {
      setArrayCarModel(JMC);
    } else if (value == "KIA") {
      setArrayCarModel(Kia);
    } else if (value == "LAND ROVER") {
      setArrayCarModel(LandRover);
    } else if (value == "LEOP") {
      setArrayCarModel(Leopaard);
    } else if (value == "LEX") {
      setArrayCarModel(Lexus);
    } else if (value == "LIFAN") {
      setArrayCarModel(Lifan);
    } else if (value == "LINCOLN") {
      setArrayCarModel(Lincoln);
    } else if (value == "Luxgen") {
      setArrayCarModel(Luxgen);
    } else if (value == "Maple") {
      setArrayCarModel(Maple);
    } else if (value == "MAZ") {
      setArrayCarModel(Mazda);
    } else if (value == "MERCEDES BENZ") {
      setArrayCarModel(MercedesBenz);
    } else if (value == "MG") {
      setArrayCarModel(MG);
    } else if (value == "MINI") {
      setArrayCarModel(Mini);
    } else if (value == "MIT") {
      setArrayCarModel(Mitsubishi);
    } else if (value == "NIS") {
      setArrayCarModel(Nissan);
    } else if (value == "OTHER") {
      setArrayCarModel(Other);
    } else if (value == "Peugeot") {
      setArrayCarModel(Peugeot);
    } else if (value == "Porsche") {
      setArrayCarModel(Porsche);
    } else if (value == "QOROS") {
      setArrayCarModel(Qoros);
    } else if (value == "RAL") {
      setArrayCarModel(Ral);
    } else if (value == "Renault") {
      setArrayCarModel(Renault);
    } else if (value == "GM") {
      setArrayCarModel(SaicGeneral);
    } else if (value == "MAXUS") {
      setArrayCarModel(SaicMaxus);
    } else if (value == "TRUCK") {
      setArrayCarModel(Sinotruk);
    } else if (value == "SKO") {
      setArrayCarModel(Skoda);
    } else if (value == "SOUEAST") {
      setArrayCarModel(Soueast);
    } else if (value == "SY") {
      setArrayCarModel(Ssangyong);
    } else if (value == "SUBARU") {
      setArrayCarModel(Subaru);
    } else if (value == "SUZ") {
      setArrayCarModel(Suzuki);
    } else if (value == "Tesla") {
      setArrayCarModel(Tesla);
    } else if (value == "TOY") {
      setArrayCarModel(Toyota);
    } else if (value == "Trumpchi") {
      setArrayCarModel(Trumpchi);
    } else if (value == "VOL") {
      setArrayCarModel(Volvo);
    } else if (value == "VWL") {
      setArrayCarModel(VwAudi);
    } else if (value == "WL") {
      setArrayCarModel(WulingBaojun);
    } else if (value == "ZX") {
      setArrayCarModel(Zhongxin);
    } else if (value == "ZOTYE") {
      setArrayCarModel(Zotye);
    }
  };
  const changeCarbrand = (value: any) => {
    setArrayCarModelToCarBrand(value);

    setCarBrand(value);

    const a = Data.filter(
      (item: any) =>
        String(item.E).match(String(yearSelect)) &&
        String(item.B).match(input) &&
        String(item.G).match(value) &&
        String(item.H).match(carModel)
    );

    setCheckFilter(true);
    setDataListFilter(a);
  };

  return (
    <div className=" items-center justify-between">
      <div className=" xl:flex block   items-center  transition-all duration-300">
        <div className="flex flex-row  items-center w-full xl:w-1/3  transition-all duration-300">
          <div className="  w-[100px]  ">Car brand:</div>
          <div className="w-3/4">
            <Select
              onValueChange={(value) => {
                changeCarbrand(value);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className=" h-[200px]">
                <SelectGroup>
                  <SelectItem value="">All</SelectItem>
                  <SelectItem value="AU">Audi</SelectItem>
                  <SelectItem value="BQ">Baic Motor</SelectItem>
                  <SelectItem value="Besturn">Besturn</SelectItem>
                  <SelectItem value="BMW">BMW</SelectItem>
                  <SelectItem value="BA">Brilliance Auto</SelectItem>
                  <SelectItem value="BUICK">Buick</SelectItem>
                  <SelectItem value="BYD">BYD</SelectItem>
                  <SelectItem value="CAD">Cadillac</SelectItem>
                  <SelectItem value="CHANA">Changan</SelectItem>
                  <SelectItem value="CH">Changhe</SelectItem>
                  <SelectItem value="CHEV">Chevrolet</SelectItem>
                  <SelectItem value="CHZC">CHZC</SelectItem>
                  <SelectItem value="AC">Citroen</SelectItem>
                  <SelectItem value="DF">Dongfeng</SelectItem>
                  <SelectItem value="WCEN">Enranger</SelectItem>
                  <SelectItem value="FAW">FAW</SelectItem>
                  <SelectItem value="Ford">Ford</SelectItem>
                  <SelectItem value="FOTON">Foton</SelectItem>
                  <SelectItem value="GL">Geely</SelectItem>
                  <SelectItem value="GW">Great Wall/Haval</SelectItem>
                  <SelectItem value="HFG">Hafei</SelectItem>
                  <SelectItem value="Haima">Haima</SelectItem>
                  <SelectItem value="Hanteng">Hanteng</SelectItem>
                  <SelectItem value="HAWTAI">HAWTAI</SelectItem>
                  <SelectItem value="HON">Honda</SelectItem>
                  <SelectItem value="HY">Hyundai</SelectItem>
                  <SelectItem value="LOGO">Industrial Logo</SelectItem>
                  <SelectItem value="ISU">Isuzu</SelectItem>
                  <SelectItem value="IC">Iveco</SelectItem>
                  <SelectItem value="JAC">JAC</SelectItem>
                  <SelectItem value="AMC">Jeep/Fca</SelectItem>
                  <SelectItem value="JMC">JMC</SelectItem>
                  <SelectItem value="KIA">KIA</SelectItem>
                  <SelectItem value="LAND ROVER">LAND ROVER/JAGUAR</SelectItem>
                  <SelectItem value="LEOP">Leopaard</SelectItem>
                  <SelectItem value="LEX">Lexus</SelectItem>
                  <SelectItem value="LIFAN">LIFAN</SelectItem>
                  <SelectItem value="LINCOLN">LINCOLN</SelectItem>
                  <SelectItem value="Luxgen">Luxgen</SelectItem>
                  <SelectItem value="Maple">Maple</SelectItem>
                  <SelectItem value="MAZ">Mazda</SelectItem>
                  <SelectItem value="MERCEDES BENZ">MERCEDES BENZ</SelectItem>
                  <SelectItem value="MG">MG</SelectItem>
                  <SelectItem value="MINI">MINI</SelectItem>
                  <SelectItem value="MIT">Mitsubishi/Soueast</SelectItem>
                  <SelectItem value="NIS">Nissan</SelectItem>
                  <SelectItem value="OTHER">OTHER</SelectItem>
                  <SelectItem value="Peugeot">Peugeot</SelectItem>
                  <SelectItem value="Porsche">PORSCHE</SelectItem>
                  <SelectItem value="QOROS">QOROS</SelectItem>
                  <SelectItem value="RAL">RAL</SelectItem>
                  <SelectItem value="Renault">Renault</SelectItem>
                  <SelectItem value="GM">SAIC General</SelectItem>
                  <SelectItem value="MAXUS">SAIC MAXUS</SelectItem>
                  <SelectItem value="Rover">SAIC Rover</SelectItem>
                  <SelectItem value="TRUCK">SINOTRUK</SelectItem>
                  <SelectItem value="SKO">Skoda</SelectItem>
                  <SelectItem value="SOUEAST">Soueast</SelectItem>
                  <SelectItem value="SY">Ssangyong</SelectItem>
                  <SelectItem value="SUBARU">SUBARU</SelectItem>
                  <SelectItem value="SUZ">Suzuki</SelectItem>
                  <SelectItem value="Tesla">Tesla</SelectItem>
                  <SelectItem value="TOY">Toyota</SelectItem>
                  <SelectItem value="Trumpchi">Trumpchi</SelectItem>
                  <SelectItem value="VOL">Volvo</SelectItem>
                  <SelectItem value="VWL">VW/Audi</SelectItem>
                  <SelectItem value="WL">Wuling/Baojun</SelectItem>
                  <SelectItem value="ZX">Zhongxin</SelectItem>
                  <SelectItem value="ZOTYE">ZOTYE</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-row  items-center w-full xl:w-1/3 mt-4 xl:mt-0 ml-0 xl:ml-4  transition-all duration-300">
          <div className=" w-[100px]">Car model:</div>
          <div className="w-3/4">
            <Select
              onValueChange={(value) => {
                onChangeValueCarModel(value);
              }}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className=" h-[200px]">
                <SelectGroup>
                  {arrayCarModel?.map((item: any, index: any) => (
                    <SelectItem
                      key={index}
                      value={index == 0 ? "" : item.value}
                    >
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="xl:flex block  items-center  mt-4  transition-all duration-300">
        <div className="flex flex-row  items-center    w-full xl:w-1/3 transition-all duration-300">
          <div className="w-[100px]">Year:</div>
          <div className="w-3/4">
            <Select
              onValueChange={(value) => {
                onChangeValueYear(value);
              }}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className=" h-[200px]">
                <SelectGroup>
                  {year?.map((item: any, index: any) => (
                    <SelectItem key={index} value={index == 0 ? "" : item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" flex  flex-row  items-center w-full xl:w-1/3 mt-4 xl:mt-0  ml-0 xl:ml-4  transition-all duration-300">
          <div className="w-[100px] ">Color:</div>
          <div className="w-3/4">
            <Input
              placeholder=""
              onChange={(event) => onChangeText(event)}
              className="h-10 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function RefreshButton<TData>({ table }: Props<TData>) {
  const ctx = api.useContext();

  return (
    <Button variant="outline" className="ml-auto h-8">
      <RefreshCcw className="mr-2 h-4 w-4" />
      fd
    </Button>
  );
}
