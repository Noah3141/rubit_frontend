import { Configuration, OpenAIApi } from "openai";

export const getGPTExample = async (
    lemma: string
): Promise<string | undefined> => {
    try {
        const secret = process.env.CHATGPT_API_KEY;
        if (!secret) {
            throw new Error("WHY NO API KEY");
        }
        const config = new Configuration({ apiKey: secret });
        const openai = new OpenAIApi(config);
        console.log(openai);

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: `Write me an example Russian sentence that uses the word ${lemma}, followed by the English translation in parentheses.`,
                },
            ],
            temperature: 1.3,
            max_tokens: 100,
        });
        console.log(response);

        const outputLine =
            response.data.choices[0]?.message?.content ?? undefined;
        return outputLine;
    } catch (error) {
        // Handle any errors that occurred during the conversion or API request
        console.error(error);
        return undefined;
    }
};
