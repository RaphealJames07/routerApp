/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {},
        },
        screens: {
            phone: {max: "500px"},
            tab: {max: "850px"},
            laptop_L: {max: "1500px"},
            laptop: {max: "1200px"},
            smphone: {max: "340px"},
        },
    },
    plugins: [],
};
