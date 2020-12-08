const { fontFamily, colors } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...fontFamily.sans],
            },

            colors: {
                primary: '#f14833',
                // dark3: {
                //     '100': '#101010',
                //     '200': '#262a2f',
                //     '300': '#31363a',
                // },
                dark: {
                    '100': '#101010',
                    '200': '#303030',
                    '300': '#3d3d3d',
                },
                gray: {
                    ...colors.gray,
                    '1000': '#e5e5e5',
                    '1111': '#999',
                },
                blue: {
                    ...colors.blue,
                    '1000': '#179de3',
                },
                green: {
                    ...colors.green,
                    '1000': '#8bc34a',
                },
            },
        },
    },

    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },

    plugins: [],
};

