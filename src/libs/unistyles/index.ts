import { UnistylesConfig } from 'react-native-unistyles/lib/typescript/src/specs/StyleSheet';

import { dark, light } from './theme';
import { StyleSheet } from 'react-native-unistyles';

export interface AppThemes {
    dark: typeof dark;
    light: typeof light;
}

// Como estamos usando TypeScript, vou substituir os
// tipos da biblioteca para melhorar o autocomplete.

declare module 'react-native-unistyles' {
    export interface UnistylesThemes extends AppThemes {}
}

const config: UnistylesConfig = {
    themes: {
        light,
        dark,
    },
    settings: {
        adaptiveThemes: false,
        initialTheme: 'light',
    },
} as const;

export default config;

StyleSheet.configure(config);
