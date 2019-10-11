import React from 'react';
import { TouchableOpacity } from 'react-native';


export const IconButton = ({style,buttonEvent,children}) => {
    return (
        <TouchableOpacity onPress={buttonEvent}
        style={{
            minWidth: 30,
            minHeight: 30,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {children}
        </TouchableOpacity>
    )
}