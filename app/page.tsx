import { Metadata } from "next";
import React, { useState } from "react"
import Image from "next/image";
import Navbar from "./Components/navbar";
import Divider from "./Components/divider";
import Link from "next/link";
import Script from "next/script";
import { Suspense } from "react";
import Footer from "./Components/footer";
import bg from "../public/background.jpg"
import { url } from "inspector";
import Slider from "./Components/slider";


export const metadata: Metadata = {
  title: "Riki Kuurne | Startpagina",
  description: "Riki Kuure Startpagina.",
  icons: 'icons/eric_pfp.jpg',
};

export default function Home() {
  return (
    <>
      {/* main page content */}
      <main className="max-w-screen-xl mx-auto text-center h-full px-4">
        <Navbar pageName="Startpagina" />
        <div className="py-4">
          <header>
            <h1 className="text-xl text-black font-semibold">Welkom</h1>
            <p className="text-center text-pretty">
              Zoals superlatieven een verhaal levendiger maken, zo maken fantasie, vormen, lijnenspel en kleuren mijn werk levendiger.
            </p>
          </header>

          <Slider />
        </div>

        <Divider />

        <div className="py-4">
          <header className="mb-4 flex items-center justify-center font-semibold">
            <h1 className="text-xl mb-2 mr-2">Laatste Nieuws</h1>
            <a href="Nieuws" className="border-2 border-black px-8 py-2 hover:text-xl ml-2">Meer &rarr;</a>
          </header>

          <figure data-behold-id="UAkIjTZxmkpylMFcB6bG">Laatste Instagram Post. Gelieve de pagina te herladen indien je deze tekst kan zien.</figure>
          <Script src="https://w.behold.so/widget.js" type="module" />
        </div>

        <Footer />
      </main>
    </>
  );
}
