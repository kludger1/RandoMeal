import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {View, StyleSheet, Text, TouchableWithoutFeedback} from "react-native";
import {COLORS} from "../../styles/global";
import FieldLabel from "./FieldLabel";
import FieldErrorMessage from "./FieldErrorMessage";

export interface DropdownProps  {
    label: string;
    defaultValueKey: string;
    options: DropdownItemProps[];
    onValueChange: any;
    placeHolder?: string;
    errorMessage?: string;

}
export interface DropdownItemProps  {
    key: string;
    label: string;
    value: string | number;
}

export interface DropdownButtonProps  {
    setToggleList: Dispatch<SetStateAction<boolean>>;
    toggleList: boolean;
    selected: DropdownItemProps | null;
    placeHolder?: string;
}

export interface DropdownListProps  {
    toggleList: boolean;
    options: DropdownItemProps[];
    onSelect: (item: DropdownItemProps) => void;
}

const DropdownButton: React.FC<DropdownButtonProps>= ({setToggleList, toggleList, selected, placeHolder}) => {
    const currentText =  selected ?
        <Text style={styles.dropdownItemLabel}>{selected.label}</Text> :
        <Text style={styles.placeHolder}>{placeHolder}</Text>

    const currentIcon = toggleList ? 'up' : 'down';
    return  (
        <TouchableWithoutFeedback onPress={()=> setToggleList(!toggleList)} >
            <View style={styles.dropdown} >
                {currentText}
                <Text>{currentIcon}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const DropdownList: React.FC<DropdownListProps>= ({toggleList, options, onSelect}) => {
    if (!toggleList) return <></>
    return (
        <>
            {toggleList &&
            options.map(option =>
                <TouchableWithoutFeedback key={option.key} onPress={() => onSelect(option)}>
                    <View style={styles.dropdownItem}>
                        <Text style={styles.dropdownItemLabel}>{option.label}</Text>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </>
    )
}


const Dropdown: React.FC<DropdownProps> =
    ({
         label,
         defaultValueKey,
         options,
         onValueChange,
         placeHolder= '',
         errorMessage
     }) =>  {

        const [toggleList, setToggleList] = useState(false)
        const [selected, setSelected]  = useState<DropdownItemProps | null>(null)

        const handleSelect = (item: DropdownItemProps) => {
            setSelected(item)
            setToggleList(false)
            onValueChange(item.key)
        }

        const fetchItem = (key: string) => {
            return options.find(item => item.key === key);
        }

        useEffect(()=> {
            if(defaultValueKey){
                setSelected(fetchItem(defaultValueKey) || null)
            }
        },[])

        return (
            <View style={styles.wrapper}>
                <FieldLabel label={label}/>
                <DropdownButton
                    setToggleList={setToggleList}
                    toggleList={toggleList}
                    selected={selected}
                    placeHolder={placeHolder}
                />
                <DropdownList
                    toggleList={toggleList}
                    options={options}
                    onSelect={handleSelect}
                />
                <FieldErrorMessage message={errorMessage}/>
            </View>
        )
    }


const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10
    },
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 15,
        borderColor: COLORS.SECONDARY,
        borderWidth: 3,
        borderStyle: 'solid'
    },
    placeHolder:{
        // TODO: CHANGE TO CORRECT COLOR
        color: COLORS.LIGHT_GREY,
        fontSize: 18,
    },
    dropdownItem:{
        padding: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderColor: COLORS.SECONDARY,
        borderStyle: 'solid',
    },
    dropdownItemLabel:{
        fontSize: 18,
        color: COLORS.SECONDARY,

    }
});

export default Dropdown
