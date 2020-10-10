import React, {useContext} from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import GlobalDataContext from "../context/global/GlobalDataContext";
import {COLORS} from "../styles/global";

export interface FoodItemProps {
    foodKey: string;
    name: string;
}

const Food: React.FC<FoodItemProps> = ({foodKey, name}) =>  {
    const {getGroceries, deleteFood, setSelectedFood, toggleGroceriesModal, groceriesEditMode} = useContext(GlobalDataContext)

    const handleDelete = () => {
        deleteFood(foodKey)
        getGroceries()
    }

    const handleEdit = () => {
        setSelectedFood(foodKey)
        toggleGroceriesModal()
    }

    return (
        <View style={styles.food} key={foodKey}>
            <View style={styles.nameWrapper}>
                {groceriesEditMode &&
                    <TouchableOpacity onPress={handleDelete}>
                        <Text style={styles.delete}>delete</Text>
                    </TouchableOpacity>
                }
                <Text style={styles.name}>{name}</Text>
            </View>
            {groceriesEditMode &&
            <TouchableOpacity onPress={handleEdit}>
                <Text style={styles.edit}>edit</Text>
            </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    food: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    nameWrapper: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    delete: {
        color: COLORS.DANGER,
        marginRight: 5
    },
    edit: {
    },
});

export default Food
