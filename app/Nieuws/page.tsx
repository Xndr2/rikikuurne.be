import { Metadata } from "next";
import Image from "next/image";
import Navbar from "../Components/navbar";
import Divider from "../Components/divider";
import Link from "next/link";
import Script from "next/script";
import Footer from "../Components/footer";

export const metadata: Metadata = {
    title: "Riki | Nieuws",
    description: "Riki Nieuws.",
    icons: 'icons/eric_pfp.jpg',
};

export default function Bio() {
    return (
        <>
            <Navbar pageName="Nieuws" />
            {/* main page content */}
            <main className="max-w-screen-xl mx-auto text-center h-full px-4">
                <div className="py-4 justify-center">
                    <header className="mb-4">
                        <h1 className="text-xl text-black dark:text-white font-semibold mb-2">Laatste Nieuws</h1>
                    </header>
                    {/* mobile */}
                    <div className="flex md:hidden">
                        <figure data-behold-id="JqE6fsi6kUXR9yZVLVP3">PC widget laad niet.</figure>
                    </div>
                    {/* pc */}
                    <div className="hidden md:flex">
                        <figure data-behold-id="yK77sik8hPAolf79KX80">Mobile widget laad niet</figure>
                    </div>
                    <Script src="https://w.behold.so/widget.js" type="module" />
                </div>
                <Footer />
            </main>

        </>
    );
}
