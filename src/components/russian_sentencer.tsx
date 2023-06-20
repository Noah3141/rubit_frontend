import { useState } from "react";

import React from "react";
import type { EntryState } from "./vocab_list";

const RussianSentencer = (props: {
    id: string;
    showExample: boolean;
    showTranslation: boolean;
    lemma: string;
}) => {
    const [sentence, setSentence] = useState(null);
    const [trans, setTrans] = useState(null);

    const [showExample, setShowExample] = useState<EntryState>({});

    const toggleShowTranslation = (lemma_id: string) => {
        setShowExample((prevState: EntryState) => ({
            ...prevState,
            [lemma_id]: {
                showTranslation: !prevState[lemma_id]?.showTranslation,
                showExample: !!prevState[lemma_id]?.showExample,
            },
        }));
    };

    if (props.showExample == false) {
        return <></>;
    } else {
        return (
            <>
                <div className="flex flex-row justify-between">
                    <div className="pe-4">
                        ChatGPT generated example Russian sentence here.{" "}
                        <i>Cum eligendi eum quo quos aperiam delectus.</i>
                    </div>
                    <div>
                        <button
                            onClick={() => toggleShowTranslation(props.lemma)}
                            className="w-30 float-right me-1 whitespace-nowrap rounded-sm bg-transparent px-2 py-1 align-middle text-sm text-stone-500 outline outline-1 outline-stone-500 hover:bg-stone-500 hover:text-stone-950"
                        >
                            {showExample[props.lemma]?.showTranslation
                                ? "Hide English"
                                : "Show English"}
                        </button>
                    </div>
                </div>
                <div>
                    {showExample[props.lemma]?.showTranslation
                        ? "And here is ChatGPT's translation"
                        : null}
                </div>
            </>
        );
    }
};

export default RussianSentencer;

// function RussSentencer() {
//     const [sentence, setSentence] = useState(null);
//     const [trans, setTrans] = useState(null);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const inputField = event.target.querySelector("input[type='text']");
//         const inputValue = inputField.value;

//         const secret = process.env.REACT_APP_CHATGPT_API_KEY;
//         const { Configuration, OpenAIApi } = require("openai");
//         const config = new Configuration({ apiKey: secret });
//         const openai = new OpenAIApi(config);

//         const response = openai.createChatCompletion({
//             model: "gpt-3.5-turbo",
//             messages: [
//                 {
//                     role: "user",
//                     content: `Write me an example Russian sentence that uses the word ${inputValue}, followed by the English translation in parentheses.`,
//                 },
//             ],
//             temperature: 1.3,
//             max_tokens: 100,
//         });

//         response.then((res) => {
//             console.log(res);
//             console.log(res.data.choices[0].message.content);

//             const outputLine = res.data.choices[0].message.content;

//             /* This is written in a very volatile manner. Any change in ChatGPT's whim-like habits will completely break the tool. Currently requires that it continue to end responses with English in parentheses (which the prompt does not explicitly ask)*/

//             const russOutput = outputLine.split(" (")[0];
//             const engOutput = outputLine
//                 .split(" (")[1]
//                 .replace("(", "")
//                 .replace(")", "");

//             console.log(engOutput);
//             setSentence(russOutput);
//             let engTrans = document.getElementById("engTrans");
//             if (engTrans.classList.contains("text-success")) {
//                 engTrans.classList.remove("text-success");
//                 engTrans.classList.add("text-info");
//             }
//             setTrans(engOutput);
//         });
//     };

//     function switchShow() {
//         let engTrans = document.getElementById("engTrans");
//         if (engTrans === null) {
//             console.log("Couldn't find English Translation!");
//         }

//         if (engTrans.classList.contains("text-info")) {
//             engTrans.classList.remove("text-info");
//             engTrans.classList.add("text-success");
//         } else {
//             engTrans.classList.remove("text-success");
//             engTrans.classList.add("text-info");
//         }
//     }
// }
