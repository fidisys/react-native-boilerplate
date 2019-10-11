import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export const Button = ({ onClick, style, children }) => {
    return (
        <TouchableOpacity
            onPress={onClick}
            activeOpacity={0.7}
            style={[{
                padding: 6,
                minHeight: 20,
                borderRadius: 3,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: 'rgba(0,0,0, .4)', // IOS
                shadowOffset: { height: 3, width: 2 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 1, //IOS
                backgroundColor: '#fff',
                elevation: 3, // Android
            }, style]}>
            {children}
        </TouchableOpacity>
    )
}