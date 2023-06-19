import { useState } from "react";

import React from "react";

const RussianSentencer = (props: { id: string; show: boolean }) => {
    const [sentence, setSentence] = useState(null);
    const [trans, setTrans] = useState(null);

    if (props.show == false) {
        return <></>;
    } else {
        return (
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                eligendi eum quo quos aperiam delectus ex sequi quas tempore
                ipsam est porro dolorum cumque minima iure quae, quia ipsum
                molestias.
            </div>
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
