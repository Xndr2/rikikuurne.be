import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


interface ExpoProps {
    expos: Array<{
        place: string;
    }>;
}

export default function Expos(props: ExpoProps) {
    const { expos } = props;
    return (
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 max-w-max m-auto text-left">
            {expos.map((expo) => (
                <li key="" className="flex items-center">
                    <svg key="" className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span className="ml-1">{expo.place}</span>
                </li>
            ))}
            <li key="" className="flex items-center col-span-2 md:col-span-3">
                <svg key="" className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span className="ml-1">Permanent tentoon bij <Link key="" target='_blank' className="hover:underline" href="https://www.verthe-interieurs.be/en/nieuws/exclusieve-vernissage-van-riki-crien/">Verthé</Link></span>
            </li>
        </ul >
    );
}