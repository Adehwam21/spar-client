/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // Adjust paths based on your project structure
    ],
    theme: {
        extend: {
            fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                'gold': '#f3c300',
                'green-custom': '#1b5e20', // Example of a custom color
                'gray-overlay': 'rgba(0, 0, 0, 0.8)', // Example for overlay
            },
            height: {
                '100': "33rem",
                '105': "40rem",
                '110': "45rem",
                '115': "50rem"
            },
            transitionProperty: {
                'transform': 'transform',
            },
            transform: {
                'slide-in-right': 'translateX(0)',
                'slide-out-right': 'translateX(100%)',
            },
        },
    },
    plugins: [],
};
