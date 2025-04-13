import React, { useState } from 'react';
import { Image, Text, View, StatusBar } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import {
    Poppins_400Regular,
    Poppins_700Bold,
    useFonts,
} from '@expo-google-fonts/poppins';
import switchTheme from 'react-native-theme-switch-animation';

import { light } from './libs/unistyles/theme';
import { AppThemes } from './libs/unistyles';
import { CirclePhoto, TextButton } from './components';

export default function App() {
    const [theme, setTheme] = useState<keyof AppThemes>('light');
    useFonts({ Poppins_400Regular, Poppins_700Bold });
    function onToggleTheme() {
        const currentTheme = UnistylesRuntime.getTheme();
        const newTheme = currentTheme === light ? 'dark' : 'light';
        switchTheme({
            switchThemeFunction: () => {
                UnistylesRuntime.setTheme(newTheme);
                setTheme(newTheme);
            },
            animationConfig: {
                type: 'fade',
                duration: 500,
            },
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar
                translucent={false}
                backgroundColor={UnistylesRuntime.getTheme().colors.background}
                barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
            />
            <View style={styles.containerImages}>
                <Image
                    source={require('../assets/image.jpg')}
                    style={styles.image}
                    resizeMode="cover"
                />
                <CirclePhoto
                    source={require('../assets/profile.jpg')}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.containerDescription}>
                <Text style={styles.header}>Ramon Dias</Text>
                <Text style={styles.profession}>Mobile Developer</Text>
                <Text style={styles.description}>
                    Sou um desenvolvedor mobile dedicado, sempre em busca de ir
                    além para apoiar o time e oferecer a melhor experiência aos
                    usuários.
                </Text>
                <TextButton onPress={onToggleTheme} text="Mudar tema" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    image: {
        height: 210,
        width: '100%',
    },
    containerImages: {
        marginBottom: 157 / 2,
    },
    containerDescription: {
        alignItems: 'center',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontFamily: 'Poppins_700Bold',
        color: theme.colors.text,
        textAlign: 'center',
        marginBottom: 8,
    },
    profession: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: theme.colors.primary,
        textAlign: 'center',
        marginBottom: 16,
    },
    description: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: theme.colors.text,
        textAlign: 'center',
        marginBottom: 16,
    },
}));
