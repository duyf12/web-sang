/** @format */

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import vn from "~/messages/vn.json";
import en from "~/messages/en.json";

import Navbar from "../../components/navbar";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vn" }];
}

interface PageProps {
  children?: ReactNode;
  params: {
    locale: "vn" | "en";
  };
}

const dict = { en, vn };

export default async function Layout({ children, params }: PageProps) {
  const messages = dict[params.locale];

  if (!messages) {
    return notFound();
  }

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <div className="z-40">
        <Navbar />
      </div>
      <div className="z-0">{children}</div>
    </NextIntlClientProvider>
  );
}
