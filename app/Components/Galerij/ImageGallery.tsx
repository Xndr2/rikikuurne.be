"use client"

import { useState } from "react";
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
  
    const toggleFolder = (folderName: string) => {
      setOpenFolders((prev) => ({
        ...prev,
        [folderName]: !prev[folderName],
      }));
    };

    // Function to extract dimensions and project name from the filename
    const extractDetails = (filename: string) => {
        const match = filename.match(/(\d+)-(\d+)-(.+)\./); // do not touch
        if (match) {
        const height = match[1];
        const width = match[2];
        const projectName = match[3].replace(/_/g, " "); // Replace underscores with spaces if needed
        return { height, width, projectName };
        }
        return null;
    };
  
    return (
      <div className="space-y-4 p-4">
        {folders.map((folder) => (
          <div key={folder.name} className="border border-gray-300 rounded p-4">
            <button
              className="text-lg font-semibold text-black 0 w-full text-left"
              onClick={() => toggleFolder(folder.name)}
            >
              {folder.name} {openFolders[folder.name] ? "-" : "+"}
            </button>
            {openFolders[folder.name] && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {folder.images.map((image, index) => {
                  const details = extractDetails(image);
                  return (
                    <div key={index} className="space-y-2">
                      <div className="w-full h-48 overflow-hidden rounded shadow-lg">
                        <img
                          src={image}
                          alt={`${folder.name} project ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {details && (
                        <div className="text-sm text-gray-700">
                          <p>Project: {details.projectName}</p>
                          <p>Size: {details.height}x{details.width}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default ImageGallery;