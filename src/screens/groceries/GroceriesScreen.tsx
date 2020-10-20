import React, {useContext, useEffect,} from "react";
import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FoodGroup from "../../components/FoodGroup";
import ScreenWrapper from "../../components/ScreenWrapper";
import CustomModal from "../../components/CustomModal";
import GlobalDataContext from "../../context/global/GlobalDataContext";
import FoodForm from "./form/FoodForm";
import _ from "lodash";

// interface GroceriesScreenProps {
//
// }

const GroceriesScreen: React.FC = () =>  {
    const {
        selectedFood,
        getGroceries,
        groceryList,
        groceriesEditMode,
        groceriesModalVisible,
        toggleGroceriesEditMode,
        toggleGroceriesModal
    } = useContext(GlobalDataContext)

    const editFormMode = !_.isEmpty(selectedFood)  && groceriesEditMode
    const headerTitle = editFormMode ? 'Edit Food' : 'Add Food'

    const handleCloseModal = () => {
        toggleGroceriesEditMode()
        toggleGroceriesModal()
        getGroceries()
    }


    useEffect(()=> {
        getGroceries()
    }, [])

    return (
        <ScreenWrapper>
                <ScrollView style={styles.wrapper}>
                    <View style={styles.header}>
                        <View style={styles.headerButtons}>
                            <TouchableOpacity style={styles.tempBg} onPress={toggleGroceriesModal}>
                                <Text>Add</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tempBg} onPress={toggleGroceriesEditMode}>
                                <Text>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                        data={groceryList}
                        renderItem={({item}) => <FoodGroup label={item.label} foodList={item.foodList}/>}
                        keyExtractor={item => item.key}
                    />
                </ScrollView>
            <CustomModal title={headerTitle} modalVisible={groceriesModalVisible} closeModal={handleCloseModal}>
                <FoodForm/>
            </CustomModal>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    tempBg: {
      backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10
    },
    wrapper: {
        paddingHorizontal: 20
    },
    header: {
        // alignItems: "flex-end",
        marginVertical: 20
    },
    headerButtons: {
        width: 100,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
});

export default GroceriesScreen
