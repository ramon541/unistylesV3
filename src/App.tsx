import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { light } from './libs/unistyles/theme';
import { AppThemes } from './libs/unistyles';
import { TextButton } from './components';

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
                <View style={styles.bgPhoto}>
                    <View style={styles.circlePhoto}>
                        <Image
                            source={require('../assets/profile.jpg')}
                            style={styles.photo}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </View>
            <View style={styles.containerDescription}>
                <Text style={styles.header}>Ramon Dias</Text>
                <Text style={styles.profession}>Mobile Developer</Text>
                <Text style={styles.description}>
                    Hardworking and reliable UI/UXdesigner focused on going
                    above and beyond to support teams and serve customers.
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
    bgPhoto: {
        backgroundColor: theme.colors.background,
        height: 157,
        width: 157,
        borderRadius: 157 / 2,
        borderWidth: 2,
        borderColor: theme.colors.primary,

        justifyContent: 'center',
        alignItems: 'center',

        elevation: 5,

        position: 'absolute',
        bottom: -157 / 2,
        left: '50%',
        transform: [{ translateX: -157 / 2 }],
    },
    photo: {
        width: 145,
        height: 145,
    },
    circlePhoto: {
        width: 145,
        height: 145,
        borderRadius: '100%',
        overflow: 'hidden',
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
