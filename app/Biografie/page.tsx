import { Metadata } from "next";
import Image from "next/image";
import Navbar from "../navbar";
import Divider from "../divider";
import Link from "next/link";
import Script from "next/script";
import WIP from "../wip";

export const metadata: Metadata = {
  title: "Riki Kuurne | Startpagina",
  description: "Riki Kuure Startpagina.",
  icons: 'icons/eric_pfp.jpg',
};

export default function Home() {
  return (
    <>
      <WIP/>
      <Navbar pageName="Biografie"/>
      {/* main page content */}
      <main className="max-w-screen-xl mx-auto text-center h-full px-4">
        <div className="py-4">
          <header>
            <h1 className="text-xl text-black dark:text-white font-semibold">Biografie</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In provident at sequi dolorem natus officiis ex nobis voluptatibus accusantium itaque voluptates repudiandae, libero cupiditate cumque iste obcaecati totam quam quidem.</p>
          </header>
        </div>
      </main>
    </>
  );
}
