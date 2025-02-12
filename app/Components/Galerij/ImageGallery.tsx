"use client"

import { useState, useEffect } from "react";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

type Folder = {
    name: string,
    images: string[];
}

type Props = {
    folders: Folder[];
};


const ImageGallery: React.FC<Props> = ({ folders }) => {
    const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>({});
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
    const toggleFolder = (folderName: string) => {
      setOpenFolders((prev) => ({
        ...prev,
        [folderName]: !prev[folderName],
      }));
    };

    // file name should always be NAME-W-H.jpg
    const extractDetails = (filePath: string) => {
      // Extract just the filename from the path
      const filename = filePath.split("/").pop() || "";
      
      // Match the project name and dimensions
      const match = filename.match(/(.+)-(\d+)-(\d+)\.\w+$/);
      if (match) {
        const [, projectName, height, width] = match;
        return { projectName, height, width };
      }
      return { projectName: "Unknown", height: "Unknown", width: "Unknown" };
    };
    

    // Disable scrolling when lightbox is open
    useEffect(() => {
      if (selectedImage) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [selectedImage]);
  
    return (
    <div className="">
      {folders.map((folder) => (
        <div key={folder.name} className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-md hover:shadow-xl transition duration-300 ease-in-out">
          <button
            className="w-full text-xl font-bold text-gray-700 hover:text-gray-900 py-3 px-5 rounded-lg bg-gray-50 hover:bg-gray-200 text-left transition duration-200 ease-in-out"
            onClick={() => toggleFolder(folder.name)}
          >
            {folder.name} {openFolders[folder.name] ? "✕" : ""}
          </button>
          {openFolders[folder.name] && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {folder.images.map((image, index) => {
                const { projectName, height, width } = extractDetails(image);
                return (
                  <div key={index} className="text-center border border-gray-200 rounded-lg p-2 bg-gray-50 shadow-sm hover:shadow-md transition duration-200 ease-in-out">
                    <img
                      src={image}
                      alt={projectName}
                      className="w-full h-60 object-cover rounded-lg cursor-pointer select-none"
                      onClick={() => setSelectedImage(image)}
                      draggable={false}
                    />
                    <p className="text-sm font-semibold text-gray-800 mt-2">{projectName}</p>
                    <p className="text-sm text-gray-600">{height}cm x {width}cm</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}


      {/* Lightbox Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <button
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-lg"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90vw] max-h-[90vh] object-contain select-none"
              draggable={false} // Prevent dragging
            />
          </div>
        </div>
      )}
    </div>
  );
  };
  
  export default ImageGallery;