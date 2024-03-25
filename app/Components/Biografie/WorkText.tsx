import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


export default function WorkText() {
    let workText = [
        { name: "Sculpturen" },
        {
            name: "Tekenen", sub: [
                "publicitaire ontwerpen",
                "stripverhalen",
                "cartoons",
                "karikaturen",
                "pentekeningen",
            ]
        },
        {
            name: "Schilderen", sub: [
                "aquarel",
                "olieverf"
            ]
        },
    ]
    return (
        <ul className="max-w-max m-auto text-left list-disc text-white">
            {workText.map((work) => (
                <li key="3" className="">
                    <span key="4" className="text-gray-500 dark:text-gray-400">{work.name}</span>
                    {work.sub?.map((s) => (
                        <div key="5" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg key="6" className="flex-shrink-0 w-4 h-4 invert" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                <path key="7" d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                            </svg>
                            <span key="8" className="text-gray-500 dark:text-gray-400">{s}</span>
                        </div>
                    ))}
                </li>
            ))}
        </ul >
    );
}