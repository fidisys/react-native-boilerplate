import React from 'react';
import { View, } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export const Content = ({style,children}) => {
    return (
        <KeyboardAwareScrollView 
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator
        contentContainerStyle={[{
            padding: 15,
            height:'100%',
            flexDirection: 'column'
        },style]}>
            {children}
        </KeyboardAwareScrollView>

    )
}