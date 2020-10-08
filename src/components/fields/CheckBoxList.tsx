import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import CheckBox, {CheckBoxItemProps} from "./CheckBox";
import FieldLabel from "./FieldLabel";

export interface CheckBoxListProps {
    label: string;
    defaultValues: CheckBoxItemProps[]
    onValueChange: any;
}

const CheckBoxList: React.FC<CheckBoxListProps> = ({label, defaultValues, onValueChange}) =>  {
    const [currentList, setCurrentList] = useState<CheckBoxItemProps[]>(defaultValues)

    const updateList = (checkboxItem: CheckBoxItemProps) => {
        const updatedList = currentList.map(currentListItem => {
            if(currentListItem.key === checkboxItem.key) {
                return {...currentListItem, checked: !currentListItem.checked}
            }
            return currentListItem
        })
        setCurrentList(updatedList);
        onValueChange(updatedList)
    }

    return (
        <View style={styles.wrapper}>
            <FieldLabel label={label}/>
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
});

export default CheckBoxList
