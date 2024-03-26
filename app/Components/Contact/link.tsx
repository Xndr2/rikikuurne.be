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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-max m-auto my-4">
            {links.map((l) => (
                <Link target='_blank' href={l.link} className="flex items-center text-left border-2 rounded-lg p-2 hover:border-blue-300">
                    <Image
                        src={l.icon}
                        width={64}
                        height={64}
                        className="h-8 w-8 md:h-10 md:w-10 m-2 invert"
                        alt="unknown"
                    />
                    <div className="font-medium ml-2 mr-4 text-xs md:text-sm">
                        <div>{l.name}</div>
                        <div className="text-gray-500 dark:text-gray-400">{l.linkName}</div>
                    </div>
                </Link>
            ))}
        </div >
    );
}