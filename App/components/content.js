import React from 'react';
import { View,ScrollView } from 'react-native';


export const Content = ({style,children}) => {
    return (
        <ScrollView 
        showsVerticalScrollIndicator
        contentContainerStyle={[{
            padding: 10
        },style]}>
            {children}
        </ScrollView>

    )
}