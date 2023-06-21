import { useState } from "react";
import type RawVocabularyList from "~/models/vocabulary_lists";
import type RawVocabEntry from "~/models/vocabulary_lists";
import RussianSentencer from "./russian_sentencer";
import { getGPTExample } from "~/utils/request_gpt";

type ListState = Record<string, Fields>;
type Fields = {
    showExample: boolean;
    gptExample: string | undefined;
    isLoading: boolean;
};

enum LinkLanguage {
    Russian = 0,
    English = 1,
}

const RawVocabList = (listData: RawVocabularyList) => {
    const [linkLang, setLinkLang] = useState<LinkLanguage>(
        LinkLanguage.English
    );
    const [showFrequency, setShowFrequency] = useState<boolean>(true);

    const [listState, setListState] = useState<ListState>({});

    const toggleShowExample = (lemma_id: string) => {
        setListState(
            (prevState: ListState): ListState => ({
                ...prevState,
                [lemma_id]: {
                    gptExample: prevState[lemma_id]?.gptExample ?? undefined,
                    showExample: !prevState[lemma_id]?.showExample,
                    isLoading: !!prevState[lemma_id]?.isLoading,
                },
            })
        );
    };

    // const toggleShowTranslation = (lemma_id: string) => {
    //     setListState((prevState: ListState) => ({
    //         ...prevState,
    //         [lemma_id]: {
    //             gptExample: prevState[lemma_id]?.gptExample ?? undefined,
    //             showExample: !!prevState[lemma_id]?.showExample,
    //             isLoading: !!prevState[lemma_id]?.isLoading,
    //         },
    //     }));
    // };

    const setGPTExample = (
        gptSentence: string | undefined,
        lemma_id: string
    ) => {
        setListState(
            (prevState: ListState): ListState => ({
                ...prevState,
                [lemma_id]: {
                    gptExample: gptSentence,
                    showExample: !!prevState[lemma_id]?.showExample,
                    isLoading: !!prevState[lemma_id]?.isLoading,
                },
            })
        );
    };

    const setIsLoading = (newState: boolean, lemma_id: string) => {
        setListState(
            (prevState: ListState): ListState => ({
                ...prevState,
                [lemma_id]: {
                    gptExample: prevState[lemma_id]?.gptExample ?? undefined,
                    showExample: !!prevState[lemma_id]?.showExample,
                    isLoading: newState,
                },
            })
        );
    };

    return (
        <>
            <div className="mb-5 mt-6 flex flex-col items-end gap-4 sm:mt-6">
                <button
                    onClick={() => {
                        linkLang == LinkLanguage.English
                            ? setLinkLang(LinkLanguage.Russian)
                            : setLinkLang(LinkLanguage.English);
                    }}
                    className="w-full rounded-sm bg-stone-600 px-4 py-2 hover:bg-orange-700 sm:w-fit"
                >
                    Links: {linkLang == LinkLanguage.English ? "EN" : "RU"}
                </button>
                <button
                    onClick={() => {
                        setShowFrequency((v) => !v);
                    }}
                    className="w-full rounded-sm bg-stone-600 px-4 py-2 hover:bg-orange-700 sm:w-fit"
                >
                    Count: {showFrequency ? "Hide" : "Show"}
                </button>
            </div>
            <div>
                {listData.entry_list.map(
                    (vocabEntry) =>
                        vocabEntry.lemma && (
                            <div
                                key={vocabEntry.lemma}
                                className=" hover:bg-stone-900 hover:outline hover:outline-1 hover:outline-orange-600"
                            >
                                <div
                                    className="entry-collapsed flex flex-col  border-b-[1px] border-b-stone-900 py-2 ps-3 text-xl transition-all duration-300"
                                    key={vocabEntry.lemma}
                                    id={vocabEntry.lemma}
                                >
                                    <div className="flex flex-row  justify-between">
                                        <div>
                                            <a
                                                className="hover:text-orange-700"
                                                target="_blank"
                                                title="Open dictionary in new tab"
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
                                                {showFrequency
                                                    ? ` - ${vocabEntry.frequency}`
                                                    : ""}
                                            </span>
                                        </div>
                                        <div className="flex flex-row gap-1">
                                            {typeof listState[vocabEntry.lemma]
                                                ?.gptExample == "string" ? (
                                                <div className="">
                                                    <button
                                                        onClick={async () => {
                                                            setGPTExample(
                                                                undefined,
                                                                vocabEntry.lemma
                                                            );

                                                            setIsLoading(
                                                                true,
                                                                vocabEntry.lemma
                                                            );
                                                            const gpt_res =
                                                                await getGPTExample(
                                                                    vocabEntry.lemma
                                                                );
                                                            setIsLoading(
                                                                false,
                                                                vocabEntry.lemma
                                                            );
                                                            setGPTExample(
                                                                gpt_res,
                                                                vocabEntry.lemma
                                                            );
                                                        }}
                                                        className="float-right me-2 truncate rounded-sm bg-transparent px-2 py-1 text-sm text-stone-500 outline outline-1 outline-stone-500 hover:bg-stone-500 hover:text-stone-950"
                                                    >
                                                        New Example
                                                    </button>
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                            <button
                                                onClick={async () => {
                                                    toggleShowExample(
                                                        vocabEntry.lemma
                                                    );

                                                    if (
                                                        listState[
                                                            vocabEntry.lemma
                                                        ]?.gptExample ==
                                                        undefined
                                                    ) {
                                                        setIsLoading(
                                                            true,
                                                            vocabEntry.lemma
                                                        );
                                                    }

                                                    const row =
                                                        document.getElementById(
                                                            vocabEntry.lemma
                                                        );

                                                    row?.classList.contains(
                                                        "entry-expanded"
                                                    )
                                                        ? row?.classList.replace(
                                                              "entry-expanded",

                                                              "entry-collapsed"
                                                          )
                                                        : row?.classList.replace(
                                                              "entry-collapsed",
                                                              "entry-expanded"
                                                          );

                                                    if (
                                                        listState[
                                                            vocabEntry.lemma
                                                        ]?.gptExample ==
                                                        undefined
                                                    ) {
                                                        const gpt_res =
                                                            await getGPTExample(
                                                                vocabEntry.lemma
                                                            );
                                                        setIsLoading(
                                                            false,
                                                            vocabEntry.lemma
                                                        );
                                                        setGPTExample(
                                                            gpt_res,
                                                            vocabEntry.lemma
                                                        );
                                                    }
                                                }}
                                                className="float-right me-2 rounded-sm bg-transparent px-2 text-sm text-stone-500 outline outline-1 outline-stone-500 hover:bg-stone-500 hover:text-stone-950"
                                            >
                                                {listState[vocabEntry.lemma]
                                                    ?.showExample
                                                    ? "Hide Example"
                                                    : "Show Example"}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="">
                                        <RussianSentencer
                                            id={`${vocabEntry.lemma}_sentence`}
                                            showExampleState={
                                                listState[vocabEntry.lemma]
                                                    ?.showExample ?? false
                                            }
                                            gptExample={
                                                listState[vocabEntry.lemma]
                                                    ?.gptExample ?? undefined
                                            }
                                            lemma={vocabEntry.lemma}
                                            isLoading={
                                                !!listState[vocabEntry.lemma]
                                                    ?.isLoading
                                            }
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
export type { ListState, Fields };
