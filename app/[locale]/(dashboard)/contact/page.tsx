/** @format */

import { Metadata } from "next";
import { sleep } from "~/lib/utils";
import { Demo } from "./Demo";
export const metadata: Metadata = {
  title: "about",
};

import Contact from "~/app/[locale]/(dashboard)/contact/contact";
export default async function RolePage() {
  await sleep(3000);
  return (
    <div className="z-0 ">
      <Demo />
      {/* <Contact /> */}
    </div>
  );
}
