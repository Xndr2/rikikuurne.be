import { Metadata } from "next";
import Image from "next/image";
import Navbar from "./navbar";
import Divider from "./divider";
import Link from "next/link";
import Script from "next/script";
import { Suspense } from "react";
import WIP from "./wip";

export const metadata: Metadata = {
    title: "Riki Kuurne | Startpagina",
    description: "Riki Kuure Startpagina.",
    icons: 'icons/eric_pfp.jpg',
};

export default function Footer() {
    return (
        <>
            {/* footer */}
            <main className="max-w-screen-xl mx-auto text-center h-full px-4">
                <Divider />
                <div className="py-4">
                    <p>&copy; Copyright 2024 <Link href="/" className="hover:underline">rikikuurne.be</Link></p>
                    <p>Alle rechten voorbehouden</p>
                </div>
            </main>
        </>
    );
}
