import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


interface LinkProps {
    links: Array<{
        name: string;
        icon: string;
        link: string;
        linkName: string;
    }>;
}

export default function Links(props: LinkProps) {
    const { links } = props;
    return (
        <div key="" className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-max m-auto my-4">
            {links.map((l) => (
                <Link key="" target='_blank' href={l.link} className="flex items-center text-left border-2 border-black rounded-lg p-2 hover:border-blue-300">
                    <Image
                        src={l.icon}
                        width={64}
                        height={64}
                        className="h-8 w-8 md:h-10 md:w-10 m-2"
                        alt="unknown"
                        key=""
                    />
                    <div key="" className="font-medium ml-2 mr-4 text-xs md:text-sm">
                        <div>{l.name}</div>
                        <div className="text-gray-600">{l.linkName}</div>
                    </div>
                </Link>
            ))}
        </div >
    );
}