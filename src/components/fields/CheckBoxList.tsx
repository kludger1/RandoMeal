import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import CheckBox, {CheckBoxItemProps} from "./CheckBox";
import FieldLabel from "./FieldLabel";

export interface CheckBoxListProps {
    label: string;
    options: CheckBoxItemProps[];
    defaultKeys: string[] | null;
    onValueChange: any;
}

const CheckBoxList: React.FC<CheckBoxListProps> = ({label, options, defaultKeys, onValueChange}) =>  {
    const formatDefaultOptions = (keys: string[]) => {
        return options.map((item, index) => {
            return item.key === keys[index] ? {...item, checked: true} : {...item, checked: false}
        })
    }

    const defaultOptions = defaultKeys && formatDefaultOptions(defaultKeys)

    const [currentList, setCurrentList] = useState<CheckBoxItemProps[]>(defaultOptions || options)

    const updateList = (checkboxItem: CheckBoxItemProps) => {
        const checkedKeys: string[] = []

        const updatedList = currentList.map(currentListItem => {
            if(currentListItem.key === checkboxItem.key) {
                return {...currentListItem, checked: !currentListItem.checked}
            }
            return currentListItem
        })

        updatedList.map(currentListItem => currentListItem.checked && checkedKeys.push(currentListItem.key))
        setCurrentList(updatedList);
        onValueChange(checkedKeys)
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
