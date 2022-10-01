/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#DE4300",
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
