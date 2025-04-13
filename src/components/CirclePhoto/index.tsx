import React, { memo } from 'react';
import { Image, ImageProps, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export interface CirclePhotoProps extends ImageProps {}

function CirclePhoto({ ...props }: CirclePhotoProps) {
    return (
        <View style={styles.bgPhoto}>
            <View style={styles.circlePhoto}>
                <Image {...props} style={styles.photo} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create((theme) => ({
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
}));

export default memo(CirclePhoto);
