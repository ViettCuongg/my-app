/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                '100px': '100px',
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            purple: '#3f3cbb',
            midnight: '#121063',
            metal: '#565584',
            tahiti: '#e11d48',
            silver: '#ecebff',
            'bubble-gum': '#ff77e9',
            bermuda: '#059669',
            red: '#f43f5e',
            orange: '#f37435',
            // blue: "#1e40af",
            bluedark: '#1e40af',
            customPurple: '#8a2be2',
            lightblue: '#0ea5e9',
            green: '#006A4E',
            blue_gray: { 600: '#5f6c86', 900: '#262b35' },
            blue: { A700: '#0061ff', A700_19: '#0061ff19', A200: '#f44336' },
        },
        letterSpacing: {
            tighter: '-1.2px',
        },
    },
    plugins: [],
};
