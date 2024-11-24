import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function Verenigingen() {

    let vers = [
        { group: 'Kuurnse Kunstkring “Evariste Carpentier”' },
        {
            group: 'Gezel Europese Kunstverdienste', sub: [
                "Goud en Gouden Palm 2007",
                "Zilver en Prijs van het Publiek 2008",
                "Zilver 2009",
            ]
        },
    ]

    return (
        <ul className="max-w-max m-auto text-left list-disc">
            {vers.map((ver) => (
                <li key="1" className="">
                    <span className="">{ver.group}</span>
                    {ver.sub?.map((s) => (
                        <div key={Math.random()} className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                            </svg>
                            <span className="">{s}</span>
                        </div>
                    ))}
                </li>
            ))}
        </ul >
    );
}