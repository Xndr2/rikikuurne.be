import { Metadata } from "next";
import Image from "next/image";
import Navbar from "../navbar";
import Divider from "../divider";
import Link from "next/link";
import Script from "next/script";
import WIP from "../wip";
import Footer from "../footer";

export const metadata: Metadata = {
    title: "Riki Kuurne | Nieuws",
    description: "Riki Kuure Nieuws.",
    icons: 'icons/eric_pfp.jpg',
};

export default function Bio() {
    return (
        <>
            <WIP />
            <Navbar pageName="Nieuws" />
            {/* main page content */}
            <main className="max-w-screen-xl mx-auto text-center h-full px-4">
                <div className="py-4">
                    <header className="mb-4">
                        <h1 className="text-xl text-black dark:text-white font-semibold mb-2">Laatste Nieuws</h1>
                        <Link href="Nieuws" className=" border-2 border-black dark:border-white px-8 py-2 hover:text-xl">Meer &rarr;</Link>
                    </header>
                    {/* mobile */}
                    <figure data-behold-id="j7tRJxCY9fyS1dM9ANM7" className="block md:hidden">Gelieve de pagina te herladen indien je deze tekst kan zien.</figure>
                    {/* pc */}
                    <figure data-behold-id="WF8xAoftVsXDI9fCEHFz" className="hidden md:block">Gelieve de pagina te herladen indien je deze tekst kan zien.</figure>
                    <Script src="https://w.behold.so/widget.js" type="module" />
                </div>
                <Footer />
            </main>

        </>
    );
}
