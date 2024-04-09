/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'primary': {
                    DEFAULT: '#F5F1ED',
                    50: '#FFFFFF',
                    100: '#FFFFFF',
                    200: '#FFFFFF',
                    300: '#FFFFFF',
                    400: '#FFFFFF',
                    500: '#F5F1ED',
                    600: '#E1D5C9',
                    700: '#CDB9A5',
                    800: '#B99D81',
                    900: '#A5815D',
                    950: '#947352'
                },
                'secondary': {
                    DEFAULT: '#393DFF',
                    50: '#F1F1FF',
                    100: '#DCDDFF',
                    200: '#B3B5FF',
                    300: '#8B8DFF',
                    400: '#6265FF',
                    500: '#393DFF',
                    600: '#0106FF',
                    700: '#0004C8',
                    800: '#000390',
                    900: '#000258',
                    950: '#00013C'
                },
                'accent': {
                    DEFAULT: '#F96900',
                    50: '#FFD2B2',
                    100: '#FFC69D',
                    200: '#FFAF74',
                    300: '#FF974C',
                    400: '#FF8023',
                    500: '#F96900',
                    600: '#C15100',
                    700: '#893A00',
                    800: '#512200',
                    900: '#190A00',
                    950: '#000000'
                },
                'black': {
                    DEFAULT: '#040926',
                    50: '#1530CC',
                    100: '#142CBA',
                    200: '#102395',
                    300: '#0C1A70',
                    400: '#08124B',
                    500: '#040926',
                    600: '#000000',
                    700: '#000000',
                    800: '#000000',
                    900: '#000000',
                    950: '#000000'
                },
            }
        },
    },
    plugins: [],
}

