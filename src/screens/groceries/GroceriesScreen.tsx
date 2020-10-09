import React, {useContext, useEffect, useState} from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FoodGroup from "../../components/FoodGroup";
import ScreenWrapper from "../../components/ScreenWrapper";
import {FakeData} from "../../FakeData";
import CustomModal from "../../components/CustomModal";
import GlobalDataContext from "../../context/global/GlobalDataContext";

export interface GroceriesFoodItem {
    name: string;
    foodGroup: [{
        key: number;
        label: string;
        value: string;
    }]
    calories: string;
    meal: [{
        key: number;
        label: string;
        value: string;
        checked: boolean
    }]

}

const GroceriesScreen: React.FC = () =>  {
    const {getGroceries, groceries} = useContext(GlobalDataContext)
    const [currentGroceries, setCurrentGroceries] = useState()
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(()=> {
        getGroceries()
    }, [])
    return (
        <ScreenWrapper>
            <View>
                <View style={styles.header}>
                    <View style={styles.headerButtons}>
                        <TouchableOpacity onPress={()=> setModalVisible(true)}><Text>Add</Text></TouchableOpacity>
                        <TouchableOpacity onPress={getGroceries}><Text>Edit</Text></TouchableOpacity>
                    </View>
                </View>
                {groceries &&
                <FlatList
                    data={groceries}
                    renderItem={({item}) => <FoodGroup label={item.label} foodList={item.foodList}/>}
                    keyExtractor={item => item.key.toString()}
                />}
            </View>
            <CustomModal title="Add Food" modalVisible={modalVisible} setModalVisible={setModalVisible}/>
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
