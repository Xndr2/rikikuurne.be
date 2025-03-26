"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import React from "react";

type Folder = {
  name: string;
  images: string[];
};

type Props = {
  folders: Folder[];
};

const useIntersectionObserver = (setVisibleImages: React.Dispatch<React.SetStateAction<Set<string>>>) => {
  return useCallback((node: Element | null) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleImages((prev) => new Set(prev).add(entry.target.getAttribute("data-src") || ""));
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
  }, []);
};

// Extracts details from image filenames (NAME-W-H.jpg)
const extractDetails = (filePath: string) => {
  const filename = filePath.split("/").pop() || "";
  const match = filename.match(/(.+)-(\d+)-(\d+)\.\w+$/);
  if (match) {
    const [, projectName, height, width] = match;
    return { projectName, height, width };
  }
  return { projectName: "Unknown", height: "Unknown", width: "Unknown" };
};

const ImageGallery: React.FC<Props> = ({ folders }) => {
  const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleImages, setVisibleImages] = useState<Set<string>>(new Set());
  const observeImage = useIntersectionObserver(setVisibleImages);

  const toggleFolder = useCallback((folderName: string) => {
    setOpenFolders((prev) => ({ ...prev, [folderName]: !prev[folderName] }));
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <div>
      {/* Preload key images */}
      <link rel="preload" as="image" href="/example.jpg" type="image/webp" />

      {folders.map((folder) => (
        <div
          key={folder.name}
          className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-md transition duration-300 ease-in-out hover:shadow-xl will-change-transform"
        >
          <button
            className="w-full text-xl font-bold text-gray-700 py-3 px-5 rounded-lg bg-gray-50 text-left transition duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
            onClick={() => toggleFolder(folder.name)}
          >
            {folder.name} {openFolders[folder.name] ? "✕" : ""}
          </button>

          {openFolders[folder.name] && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {folder.images.map((image) => {
                const { projectName, height, width } = extractDetails(image);
                const isVisible = visibleImages.has(image);

                return (
                  <div
                    key={image}
                    ref={observeImage}
                    data-src={image}
                    className="text-center border border-gray-200 rounded-lg p-2 bg-gray-50 shadow-sm group transition duration-200 ease-in-out hover:shadow-md will-change-transform"
                  >
                    {isVisible && (
                      <Image
                        src={image}
                        alt={projectName}
                        width={300}
                        height={180}
                        className="w-full h-60 object-cover rounded-lg cursor-pointer select-none"
                        onClick={() => setSelectedImage(image)}
                        draggable={false}
                        priority={true}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,..." // Replace with actual base64 blurred image
                      />
                    )}
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-lg"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Selected"
              width={800}
              height={600}
              className="max-w-[90vw] max-h-[90vh] object-contain select-none"
              draggable={false}
              priority={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
