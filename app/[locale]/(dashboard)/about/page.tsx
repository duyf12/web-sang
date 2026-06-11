/** @format */

import { Metadata } from "next";
import { sleep } from "~/lib/utils";
import { Demo } from "./Demo";
export const metadata: Metadata = {
  title: "about",
};

export default async function RolePage() {
  await sleep(3000);
  return (
    <div className="z-0 ">
      <Demo />
    </div>
  );
}
