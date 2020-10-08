import React, {useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import {COLORS} from "../../styles/global";
import CheckBox, {CheckBoxItemProps} from "./CheckBox";

export interface CheckBoxListProps {
    label: string;
    defaultValues: CheckBoxItemProps[]
    onValueChange: any;
}

const CheckBoxList: React.FC<CheckBoxListProps> = ({label, defaultValues, onValueChange}) =>  {
    const [currentList, setCurrentList] = useState<CheckBoxItemProps[]>(defaultValues)

    // const removeElement = (key: number) => {
    //     checkedList[key]
    // }

    const updateList = (key: number) => {
        console.log(key);
        const updatedList = currentList.map(item => item.key === key ? {...item, checked: !item.checked} : item)
        setCurrentList(updatedList);
        onValueChange(updatedList)
    }
    console.log(currentList)
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{label}</Text>
            {currentList.map(item => (
                <CheckBox key={item.key} item={item} onPress={updateList}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10
    },
    label: {
        fontSize: 17,
        fontWeight: 'bold',
        color: COLORS.SECONDARY,
        marginBottom: 5
    },
});

export default CheckBoxList
