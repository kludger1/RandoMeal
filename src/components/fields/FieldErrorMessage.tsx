import React from "react";
import { StyleSheet, Text } from "react-native";
import {COLORS} from "../../styles/global";



export interface FieldErrorMessageProps  {
    message?: string;
}

const FieldErrorMessage: React.FC<FieldErrorMessageProps> = ({message=''}) =>  (
    <Text style={styles.errorMessage}>{message}</Text>
)

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 14,
        color: COLORS.DANGER,
        marginBottom: 5
    }
});

export default FieldErrorMessage
