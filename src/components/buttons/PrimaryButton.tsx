import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";

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
    },
    title: {
    },
});

export default PrimaryButton
