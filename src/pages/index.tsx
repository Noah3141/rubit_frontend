import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";
import { Triangle } from "react-loader-spinner";
import Header from "../components/header";
import RussianSentencer from "../components/russian_sentencer";
import DownArrowSharp from "~/images/icons/DownArrowSharp";
import RawVocabList from "~/components/vocab_list";
import RawVocabularyList from "~/models/vocabulary_lists";
import Footer from "~/components/footer";

const Home: NextPage = () => {
    const [input, setInput] = useState("");
    const [breadth, setBreadth] = useState("Full List");
    const [style, setStyle] = useState("Raw Vocabulary");

    const [isListLoading, setIsListLoading] = useState<boolean>(false);
    const [listData, setListData] = useState<RawVocabularyList | undefined>(
        undefined
    );

    const generateList = async () => {
        if (style == "Raw Vocabulary") {
            // !) OUTGOING DATA MATCHES INCOMING PATTERN IN RUST
            setIsListLoading(true);
            const res = await fetch(
                "https://toolkitapi-production.up.railway.app/russian/generate-list/raw-vocabulary",
                {
                    method: "POST",
                    mode: "cors",
                    body: JSON.stringify({
                        input_text: input,
                        breadth: breadth,
                        style: style,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin":
                            "https://www.russianvocabularylistmaker.com/",
                    },
                }
            );

            if (!res.ok) {
                throw new Error("Failed to fetch");
            }
            const data = (await res.json()) as RawVocabularyList;

            if (typeof data == null || typeof data.entry_list == null) {
                throw new Error("Failed to fetch");
            }

            data.entry_list.sort((a, b) => b.frequency - a.frequency);

            setIsListLoading(false);
            setListData(data);
        }
    };

    return (
        <>
            <Head>
                <title>Rubit - List Generator</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="icon" href="/favicon.ico?v=3" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <main className="min-h-screen bg-stone-950 pb-16 pt-8 font-main  text-stone-200 sm:flex sm:flex-col sm:items-center ">
                <div className="max-w-6xl px-4 transition-all duration-200">
                    <section className="mb-8 sm:mb-8">
                        <h1 className="mb-2 mt-2 text-center text-5xl font-bold">
                            Rubit
                        </h1>
                        <h3 className="text-center text-2xl">
                            Create vocabulary lists from Russian text!
                        </h3>
                        <div className="py-2">
                            <p className="py-1">
                                Try YouTube transcripts of podcasts or speeches,
                                book chapters, or articles.
                            </p>
                            <p className="py-1">
                                Input your study material text and choose
                                settings for what kind of list output you want.
                            </p>
                        </div>
                    </section>

                    {/* BUTTON SECTION */}
                    <div className="pb-8">
                        {/* Text Field */}
                        <div className="w-full ">
                            <textarea
                                className=" h-36 w-full rounded-sm bg-stone-900 p-3 outline-none outline-2 outline-offset-[-2px] outline-orange-700"
                                name="inputField"
                                onChange={(e) => setInput(e.target.value)}
                                id="inputField"
                            />
                        </div>
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                            <div className="flex flex-row">
                                {/* Button 1 */}
                                <button
                                    className=" disabled mt-4 flex h-10 w-1/2 flex-row justify-between rounded-s-sm bg-stone-400 p-2 pe-1 ps-4 transition-all duration-100   focus:ring-inset focus:ring-orange-800 sm:w-auto"
                                    name="Output_Breadth"
                                    disabled
                                    id="Output_Breadth"
                                    title="Select breadth of output list"
                                >
                                    Full List
                                    <div className="flex flex-col content-end justify-center px-2 text-stone-100">
                                        <DownArrowSharp size="12px" />
                                    </div>
                                </button>

                                {/* Button 2 */}
                                <button
                                    className="disabled mt-4 flex h-10 w-1/2 flex-row  justify-between rounded-e-sm border-s-[1.5px] border-s-stone-700 bg-stone-400 p-2 px-2 ps-4 transition-all duration-100  focus:ring-inset focus:ring-orange-800  sm:w-auto"
                                    name="Output_Style"
                                    disabled
                                    id="Output_Style"
                                    title="Select style of output list"
                                >
                                    Raw Vocabulary
                                    <div className="flex flex-col content-center justify-center pe-1 ps-2 text-stone-100">
                                        <DownArrowSharp size="12px" />
                                    </div>
                                </button>
                            </div>

                            {/* Button 3 */}
                            <div>
                                <button
                                    className="mt-4 h-10 w-full rounded-sm bg-stone-600 p-2 px-4 transition-all duration-100 hover:bg-orange-700 focus:ring-inset focus:ring-orange-800"
                                    title="Generate vocabulary list"
                                    type="submit"
                                    onClick={generateList}
                                    id="Create_List"
                                >
                                    Create List
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* BUTTON SECTION END */}
                    {/* LIST SECTION */}

                    {isListLoading ? (
                        <div className="mt-8 flex rotate-180 flex-row justify-center">
                            <Triangle
                                height="90"
                                width="90"
                                color="#c2410c"
                                ariaLabel="triangle-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                    ) : listData ? (
                        <RawVocabList {...listData} />
                    ) : (
                        <>
                            <div>
                                (Alternate settings are currently still in
                                development)
                            </div>
                            <div>
                                Need some Russian text to try it out? Try this:
                                Привет миру!
                            </div>
                        </>
                    )}
                    {/* LIST SECTION END */}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
