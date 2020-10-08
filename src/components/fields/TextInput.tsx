import React from "react";
import {View, StyleSheet, TextInput, TextInputProps} from "react-native";
import {COLORS} from "../../styles/global";
import FieldLabel from "./FieldLabel";
import FieldErrorMessage from "./FieldErrorMessage";



export interface TextFieldProps extends TextInputProps {
    label: string;
    errorMessage?: string;
}

const TextField: React.FC<TextFieldProps> = ({label, errorMessage , ...props}) =>  (
    <View style={styles.wrapper}>
        <FieldLabel label={label}/>
        <TextInput style={styles.textInput} {...props}/>
        <FieldErrorMessage message={errorMessage}/>
    </View>
)

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10
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
