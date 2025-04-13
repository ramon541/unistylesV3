import React, { memo } from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import Button, { ButtonProps } from '../Button';

export interface TextButtonProps extends ButtonProps {
    text: string;
    children?: React.ReactNode;
}

function TextButton({ text, children, ...props }: TextButtonProps) {
    return (
        <Button {...props}>
            <Text style={styles.buttonText}>{text}</Text>
            {children}
        </Button>
    );
}

const styles = StyleSheet.create((theme) => ({
    buttonText: {
        fontSize: 14,
        color: theme.colors.background,
        textAlign: 'center',
    },
}));

export default memo(TextButton);
