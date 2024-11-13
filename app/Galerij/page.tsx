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

const folders = [
    {
      name: "Wood",
      images: [
        "/Galerij/Wood/20-30-project1.jpg",
        "/Galerij/Wood/10-10-project2.jpg",
        "/Galerij/Wood/20-30-project2.jpg",
        // Add more image paths here
      ],
    },
    {
      name: "Metal",
      images: [
        "/Galerij/Metal/20-30-project1.jpg",
        "/Galerij/Metal/20-30-project2.jpg",
        "/Galerij/Metal/20-30-project3.jpg",
        // Add more image paths here
      ],
    },
    // Add more folders here
  ];

const Galerij: React.FC = () => {
    return (
        <>
            <Navbar pageName="Galerij" />
            {/* main page content */}
            <main className="max-w-screen-xl mx-auto text-center h-full px-4">
                <div className="py-4 justify-center">
                    <header className="mb-4">
                        <h1 className="text-xl text-black font-semibold mb-2">Galerij</h1>
                    </header>
                </div>
                <ImageGallery folders={folders} />
            </main>
        </>
    );
  };
  
  export default Galerij;