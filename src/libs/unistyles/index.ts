import { StyleSheet } from 'react-native-unistyles';

import { dark, light } from './theme';

interface AppThemes {
    dark: typeof dark;
    light: typeof light;
}

// Como estamos usando TypeScript, vou substituir os
// tipos da biblioteca para melhorar o autocomplete.

declare module 'react-native-unistyles' {
    export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
    themes: {
        light,
        dark,
    },
    settings: {
        adaptiveThemes: false,
        initialTheme: 'light',
    },
});
