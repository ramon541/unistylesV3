import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { light } from './libs/unistyles/theme';
import { AppThemes } from './libs/unistyles';
import { CirclePhoto, TextButton } from './components';

export default function App() {
    const [theme, setTheme] = useState<keyof AppThemes>('light');
    function onToggleTheme() {
        const currentTheme = UnistylesRuntime.getTheme();
        const newTheme = currentTheme === light ? 'dark' : 'light';
        setTheme(newTheme);
        UnistylesRuntime.setTheme(newTheme);
    }

    return (
        <View style={styles.container}>
            <StatusBar
                translucent={false}
                backgroundColor={UnistylesRuntime.getTheme().colors.background}
                style={theme === 'dark' ? 'light' : 'dark'}
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
        fontWeight: 'bold',
        color: theme.colors.text,
        textAlign: 'center',
        marginBottom: 8,
    },
    profession: {
        fontSize: 14,
        color: theme.colors.primary,
        textAlign: 'center',
        marginBottom: 16,
    },
    description: {
        fontSize: 14,
        color: theme.colors.text,
        textAlign: 'center',
        marginBottom: 16,
    },
}));
