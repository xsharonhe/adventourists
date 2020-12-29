import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        font: {
            header: string;
            body: string;
        },
        size: {
            [key: string]: number | string;
        },
        radius: {
            default: string;
            border: string;
        },
        media: {
            [key: string]: number | string;
        },
        transitions: {
            cubicBezier: string;
        },
        colors: {
            [key: string]: number | string;
        },
        boxShadow: {
            shallow: string;
        }
    }
};

export const baseTheme = {
    font: {
        header: '"itc-avant-garde-gothic-pro", sans-serif',
        body: '"futura-pt", sans-serif',
    },
    size: {
        default: '1rem',
        small: '0.85rem',
        h1: '2rem',
        h2: '1.75rem',
        h3: '1.3rem',
        defaultLarger: '1.2rem',
        large: '2.5rem',
    },
    radius: {
        default: '8px',
        border: '20px',
    },
    media: {
        small: '325',
        mobile: '414',
        tablet: '834',
        laptop: '1480',
        desktop: '2560'
    },
    transitions: {
        cubicBezier: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)'
    },
    colors: {
        primary: '#8db596',
        secondary: '#F0F5FF',
        background: '#FFFFFF',
        text: '#393E46',
        caption: '#9ba4b4',
        hover: 'rgba(141, 181, 150, 0.85)',
        primaryO: 'rgba(141, 181, 150, 0.25)'
    },
    boxShadow: {
        shallow: '0 3px 2px 0 rgba(141, 181, 150, 0.15)'
    }
};