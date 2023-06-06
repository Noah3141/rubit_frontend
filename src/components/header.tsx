import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="flex cursor-pointer flex-col border border-2 border-orange-600 bg-stone-900  sm:flex-row sm:justify-end sm:border-0 sm:bg-stone-950 sm:text-xl">
            <Link
                href="/"
                className="border-b-2 border-transparent px-5 py-2 text-stone-200 transition duration-100 hover:bg-orange-600 hover:text-stone-200 sm:py-4  sm:hover:border-b-2 sm:hover:border-b-orange-600 sm:hover:bg-stone-950 sm:hover:text-orange-600"
            >
                <div>List Generator</div>
            </Link>
            <Link
                href="/pairs"
                className="border-b-2 border-transparent px-5 py-2 text-stone-200 transition duration-100 hover:bg-orange-600 hover:text-stone-200 sm:py-4 sm:hover:border-b-2 sm:hover:border-b-orange-600 sm:hover:bg-stone-950 sm:hover:text-orange-600"
            >
                <div>Verb Pairs</div>
            </Link>
            <Link
                href="/trees"
                className="border-b-2 border-transparent px-5 py-2 text-stone-200 transition duration-100 hover:bg-orange-600 hover:text-stone-200 sm:py-4 sm:hover:border-b-2 sm:hover:border-b-orange-600 sm:hover:bg-stone-950 sm:hover:text-orange-600"
            >
                <div>Verb Trees</div>
            </Link>
            <Link
                href="/tree-model"
                className="me-0 border-b-2 border-transparent px-5 py-2 text-stone-200 transition duration-100 hover:bg-orange-600 hover:text-stone-200 sm:me-6 sm:py-4 sm:hover:border-b-2 sm:hover:border-b-orange-600 sm:hover:bg-stone-950 sm:hover:text-orange-600"
            >
                <div>Tree Model</div>
            </Link>
        </div>
    );
};

export default Header;
