/** @format */

import { Metadata } from "next";

import Banner from "~/app/[locale]/(dashboard)/home/banner";
import Intro from "~/app/[locale]/(dashboard)/home/intro";

import IntroImage from "~/app/[locale]/(dashboard)/home/intro-image";
import IntroTrademark from "~/app/[locale]/(dashboard)/home/intro-trademark";
import SwiperItem from "~/app/[locale]/(dashboard)/home/swiper-item";
import Contact from "~/app/[locale]/(dashboard)/home/contact";

export const metadata: Metadata = {
  title: "home",
};

export default async function UserPage() {
  return (
    <div className="z-0 overflow-hidden">
      <Banner />
      <Intro />
      <IntroImage />
      <IntroTrademark />
      <SwiperItem />
      <Contact />
    </div>
  );
}
