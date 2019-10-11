import React from 'react';
import { View,SafeAreaView } from 'react-native';
import {GlobalStyle} from '../theme/global';


export const Container = ({style,children}) => {
    return (
        <SafeAreaView style={{flex: 1}}>

        <View style={[style,GlobalStyle.mainContainer]}>
            {children}
        </View>
</SafeAreaView>
    )
}