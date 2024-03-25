import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


interface ExpoProps {
    // slides: Array<{
    //     src: string;
    //     name: string;
    //     description?: string;
    // }>;
    expos: Array<{
        place: string;
    }>;
}

export default function Expos(props: ExpoProps) {
    const { expos } = props;
    return (
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 max-w-max m-auto text-left text-gray-500 dark:text-gray-400">
            {expos.map((expo) => (
                <li key={Math.random()} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg key={Math.random()} className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    {expo.place}
                </li>
            ))}
        </ul >
    );
}