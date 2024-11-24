import { Metadata } from "next";
import Image from "next/image";
import Navbar from "../Components/navbar";
import Divider from "../Components/divider";
import Link from "next/link";
import Script from "next/script";
import Links from "../Components/Contact/link";

export const metadata: Metadata = {
    title: "Riki Kuurne | Contact",
    description: "Riki Kuure Contact.",
    icons: 'icons/eric_pfp.jpg',
};

export default function Bio() {
    let links = [
        { name: "Instagram", icon: "/icons/contact/instagram.svg", link: "https://www.instagram.com/eric.vacquier.riki.kuurne/", linkName: "@eric.vacquier.riki.kuurne" },
        { name: "Email", icon: "/icons/contact/envelope-solid.svg", link: "mailto:info@rikikuurne.be", linkName: "info@rikikuurne.be" },
        { name: "GSM", icon: "/icons/contact/phone-solid.svg", link: "tel:+32498819312", linkName: "+32 498 81 93 12" },
        { name: "Vaste Telefoon", icon: "/icons/contact/phone-solid.svg", link: "tel:+3256704934", linkName: "+32 56 70 49 34" },
        { name: "Adres", icon: "/icons/contact/location-dot-solid.svg", link: "https://www.google.com/maps/place/Najaarsweg+40,+8520+Kuurne/@50.8600234,3.2819948,18.82z/data=!4m6!3m5!1s0x47c33bb78526ff05:0xc9d6c25f71ae4038!8m2!3d50.8599457!4d3.2824684!16s%2Fg%2F11sc2pzncb?entry=ttu", linkName: "Najaarsweg 40, 8520 Kuurne" },
        { name: "Permanent tentoon bij Verthé", icon: "/icons/contact/location-dot-solid.svg", link: "https://maps.app.goo.gl/4HdzzsfMLK2HeML86", linkName: "Gentsestraat 46, 8530 Harelbeke" },
    ]
    return (
        <>
            {/* main page content */}
            <main className="text-center">
                <Navbar pageName="Contact" />
                <div className="py-4">
                    <header>
                        <h1 className="text-xl font-semibold">Contact</h1>
                        <p className=" text-pretty text-left">
                            Neem gerust contact met me op als je vragen hebt, geïnteresseerd bent in mijn kunstwerken, of wil zien wat er momenteel beschikbaar is.
                            <br /><br />
                            Ik werk alleen aan mijn eigen creatieve projecten en verkoop mijn werk rechtstreeks.
                            <br />
                            Laat me weten hoe ik je kan helpen en ik zal zo snel mogelijk reageren.
                        </p>
                        <Links links={links} />
                    </header>

                    <Divider />

                    <Image
                        src="/google_maps.png"
                        width={1770}
                        height={917}
                        className=" h-auto w-auto m-auto mt-4"
                        alt="riki woonplaats"
                    />
                </div>
            </main>

        </>
    );
}
