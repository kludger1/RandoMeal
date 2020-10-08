import React from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FoodGroup from "../components/FoodGroup";
import ScreenWrapper from "../components/ScreenWrapper";
import {FakeData} from "../FakeData";



const GroceriesScreen: React.FC = () =>  {
    return (
        <ScreenWrapper>
            <View>
                <View style={styles.header}>
                    <View style={styles.headerButtons}>
                        <TouchableOpacity><Text>Add</Text></TouchableOpacity>
                        <TouchableOpacity><Text>Edit</Text></TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={FakeData.foodGroups}
                    renderItem={({item}) => <FoodGroup label={item.label} foodList={item.foodList}/>}
                    keyExtractor={item => item.key.toString()}
                />
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: "flex-end",
        marginVertical: 20
    },
    headerButtons: {
        width: 100,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
});

export default GroceriesScreen
