export const breakpoints = ["576px", "768px", "992px", "1290px", "1600px"]

export const theme = {
    colors: {
        white: 'rgb(255,255,255)',
        grey: 'rgb(2,2,2)',
        black: 'rgb(7,7,11)',
        blockGrey: 'rgb(13,13,15)',
        lightGrey: 'rgb(18,18,20)',
        blue: 'rgb(42,93,250)',
        red: 'rgb(248,81,61,1)',
        btnGrey: 'rgb(40,39,41)'
    },
    fonts: {
        body: "'Roboto', sans-serif;",
    },
    sizes: {
        maxWidth: "1200px"
    },
    buttons: {
        paddingSmall: "10px 30px",
        paddingMedium: "16px 42px",
    },
    fontSizes: {
        massive: "9rem",
        banner: "4.8rem",
        h1: "3.2rem",
        h2: "2.8rem",
        h3: "2.4rem",

        lead: "1.8rem",
        body: "1.5rem",
        label: "1.1rem",
        small: "1.3rem",
    },
    space: {
        xxs: "0.5rem", //5px
        xs: "1rem", //10px
        sm: "2.4rem", //24px
        sm_2: "3rem", //30px
        md: "4rem", //40px
        lg: "5.6rem", //56px
        xl: "7.2rem", //72px
        xxl: "9.6rem", //96px
    },
    transitions: {
        default: "all 0.5s ease",
    },
    radii: {
        default: "4px",
        sm: "4px",
        md: "10px",
        lg: "16px",
        xl: "30px",
    },
    mediaQueries: {
        sm: `@media screen and (min-width: ${breakpoints[0]})`,
        md: `@media screen and (min-width: ${breakpoints[1]})`,
        lg: `@media screen and (min-width: ${breakpoints[2]})`,
        xl: `@media screen and (min-width: ${breakpoints[3]})`,
        xxl: `@media screen and (min-width: ${breakpoints[4]})`,
    },
}
