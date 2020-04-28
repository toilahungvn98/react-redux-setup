const theme = {
    colors: {
        main: '#37474f',
        dark: '#263238',
        light: '#546e7a',
        lighter: '#b0bec5',
        text: '#fafafa',
        link: '#444444',
    },
    size: {
        smallest: '27.5rem', //275px
        smaller: '50rem', //500px
        small: '60rem', //600px
        medium: '90rem', //900px
        large: '130rem', //1300px
        largest: '150rem', //1500px
    },
    mediaQueries: {
        smallest: `only screen and (max-width: 27.5rem)`,
        smaller: 'only screen and (max-width: 50rem)',
        small: 'only screen and (max-width: 60rem)',
        medium: 'only screen and (max-width: 90rem)',
        large: 'only screen and (max-width: 110rem)',
        larger: 'only screen and (max-width: 130rem)',
        largest: 'only screen and (max-width: 150rem)',
    },
};

export default theme;