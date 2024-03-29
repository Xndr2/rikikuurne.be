import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


interface GalerijProps {
    images: Array<{
        scr: string;
        height: number;
        width: number;
    }>;
}

export default function Expos(props: GalerijProps) {
    const { images } = props;
    return (
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 max-w-max m-auto text-left text-gray-500 dark:text-gray-400">
            {images.map((image) => (
                <li key="" className="flex items-center">
                    <Image
                        src={image.scr}
                        width={200}
                        height={200}
                        className="h-8 w-8 md:h-10 md:w-10 m-2 invert"
                        alt="unknown"
                        key=""
                    />
                </li>
            ))}
        </ul >
    );
}