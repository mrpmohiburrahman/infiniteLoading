import React, { FC, memo } from 'react';
import { View, StyleSheet, Text, TextInput as Input } from 'react-native';
// import { TextInput as Input } from 'react-native-paper';
// import { theme } from '../core/theme';
interface Props {
    placeHolder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean
}

const TextInput :FC<Props> = (props) => {
    return (
        <View>
            <Input 
                style={{backgroundColor: 'white'}}
                placeholder={props.placeHolder}
                onChangeText={props.onChangeText} 
                secureTextEntry={props.secureTextEntry || false}
            />
        </View>
    )
}
export default TextInput;