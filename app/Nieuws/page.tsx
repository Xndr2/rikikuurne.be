import { Metadata } from "next";
import Image from "next/image";
import Navbar from "../Components/navbar";
import Divider from "../Components/divider";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Riki | Nieuws",
    description: "Riki Nieuws.",
    icons: 'icons/eric_pfp.jpg',
};

export default function Nieuws() {
    return (
        <>
            {/* main page content */}
            <main className="text-center">
                <Navbar pageName="Nieuws" />
                <div className="py-4 justify-center">
                    <header className="mb-2">
                        <h1 className="text-xl font-semibold">Laatste Nieuws</h1>
                        <h1 className="text-pretty text-sm">
                            Via <Link key="" target='_blank' href="https://www.instagram.com/eric.vacquier.riki.kuurne/" className="hover:underline">Instagram</Link>
                        </h1>
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
            </main>

        </>
    );
}
