/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            spacing: {
                "100px": "100px",
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            purple: "#3f3cbb",
            midnight: "#121063",
            metal: "#565584",
            tahiti: "#e11d48",
            silver: "#ecebff",
            "bubble-gum": "#ff77e9",
            bermuda: "#059669",
            red: "#f43f5e",
            blue: "#1e40af",
            bluedark: "#1e40af",
            lightblue: "#0ea5e9",
            slate: "rgb(51, 65, 85)",
        },
        letterSpacing: {
            tighter: "-1.2px",
        },
    },
    plugins: [],
};
