import React, {useState} from "react";
import {Modal, Text, TouchableHighlight, View, StyleSheet, Button} from "react-native";
import {Formik} from "formik";
import {COLORS} from "../styles/global";
import TextField from "../components/fields/TextInput";
import Dropdown, {DropdownItemProps} from "../components/fields/Dropdown";

const MealPlanScreen: React.FC = () =>  {
    const [modalVisible, setModalVisible] = useState(true);
    return (
        <View>
            <Modal
                animationType="slide"
                transparent
                visible={modalVisible}
            >
                <View style={styles.backDrop}>
                    <View style={styles.modalView}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Header Title</Text>
                            <TouchableHighlight
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.headerText}>X</Text>
                            </TouchableHighlight>
                        </View>
                        <Formik
                            initialValues={{ name: '', fruitGroup: null, calories: ''}}
                            onSubmit={(values, actions) => {
                                actions.resetForm()
                                console.log(values)
                            }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
                                <>
                                    <TextField
                                        label="Name"
                                        placeholder="Apple"
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                    />
                                    <Dropdown
                                        label="Select a Food Group"
                                        placeHolder="Breakfast"
                                        options={[
                                            {key: 1, label: 'Breakfast', value: 'breakfast'},
                                            {key: 2, label: 'Lunch', value: 'lunch'},
                                            {key: 3, label: 'Dinner', value: 'dinner'},
                                            {key: 4, label: 'Snack', value: 'snack'},
                                        ]}
                                        onValueChange={(itemValue: DropdownItemProps) => setFieldValue('fruitGroup', itemValue)}
                                        selectedValue={values.fruitGroup}
                                    />
                                    <TextField
                                        label="How Many Calories?"
                                        placeholder="100"
                                        onChangeText={handleChange('calories')}
                                        onBlur={handleBlur('calories')}
                                        value={values.calories}
                                    />
                                    <Button onPress={()=>handleSubmit()} title="Submit" />
                                </>
                            )}
                        </Formik>

                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    backDrop: {
        flex: 1,
        backgroundColor: 'rgba(45,45,45,0.34)'
    },
    modalView: {
        padding: 15,
        marginTop: 50,
        backgroundColor: COLORS.WHITE
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: COLORS.SECONDARY
    },
    headerText: {
        color: COLORS.WHITE,
    }

});

export default MealPlanScreen
