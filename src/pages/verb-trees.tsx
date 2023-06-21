import React from "react";
import Head from "next/head";

import Header from "~/components/header";

const VerbTrees = () => {
    return (
        <>
            <Head>
                <title>Tree Model</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <main className="flex min-h-screen bg-stone-950 p-2 pb-16 pt-8  font-main text-xl text-stone-300 sm:flex sm:flex-col sm:items-center sm:p-8">
                <div className="px-4 transition-all duration-200 sm:w-[600px] md:w-[700px] lg:w-[800px]"></div>
            </main>
        </>
    );
};

export default VerbTrees;
