import React from 'react';
import { View, Text } from 'react-native';

export const Footer = ({ style, children }) => {
    return (
        <View
            style={[{
                minHeight: 48,
                position: 'absolute',
                bottom: 0,
                borderTopColor: 'gray',
                borderTopWidth: 1,
                paddingHorizontal: 10,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
            }, style]}>
            {children}
        </View>
    )
}