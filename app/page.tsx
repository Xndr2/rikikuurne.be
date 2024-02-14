import { Metadata } from "next";
import Image from "next/image";
import Navbar from "./navbar";
import Divider from "./divider";
import Link from "next/link";
import Script from "next/script";
import { Suspense } from "react";
import WIP from "./wip";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Riki Kuurne | Startpagina",
  description: "Riki Kuure Startpagina.",
  icons: 'icons/eric_pfp.jpg',
};

export default function Home() {
  return (
    <>
      <WIP />
      <Navbar pageName="Startpagina" />
      {/* main page content */}
      <main className="max-w-screen-xl mx-auto text-center h-full px-4">
        <div className="py-4">
          <header>
            <h1 className="text-xl text-black dark:text-white font-semibold">Welkom</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In provident at sequi dolorem natus officiis ex nobis voluptatibus accusantium itaque voluptates repudiandae, libero cupiditate cumque iste obcaecati totam quam quidem.</p>
          </header>

          <div className="flex flex-wrap justify-between mt-4">
            <Suspense fallback={<p>Loading Image...</p>}>
              <Image
                src="/home_images/clochard.jpg"
                width={834}
                height={1000}
                className=" w-full md:w-1/3 p-2 h-auto"
                alt="clochard"
                loading="lazy"
              />
            </Suspense>
            <Image
              src="/home_images/heks.jpg"
              width={834}
              height={1000}
              className=" w-1/3 p-2 h-auto hidden md:block"
              alt="heks"
              loading="lazy"
            />
            <Image
              src="/home_images/spitsbroeders.jpg"
              width={834}
              height={1000}
              className=" w-1/3 p-2 h-auto hidden md:block"
              alt="spitsbroeders"
              loading="lazy"
            />
          </div>
        </div>

        <Divider />

        <div className="py-4">
          <header className="mb-4">
            <h1 className="text-xl text-black dark:text-white font-semibold mb-2">Laatste Nieuws</h1>
            <a href="Nieuws" className=" border-2 border-black dark:border-white px-8 py-2 hover:text-xl">Meer &rarr;</a>
          </header>

          <figure data-behold-id="UAkIjTZxmkpylMFcB6bG">Laatste Instagram Post. Gelieve de pagina te herladen indien je deze tekst kan zien.</figure>
          <Script src="https://w.behold.so/widget.js" type="module" />
        </div>

        <Footer />
      </main>
    </>
  );
}
