import { Metadata } from "next";
import Image from "next/image";
import Navbar from "./navbar";
import Divider from "./divider";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Riki Kuurne | Startpagina",
  description: "Riki Kuure Startpagina.",
  icons: 'icons/eric_pfp.jpg',
};

export default function WIP() {
  return (
    <>
        <div className="max-w-screen-lg mx-auto my-2 px-4">
            <div className=" bg-red-100 border border-red-400 text-red-700 text-sm px-8 py-3 rounded relative" role="alert">
                <strong className="font-bold">Sorry voor het stof! </strong>
                <span className="block sm:inline">Deze site is nog niet klaar, kom dus zeker later nog eens terug.</span>
            </div>
        </div>
    </>
  );
}
