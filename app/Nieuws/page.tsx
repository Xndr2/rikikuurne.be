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
                <div className="py-4 justify-center">
                    <header className="mb-4">
                        <h1 className="text-xl text-black dark:text-white font-semibold mb-2">Laatste Nieuws</h1>
                        <Link href="Nieuws" className=" border-2 border-black dark:border-white px-8 py-2 hover:text-xl">Meer &rarr;</Link>
                    </header>
                    {/* mobile */}
                    <div className="hidden">
                        <figure data-behold-id="yK77sik8hPAolf79KX80">PC widget laad niet.</figure>
                    </div>
                    {/* pc */}
                    <div className="flex">
                        <figure data-behold-id="JqE6fsi6kUXR9yZVLVP3">Mobile widget laad niet</figure>
                    </div>
                    <Script src="https://w.behold.so/widget.js" type="module" />
                </div>
                <Footer />
            </main>

        </>
    );
}
