import { Metadata } from "next";
import RegisterForm from "./form";

export const metadata: Metadata = {
    title: "register",
};

export default async function UserPage() {
    return (
        <main className="container flex h-screen w-screen flex-col items-center">
            <RegisterForm />
        </main>
    );
}
