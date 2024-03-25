import { Metadata } from "next";
import Image from "next/image";
import Navbar from "../Components/navbar";
import Divider from "../Components/divider";
import Link from "next/link";
import Script from "next/script";
import Footer from "../Components/footer";

export const metadata: Metadata = {
    title: "Riki Kuurne | Galerij",
    description: "Riki Kuure Galerij.",
    icons: 'icons/eric_pfp.jpg',
};

export default function Galerij() {
    return (
        <>
            <Navbar pageName="Galerij" />
            {/* main page content */}
            <main className="max-w-screen-xl mx-auto text-center h-full px-4">
                <div className="py-4 justify-center">
                    <header className="mb-4">
                        <h1 className="text-xl text-black dark:text-white font-semibold mb-2">Galerij</h1>
                    </header>
                </div>
                <Footer />
            </main>

        </>
    );
}
