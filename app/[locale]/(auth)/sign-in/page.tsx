import { Metadata } from "next";
import SignInLdapForm from "~/app/[locale]/(auth)/sign-in/form";

export const metadata: Metadata = {
  title: "sign-in",
};

export default async function UserPage() {
  return (
    <main className="container flex h-screen w-screen flex-col items-center">
      {/* <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"> */}
      {/* <div className="flex flex-col space-y-2 text-center"> */}
      <SignInLdapForm />
      {/* </div> */}
    </main>
  );
}
