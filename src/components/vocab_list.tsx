import { useState } from "react";
import type RawVocabularyList from "~/models/vocabulary_lists";
import type RawVocabEntry from "~/models/vocabulary_lists";
import RussianSentencer from "./russian_sentencer";

type ShowExampleState = Record<string, boolean>;

enum LinkLanguage {
    Russian = 0,
    English = 1,
}

const RawVocabList = (listData: RawVocabularyList) => {
    const [linkLang, setLinkLang] = useState<LinkLanguage>(
        LinkLanguage.English
    );

    const [showExample, setShowExample] = useState<ShowExampleState>({});

    const toggleShowExample = (id: string) => {
        setShowExample((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <>
            <div className="mb-5 flex justify-end ">
                <button
                    onClick={() => {
                        linkLang == LinkLanguage.English
                            ? setLinkLang(LinkLanguage.Russian)
                            : setLinkLang(LinkLanguage.English);
                    }}
                    className=" rounded-sm bg-stone-600 px-4 py-2 hover:bg-orange-700"
                >
                    Links: {linkLang == LinkLanguage.English ? "EN" : "RU"}
                </button>
            </div>
            <div>
                {listData.entry_list.map(
                    (vocabEntry) =>
                        vocabEntry.lemma && (
                            <div
                                className="flex h-10 flex-row justify-between border-b-[1px] border-b-stone-900 py-1 ps-3 text-xl transition-all duration-300 hover:bg-stone-900"
                                key={vocabEntry.lemma}
                                id={vocabEntry.lemma}
                            >
                                <div>
                                    {" "}
                                    <a
                                        className="hover:text-orange-700"
                                        target="_blank"
                                        href={
                                            linkLang == LinkLanguage.English
                                                ? `https://en.wiktionary.org/wiki/${vocabEntry.lemma}`
                                                : `https://ru.wiktionary.org/wiki/${vocabEntry.lemma}`
                                        }
                                    >
                                        {vocabEntry.lemma}
                                    </a>
                                    <span className="cursor-default">
                                        {" "}
                                        - {vocabEntry.frequency}
                                    </span>
                                    <div>
                                        <RussianSentencer
                                            id={`${vocabEntry.lemma}_sentence`}
                                            show={
                                                showExample[vocabEntry.lemma] ??
                                                false
                                            }
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        toggleShowExample(vocabEntry.lemma);
                                        const row = document.getElementById(
                                            vocabEntry.lemma
                                        );

                                        if (row?.classList.contains("h-20")) {
                                            row?.classList.remove("h-20");
                                        } else {
                                            row?.classList.add("h-20");
                                        }
                                    }}
                                    className="float-right my-auto me-1 h-fit rounded-sm bg-stone-700 px-1 py-1 text-sm"
                                >
                                    Show Example
                                </button>
                            </div>
                        )
                )}
            </div>
        </>
    );
};

export default RawVocabList;
