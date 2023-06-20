import { useState } from "react";
import type RawVocabularyList from "~/models/vocabulary_lists";
import type RawVocabEntry from "~/models/vocabulary_lists";
import RussianSentencer from "./russian_sentencer";

type EntryState = Record<string, Fields>;
type Fields = {
    showExample: boolean;
    showTranslation: boolean;
};

enum LinkLanguage {
    Russian = 0,
    English = 1,
}

const RawVocabList = (listData: RawVocabularyList) => {
    const [linkLang, setLinkLang] = useState<LinkLanguage>(
        LinkLanguage.English
    );

    const [showExample, setShowExample] = useState<EntryState>({});

    const toggleShowExample = (lemma_id: string) => {
        setShowExample((prevState: EntryState) => ({
            ...prevState,
            [lemma_id]: {
                showTranslation: !!prevState[lemma_id]?.showTranslation,
                showExample: !prevState[lemma_id]?.showExample,
            },
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
                                key={vocabEntry.lemma}
                                className=" hover:bg-stone-900 "
                            >
                                <div
                                    className="flex h-10 flex-col overflow-clip border-b-[1px] border-b-stone-900 py-1 ps-3 text-xl transition-all duration-300"
                                    key={vocabEntry.lemma}
                                    id={vocabEntry.lemma}
                                >
                                    <div className="flex flex-row justify-between">
                                        <div>
                                            <a
                                                className="hover:text-orange-700"
                                                target="_blank"
                                                href={
                                                    linkLang ==
                                                    LinkLanguage.English
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
                                        </div>
                                        <button
                                            onClick={() => {
                                                toggleShowExample(
                                                    vocabEntry.lemma
                                                );

                                                const row =
                                                    document.getElementById(
                                                        vocabEntry.lemma
                                                    );

                                                if (
                                                    row?.classList.contains(
                                                        "h-40"
                                                    )
                                                ) {
                                                    row?.classList.remove(
                                                        "h-40"
                                                    );
                                                } else {
                                                    row?.classList.add("h-40");
                                                }
                                            }}
                                            className="w-30 float-right me-1 rounded-sm bg-transparent px-2 py-1 align-middle text-sm text-stone-500 outline outline-1 outline-stone-500 hover:bg-stone-500 hover:text-stone-950"
                                        >
                                            {showExample[vocabEntry.lemma]
                                                ?.showExample
                                                ? "Hide Example"
                                                : "Show Example"}
                                        </button>
                                    </div>
                                    <div className="py-2 pt-3">
                                        <RussianSentencer
                                            id={`${vocabEntry.lemma}_sentence`}
                                            showExample={
                                                showExample[vocabEntry.lemma]
                                                    ?.showExample ?? false
                                            }
                                            showTranslation={
                                                showExample[vocabEntry.lemma]
                                                    ?.showTranslation ?? false
                                            }
                                            lemma={vocabEntry.lemma}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                )}
            </div>
        </>
    );
};

export default RawVocabList;
export type { EntryState, Fields };
