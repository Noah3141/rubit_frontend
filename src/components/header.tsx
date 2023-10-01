import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../images/logos/FaviconBase.png";
import MenuRows from "~/images/icons/MenuRows";

const Header = () => {
    const [unfolded, setUnfolded] = useState(false);
    return (
        <>
            <div className="flex justify-end bg-stone-900 sm:hidden">
                <button
                    onClick={() => {
                        setUnfolded((p) => !p);
                    }}
                    className="my-3 me-3 rounded-sm border-2 border-orange-600 px-2 py-2 text-orange-600 hover:border-orange-700 hover:text-orange-700"
                >
                    <MenuRows />
                </button>
            </div>
            <div>
                <Image
                    className="absolute left-8 top-3 hidden md:inline"
                    src={Logo}
                    alt="diagram"
                    width={42}
                    height={42}
                ></Image>
            </div>
            <div
                className={`flex flex-col overflow-hidden border-b-2 border-b-orange-600 bg-stone-900 transition-all duration-100 sm:h-auto  sm:flex-row sm:justify-end sm:border-0 sm:bg-stone-950 sm:text-xl ${
                    unfolded ? "h-44" : "h-0"
                }`}
            >
                <Link
                    href="/"
                    className="cursor-pointer border-b-2 border-transparent px-5 py-2 text-stone-200 transition duration-100 hover:bg-orange-600 hover:text-stone-200 sm:py-4  sm:hover:border-b-2 sm:hover:border-b-orange-600 sm:hover:bg-stone-950 sm:hover:text-orange-600"
                >
                    <div>List Generator</div>
                </Link>
                <Link
                    href="/verb-pairs"
                    className="cursor-pointer border-b-2 border-transparent px-5 py-2 text-stone-200 transition duration-100 hover:bg-orange-600 hover:text-stone-200 sm:py-4 sm:hover:border-b-2 sm:hover:border-b-orange-600 sm:hover:bg-stone-950 sm:hover:text-orange-600"
                >
                    <div>Verb Pairs</div>
                </Link>
                <Link
                    href="/verb-trees"
                    className="cursor-pointer border-b-2 border-transparent px-5 py-2 text-stone-200 transition duration-100 hover:bg-orange-600 hover:text-stone-200 sm:py-4 sm:hover:border-b-2 sm:hover:border-b-orange-600 sm:hover:bg-stone-950 sm:hover:text-orange-600"
                >
                    <div>Verb Trees</div>
                </Link>
                <Link
                    href="/tree-model"
                    className="me-0 cursor-pointer border-b-2 border-transparent px-5 py-2 text-stone-200 transition duration-100 hover:bg-orange-600 hover:text-stone-200 sm:me-6 sm:py-4 sm:hover:border-b-2 sm:hover:border-b-orange-600 sm:hover:bg-stone-950 sm:hover:text-orange-600"
                >
                    <div>Tree Model</div>
                </Link>
            </div>
        </>
    );
};

export default Header;
