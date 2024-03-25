import { Metadata } from "next";
import Image from "next/image";
import Navbar from "../Components/navbar";
import Divider from "../Components/divider";
import Link from "next/link";
import Script from "next/script";
import Footer from "../Components/footer";

export const metadata: Metadata = {
    title: "Riki Kuurne | Contact",
    description: "Riki Kuure Contact.",
    icons: 'icons/eric_pfp.jpg',
};

export default function Bio() {
    return (
        <>
            <Navbar pageName="Contact" />
            {/* main page content */}
            <main className="max-w-screen-xl mx-auto text-center h-full px-4">
                <div className="py-4">
                    <header>
                        <h1 className="text-xl text-black dark:text-white font-semibold">Contact</h1>
                        <p>Je kan mij bereiken via:</p>
                        <ul>
                            <li>Instagram:</li>
                            <li>Email:</li>
                            <li>Telefoon:</li>
                            <li>Adres:</li>
                        </ul>
                    </header>
                </div>
                <Footer />
            </main>

        </>
    );
}
