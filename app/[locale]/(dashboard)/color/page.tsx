/** @format */

import { Metadata } from "next";
import { api } from "~/lib/api/server";

import { DataTable } from "./data-table";

import Table from "./table";

import Detail from "./show-detail";
import Table1 from "./test";

import Title from "./title";
// import Form from "./form";
import { columns } from "./data-table-columns";

export const metadata: Metadata = {
  title: "color",
};

export default async function TaskPage() {
  return (
    <div className="space-y-4  h-full ">
      <Title />
      <Table />
      <Table1 />
      <Detail />
    </div>
  );
}
