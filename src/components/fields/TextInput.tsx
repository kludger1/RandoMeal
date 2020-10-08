import React from "react";
import {View, StyleSheet, TextInput, Text, TextInputProps} from "react-native";
import {COLORS} from "../../styles/global";



export interface TextFieldProps extends TextInputProps {
    label: string;
}

const TextField: React.FC<TextFieldProps> = ({label, ...props}) =>  (
    <View style={styles.wrapper}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.textInput} {...props}/>
    </View>
)

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.SECONDARY,
        marginBottom: 5
    },
    textInput: {
        padding: 10,
        paddingHorizontal: 15,
        fontSize: 18,
        borderColor: COLORS.SECONDARY,
        borderWidth: 3,
        borderStyle: 'solid'
    }
});

export default TextField
