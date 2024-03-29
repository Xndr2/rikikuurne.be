import { Metadata } from "next";
import Image from "next/image";
import HamburgerMenu from "./hamburgerMenu";
import Divider from "./divider";

interface NavbarProps {
    pageName?: string;
}

export default function Navbar({
    pageName = "",
}: NavbarProps) {
    return (
        <>
            <nav>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 px-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image
                            src="/icons/eric_pfp2.jpg"
                            width={391}
                            height={274}
                            className="h-auto w-20"
                            alt="riki Logo"
                        />
                        <span className="self-center text-lg md:text-2xl whitespace-nowrap">Riki | {pageName}</span>
                    </a>
                    <HamburgerMenu />
                    <div className="hidden w-full md:block md:w-auto NavbarClass" id="navbar-default">
                        <ul className="text-center font-medium flex flex-col p-4 md:p-0 mt-4 border-2 border-black rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent">
                            <li>
                                <a href="/" className="block py-2 px-3 rounded 00 md:p-0 md:hover:underline" aria-current="page">Startpagina</a>
                            </li>
                            {/* divider */}
                            <div className="md:hidden w-full h-px border border-black my-2"></div>

                            <li>
                                <a href="Biografie" className="block py-2 px-3 rounded 00 md:p-0 md:hover:underline" aria-current="page">Biografie</a>
                            </li>
                            {/* divider */}
                            <div className="md:hidden w-full h-px border border-black my-2"></div>

                            <li>
                                <a href="Nieuws" className="block py-2 px-3 rounded 00 md:p-0 md:hover:underline" aria-current="page">Nieuws</a>
                            </li>
                            {/* divider */}
                            <div className="md:hidden w-full h-px border border-black my-2"></div>

                            <li>
                                <a href="Galerij" className="block py-2 px-3 rounded 00 md:p-0 md:hover:underline" aria-current="page">Galerij</a>
                            </li>
                            {/* divider */}
                            <div className="md:hidden w-full h-px border border-black my-2"></div>

                            <li>
                                <a href="Contact" className="block py-2 px-3 rounded 00 md:p-0 md:hover:underline" aria-current="page">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <Divider />
                </div>
            </nav>
        </>
    );
}
