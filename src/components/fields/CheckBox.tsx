import React, {useState} from "react";
import {Text, View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import {COLORS} from "../../styles/global";

export interface CheckBoxItemProps {
    key: number;
    label: string;
    value: string | number;
    checked: boolean
}

export interface CheckBoxProps {
    onPress: (key: number) => void
    item: CheckBoxItemProps
}

const CheckBox: React.FC<CheckBoxProps> = ({ item, onPress}) =>  {
    const [checked, setChecked] = useState(item.checked)

    const handleChecked = () => {
        setChecked(!checked)
        onPress(item.key)
    }
    return (
        <TouchableWithoutFeedback key={item.key} onPress={handleChecked}>
            <View style={styles.wrapper}>
                <View style={styles.box}>
                    {checked && <View style={styles.fill}/>}
                </View>
                <Text style={styles.label}>{item.label}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    box: {
        width: 30,
        height: 30,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: COLORS.SECONDARY
    },
    fill: {
        width: 22,
        height: 22,
        backgroundColor: COLORS.SECONDARY,
    },
    label: {
        fontSize: 17,
        fontWeight: 'bold',
        color: COLORS.SECONDARY
    },

});

export default CheckBox
