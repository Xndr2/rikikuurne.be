import { Metadata } from "next";
import Image from "next/image";
import Navbar from "./navbar";
import Divider from "./divider";
import Link from "next/link";
import Script from "next/script";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Riki Kuurne | Startpagina",
    description: "Riki Kuure Startpagina.",
    icons: 'icons/eric_pfp.jpg',
};

export default function Footer() {
    return (
        <>
            {/* footer mx-auto text-center h-full*/}
            <main className="text-center relative bottom-0 w-full">
                <Divider />
                <div className="pb-4">
                    <p>&copy; Copyright 2024 <Link href="/" className="hover:underline">rikikuurne.be</Link></p>
                    <p>Alle rechten voorbehouden</p>
                </div>
            </main>
        </>
    );
}
