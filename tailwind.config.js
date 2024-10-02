``

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            height: {
                '100svh': '100svh'
            },
            screens: {
                'tablet': '760px',
                'desktop': '1280px',
                's1230': '1230px',
                's800': '800px',
                's600': '600px',
                's335': '335px',
                's1000': '1000px',
                's1300': '1300px',
                's450': '450px',
            },
        },
    },
    plugins: [],
}
