import React from "react";
import { StyleSheet, Text } from "react-native";
import {COLORS} from "../../styles/global";



export interface FieldLabelProps  {
    label: string;
}

const FieldLabel: React.FC<FieldLabelProps> = ({label}) =>  (
    <Text style={styles.label}>{label}</Text>
)

const styles = StyleSheet.create({
    label: {
        fontSize: 17,
        fontWeight: 'bold',
        color: COLORS.SECONDARY,
        marginBottom: 5
    }
});

export default FieldLabel
