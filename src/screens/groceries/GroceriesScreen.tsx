import React, {useContext, useEffect,} from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FoodGroup from "../../components/FoodGroup";
import ScreenWrapper from "../../components/ScreenWrapper";
import CustomModal from "../../components/CustomModal";
import GlobalDataContext from "../../context/global/GlobalDataContext";
import FoodForm from "./form/FoodForm";

export interface GroceriesFoodItem {
    name: string;
    foodGroup: [{
        key: string;
        label: string;
        value: string;
    }]
    calories: string;
    meal: [{
        key: string;
        label: string;
        value: string;
        checked: boolean
    }]

}
// interface GroceriesScreenProps {
//
// }

const GroceriesScreen: React.FC = () =>  {
    const {getGroceries, groceryList, groceriesModalVisible, toggleGroceriesEditMode, toggleGroceriesModal} = useContext(GlobalDataContext)




    useEffect(()=> {
        getGroceries()

    }, [])

    return (
        <ScreenWrapper>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <View style={styles.headerButtons}>
                        <TouchableOpacity onPress={toggleGroceriesModal}><Text>Add</Text></TouchableOpacity>
                        <TouchableOpacity onPress={toggleGroceriesEditMode}><Text>Edit</Text></TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={groceryList}
                    renderItem={({item}) => <FoodGroup label={item.label} foodList={item.foodList}/>}
                    keyExtractor={item => item.key}
                />
            </View>
            <CustomModal title="Add Food" modalVisible={groceriesModalVisible} setModalVisible={toggleGroceriesModal}>
                <FoodForm/>
            </CustomModal>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
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
