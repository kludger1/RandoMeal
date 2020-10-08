import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {COLORS} from "../../styles/global";

export interface CheckBoxListProps {
    label: string;
}

const CheckBoxList: React.FC<CheckBoxListProps> = ({label}) =>  (
    <View style={styles.wrapper}>
        <View style={styles.header}>
            <Text style={styles.label}>{label}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    wrapper: {
        width: 375,
        marginBottom: 10
    },
    header: {
        padding: 5,
        backgroundColor: COLORS.SECONDARY,
    },
    label: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.WHITE,
    },
    foodItem: {
        paddingVertical: 5,
    },
    foodItemName: {
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default CheckBoxList
