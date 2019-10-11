import React from 'react';
import { View,StatusBar } from 'react-native';
import { BarStyle } from '../theme/global';

export const Header = ({style,statusbarColor,barStyle = BarStyle ,children}) => {
    return (
        <View style={[{
            height: 48,
            paddingHorizontal: 10,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            
            backgroundColor: '#5297ff'
        },style]}>
            <StatusBar backgroundColor={statusbarColor} barStyle={barStyle}/>
            {children}
        </View>

    )
}

export const HeaderLeft = ({style,children}) => {
    return (
        <View style={[{
            flexDirection: 'row',
            minWidth: '15%',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },style]}>
            {children}
        </View>
    )
}
export const HeaderBody = ({style,children}) => {
    return (
        <View style={[{
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center'
        },style]}>
            {children}
        </View>
    )
}
export const HeaderRight = ({style,children}) => {
    return (
        <View style={[{
            flexDirection: 'row',
            minWidth: '15%',
            justifyContent: 'flex-end',
            alignItems: 'center'
        },style]}>
            {children}
        </View>
    )
}