import { Metadata } from "next";
import Image from "next/image";
import Navbar from "../Components/navbar";
import Divider from "../Components/divider";
import Link from "next/link";
import Script from "next/script";
import ImageGallery from "../Components/Galerij/ImageGallery";

export const metadata: Metadata = {
    title: "Riki Kuurne | Galerij",
    description: "Riki Kuure Galerij.",
    icons: 'icons/eric_pfp.jpg',
};

// file name should always be NAME-W-H.jpg
const folders = [
    {
      name: "Beelden Polystyreen",
      images: [
        "/Galerij/Beelden polystyreen/Amazone-78-35.jpg",
        "/Galerij/Beelden polystyreen/Blauwe Rus-25-16.jpg",
        "/Galerij/Beelden polystyreen/Clochard-54-40.jpg",
        "/Galerij/Beelden polystyreen/Danser-40-27.jpg",
        "/Galerij/Beelden polystyreen/Drankorgel-56-40.jpg",
        "/Galerij/Beelden polystyreen/Feniks-60-54.jpg",
        "/Galerij/Beelden polystyreen/Flierefluiter-54-33.jpg",
        "/Galerij/Beelden polystyreen/Fluitspelers-50-35.jpg",
        "/Galerij/Beelden polystyreen/Freule-50-30.jpg",
        "/Galerij/Beelden polystyreen/handige Harry (achterkant)-52-37.jpg",
        "/Galerij/Beelden polystyreen/handige Harry (voorkant)-52-37.jpg",
        "/Galerij/Beelden polystyreen/Harlekijn-58-40.jpg",
        "/Galerij/Beelden polystyreen/Heks-62-45.jpg",
        "/Galerij/Beelden polystyreen/Icarus-58-65.jpg",
        "/Galerij/Beelden polystyreen/kalverliefde-60-45.jpg",
        "/Galerij/Beelden polystyreen/Knuffelaars 1-30-25.jpg",
        "/Galerij/Beelden polystyreen/Knuffelaars 2-30-25.jpg",
        "/Galerij/Beelden polystyreen/Knuffelaars 3-30-25.jpg",
        "/Galerij/Beelden polystyreen/Knuffelaars 4-30-25.jpg",
        "/Galerij/Beelden polystyreen/Knuffelaars 5-30-25.jpg",
        "/Galerij/Beelden polystyreen/Knuffelaars 6-30-25.jpg",
        "/Galerij/Beelden polystyreen/Matador-49-40.jpg",
        "/Galerij/Beelden polystyreen/Pennelikker-50-32.jpg",
        "/Galerij/Beelden polystyreen/Poenschepper-65-45.jpg",
        "/Galerij/Beelden polystyreen/Slaapwandelaar-40-45.jpg",
        "/Galerij/Beelden polystyreen/Spitsbroeders-60-50.jpg",
        "/Galerij/Beelden polystyreen/Steltlopers-185-72.jpg",
        "/Galerij/Beelden polystyreen/Troubadour-51-30.jpg",
        "/Galerij/Beelden polystyreen/Twijfelaar-85-80.jpg",
        "/Galerij/Beelden polystyreen/Vergeetmenietje-50-25.jpg",
        "/Galerij/Beelden polystyreen/Zonnekoning-50-40.jpg",
      ],
    },
    {
      name: "Beelden Hout",
      images: [
        "/Galerij/Beelden hout/Drankkaarthouders-12-15.jpg",
        "/Galerij/Beelden hout/Eendje-13-15.JPG",
        "/Galerij/Beelden hout/Flamingo-67-30.JPG",
        "/Galerij/Beelden hout/Fluitconcert-50-40.jpg",
        "/Galerij/Beelden hout/Huisjesslak-35-30.JPG",
        "/Galerij/Beelden hout/Invasie-60-25.jpg",
        "/Galerij/Beelden hout/Kaketoe-45-30.JPG",
        "/Galerij/Beelden hout/Moeder en kind-20-18.jpg",
        "/Galerij/Beelden hout/Pinguïn-18-17.jpg",
        "/Galerij/Beelden hout/Solo voor 2-26-15.jpg",
        "/Galerij/Beelden hout/Spirelli-30-30.jpg",
        "/Galerij/Beelden hout/Variabele Kubus-15-11.jpg",
      ],
    },
    {
      name: "Beelden Metaal-Hout",
      images: [
        "/Galerij/Beelden metaal-hout/Bankstel-100-40.jpg",
        "/Galerij/Beelden metaal-hout/Flandrien-80-80.jpg",
        "/Galerij/Beelden metaal-hout/Frivool-100-40.jpg",
        "/Galerij/Beelden metaal-hout/Mijmeraar-100-40.jpg",
        "/Galerij/Beelden metaal-hout/Pirouette-110-40.jpg",
        "/Galerij/Beelden metaal-hout/Rust roest-100-40.jpg",
        "/Galerij/Beelden metaal-hout/Start to run-70-70.jpg",
        "/Galerij/Beelden metaal-hout/Surfen-90-90.jpg",
        "/Galerij/Beelden metaal-hout/Twee eentjes-100-40.jpg",
        "/Galerij/Beelden metaal-hout/Violist-96-50.jpg",
        "/Galerij/Beelden metaal-hout/Wachtend op-100-40.jpg",
      ],
    },
    {
      name: "Beelden Steen",
      images: [
        "/Galerij/Beelden steen/Moeder en kind-49-30.jpg",
      ],
    },
    {
      name: "Pentekeningen",
      images: [
        "/Galerij/Pentekeningen/Angst-52-40.jpg",
        "/Galerij/Pentekeningen/Droom-52-40.jpg",
        "/Galerij/Pentekeningen/Extase-52-40.jpg",
        "/Galerij/Pentekeningen/Hoop-52-40.jpg",
        "/Galerij/Pentekeningen/Kerken in Kuurne-30-21.jpg",
        "/Galerij/Pentekeningen/Metamorfose-52-40.jpg",
      ],
    },
    {
      name: "Schaduwposters",
      images: [
        "/Galerij/Schaduwposters/Tekening 1 & 2-80-20.jpg",
        "/Galerij/Schaduwposters/Tekening 3 & 4-80-20.jpg",
        "/Galerij/Schaduwposters/Tekening 5 & 6-80-20.jpg",
      ],
    },
    {
      name: "Schilderijen",
      images: [
        "/Galerij/Schilderijen/Acrobaten-100-50.jpg",
        "/Galerij/Schilderijen/Ballet-60-40.jpg",
        "/Galerij/Schilderijen/Bankzitters-100-50.jpg",
        "/Galerij/Schilderijen/Caroussel-160-100.jpg",
        "/Galerij/Schilderijen/Famillie-100-50.jpg",
        "/Galerij/Schilderijen/Jongleurs-100-50.jpg",
        "/Galerij/Schilderijen/katje-15-15.jpg",
        "/Galerij/Schilderijen/Knuppel in het hoenderhok-40-50.jpg",
        "/Galerij/Schilderijen/Ruiters-60-40.jpg",
        "/Galerij/Schilderijen/Straatmuzikanten-100-50.jpg",
        "/Galerij/Schilderijen/Surfers-100-50.jpg",
        "/Galerij/Schilderijen/Toonzetters-100-50.jpg",
        "/Galerij/Schilderijen/zonsondergang-45-70.jpg",
      ],
    },
    {
      name: "Werk in opdracht",
      images: [
        "/Galerij/Werk in opdracht/De vlam-0-0.jpg",
        "/Galerij/Werk in opdracht/jeugdcentrum-0-0.jpg",
        "/Galerij/Werk in opdracht/Kerststal 1-0-0.jpg",
        "/Galerij/Werk in opdracht/Kerststal 2-0-0.jpg",
        "/Galerij/Werk in opdracht/peuterleute-0-0.jpg",
        "/Galerij/Werk in opdracht/Piekezot-0-0.jpg",
        "/Galerij/Werk in opdracht/Pinokkio-0-0.jpg",
        "/Galerij/Werk in opdracht/Ruitenkoning-0-0.jpg",
        "/Galerij/Werk in opdracht/Schildpad-0-0.jpg",
        "/Galerij/Werk in opdracht/tekenaar-0-0.jpg",
        "/Galerij/Werk in opdracht/Unizo grafiek 1-0-0.jpg",
        "/Galerij/Werk in opdracht/Unizo grafiek 2-0-0.jpg",
      ],
    },
  ];

const Galerij: React.FC = () => {
    return (
        <>
            {/* main page content */}
            <main className="text-center">
                <Navbar pageName="Galerij" />
                <div className="py-4 justify-center">
                    <header className="mb-4">
                        <h1 className="text-xl text-black font-semibold mb-2">Galerij</h1>
                        <p>Klik op een categorie om deze te bekijken.<br/><span className="font-semibold">Het kan een paar seconden duren voor alle foto&apos;s zijn geladen.</span></p>
                    </header>
                </div>
                <ImageGallery folders={folders} />
            </main>
        </>
    );
  };
  
  export default Galerij;