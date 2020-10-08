import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import {COLORS} from "../../styles/global";

export interface PrimaryButtonProps extends TouchableOpacityProps {
    title: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({title, ...props}) =>  (
    <TouchableOpacity {...props}>
        <View style={styles.wrapper}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: COLORS.PRIMARY,
        padding: 5
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.WHITE,
        textAlign: 'center',
    },
});

export default PrimaryButton
