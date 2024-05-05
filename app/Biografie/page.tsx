import { Metadata } from "next";
import Image from "next/image";
import Navbar from "../Components/navbar";
import Divider from "../Components/divider";
import Link from "next/link";
import Script from "next/script";
import Footer from "../Components/footer";
import Expos from "../Components/Biografie/expos";
import Verenigingen from "../Components/Biografie/verenigingen";
import WorkText from "../Components/Biografie/WorkText";

export const metadata: Metadata = {
  title: "Riki Kuurne | Biografie",
  description: "Riki Kuure Biografie.",
  icons: 'icons/eric_pfp.jpg',
};



export default function Bio() {

  // add en expo here to add it to the list, styling is done in /Components/expos.tsx
  let expos = [
    { place: "Blankenberge" },
    { place: "Beselare" },
    { place: "De Panne" },
    { place: "Bissegem" },
    { place: "Eeklo" },
    { place: "Deerlijk" },
    { place: "Gent" },
    { place: "Geluveld" },
    { place: "Kortrijk" },
    { place: "Ingelmunster" },
    { place: "Kuurne" },
    { place: "Lendelede" },
    { place: "Nieuwpoort" },
    { place: "Oostende" },
    { place: "Veldegem" },
    { place: "Zandvoorde" },
    { place: "Wevelgem" },
    { place: "Kluisbergen" },
    { place: "Machelen" },
    { place: "Gullegem" },
    { place: "Nazareth" },
    { place: "Wakken" },
    { place: "Zwevegem" },
  ]

  return (
    <>
      <Navbar pageName="Biografie" />
      {/* main page content */}
      <main className="max-w-screen-xl mx-auto h-full px-4">
        <div className="">
          <header>
            <h1 className="text-xl font-semibold text-center">Biografie</h1>
            <p className="text-pretty">
              Eric Vacquier, alias Riki, bewijst, voor zover dat nodig mocht zijn, dat je, ook zonder academische vorming, een bezield kunstenaar kan zijn.
              <br /><br />
              Voor Eric staat een idee van een kunstenaar aan het begin van een proces.
              Het visualiseren komt tot stand dankzij de persoonlijkheid, de creativiteit en de vakkennis van de kunstenaar. Op die manier geeft het kunstwerk een meerwaarde aan het idee én aan de materie.
              <br /><br />
              Maar niet alleen deze factoren zijn bepalend voor het uitzicht van het kunstwerk. Even wezenlijk is de rol van de toeschouwer, die aan het denken gezet wordt bij het bekijken van het werk.
              <br /><br />
              Tussen deze factoren is er sprake van een wederzijdse beïnvloeding.
              <br /><br />
              De beelden van Riki zijn een unieke samenvloeiing van materialen, ideeën en kleuren waaraan je niet zomaar voorbij kan lopen. De beelden zijn niet alleen bekoorlijk, ze doen, bewust of onbewust, terugdenken aan verhalen, figuren, toestanden en gebeurtenissen uit het verleden. Elk beeld heeft zijn verhaal, verteld in een rijk kleurenpalet en een sterk uitgebalanceerde vorm.
              <br /><br />
              De nieuwe, eigen, speelse vormgeving krijgt bij wijlen een karikaturale, maar soms ook een multiculturele uitstraling. De kleuren en de vormen versterken bij de toeschouwer het verlangen om de beelden beter te bekijken en te begrijpen.
              <br /><br />
              Bij lezen denken we in een culturele context op de eerste plaats aan literatuur, maar met betrekking tot de beelden van Riki kunnen we spreken van een verwantschap.
              <br /><br />
              De fragiele en sierlijke vormen lijken in beeld vertaalde poëzie: je zou er zo een gedicht kunnen van aflezen!
              <br /><br />
              De werken van Riki getuigen van een grote vakbekwaamheid en een geduldig manipuleren van de materie.
            </p>

            <p className="mt-8 mb-2 text-pretty font-thin text-sm text-center">
              Een aantal werken behoren tot openbare verzamelingen.
              <br />
              Meerdere werken bevinden zich in private verzamelingen.
            </p>
          </header>

          <Divider />
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            <div>
              {/* Actief in */}
              <h1 className="text-xl font-semibold text-center mb-2">Actief in</h1>
              <WorkText />
            </div>

            <div>
              {/* Tentoonstellingen */}
              <h1 className="text-xl font-semibold text-center mt-4 md:mt-0">Tentoonstellingen</h1>
              <p className="text-center mb-4">Vanaf 1984 tot heden</p>
              {/* auto add all expos from list at begining of function */}
              <Expos expos={expos} />
            </div>

            <div>
              {/* Verenigingen */}
              <h1 className="text-xl font-semibold text-center my-4 md:mt-0">Verenigingen</h1>
              <Verenigingen />
            </div>
          </div>
        </div>
        <Footer />
      </main>

    </>
  );
}
