import React from "react";
import {Text, View, StyleSheet} from "react-native";

export interface FoodItemProps {
    key: number;
    name: string;
}

const FoodItem: React.FC<FoodItemProps> = ({key, name}) =>  (
    <View style={styles.foodItem} key={key}>
        <Text style={styles.foodItemName}>{name}</Text>
    </View>
)

const styles = StyleSheet.create({
    foodItem: {
        paddingVertical: 5,
    },
    foodItemName: {
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default FoodItem
