'use client'

import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'

export default function HamburgerMenu(e: any) {
    var isOpen = false;

    const toggleNavbar = () => {
        var str = "w-full md:block md:w-auto NavbarClass"; // MUST BE THE SAME AS IN NAVBAR
        const div = document.getElementsByClassName("NavbarClass")[0];
        if (isOpen) {
            div.setAttribute("class", "hidden " + str);
            isOpen = false;
        } else {
            div.setAttribute("class", "visible " + str);
            isOpen = true;
        }
    };

    return (
        <button onClick={toggleNavbar} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden">
            <Image
                src="/icons/bars-solid.svg"
                width={40}
                height={40}
                className="h-10 invert-0"
                alt="Menu"
            />
        </button>
    )
}