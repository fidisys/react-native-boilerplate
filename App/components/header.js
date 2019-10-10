import React from 'react';
import { View,StatusBar } from 'react-native';


export const Header = ({style,statusbarColor,barStyle,children}) => {
    console.log(children)
    return (
        <View style={[{
            height: 55,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            
            backgroundColor: 'red'
        },style]}>
            <StatusBar backgroundColor={statusbarColor} barStyle={barStyle}/>
            {children}
        </View>

    )
}