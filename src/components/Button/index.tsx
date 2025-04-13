import React, { memo, PropsWithChildren } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export interface ButtonProps extends TouchableOpacityProps, PropsWithChildren {}

function Button({ children, ...props }: ButtonProps) {
    return (
        <TouchableOpacity {...props} style={styles.buttonContainer}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create((theme) => ({
    buttonContainer: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 12,
        borderRadius: 4,
        width: '70%',
    },
}));

export default memo(Button);
