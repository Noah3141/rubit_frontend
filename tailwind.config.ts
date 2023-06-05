import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            main: ["Inter", "sans-serif"],
        },
        extend: {},
    },
    plugins: [],
} satisfies Config;
