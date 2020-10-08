import React from "react";
import {StyleSheet, View} from "react-native";
import {Formik} from "formik";
import groceriesFoodItemSchema from "./yup.schema";
import TextField from "../../components/fields/TextInput";
import Dropdown, {DropdownItemProps} from "../../components/fields/Dropdown";
import CheckBoxList from "../../components/fields/CheckBoxList";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import _ from "lodash";



export interface AddFoodItemProps  {
    onSubmit: any
}

const AddFoodItemForm: React.FC<AddFoodItemProps> = ({onSubmit}) =>  (
    <Formik
        initialValues={{ name: '', foodGroup: null, calories: '', meal: [
                {key: 1, label: 'Breakfast', value: 'breakfast', checked: true},
                {key: 2, label: 'Lunch', value: 'lunch', checked: false},
                {key: 3, label: 'Dinner', value: 'dinner', checked: true},
                {key: 4, label: 'Snack', value: 'snack', checked: false},
            ]}}
        onSubmit={(values, actions) => {
            actions.resetForm()
            console.log(values)
            onSubmit()
        }}
        validationSchema={groceriesFoodItemSchema}
    >
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors }) => (
            <>
                <TextField
                    label="Name"
                    placeholder="Apple"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    errorMessage={errors.name}
                />
                <Dropdown
                    label="Select a Food Group"
                    placeHolder="Fruits"
                    options={[
                        {key: 1, label: 'Vegetables', value: 'vegetables'},
                        {key: 2, label: 'Fruits', value: 'fruits'},
                        {key: 3, label: 'Grains', value: 'grains'},
                        {key: 4, label: 'Protein', value: 'protein'},
                        {key: 4, label: 'Dairy', value: 'dairy'},
                        {key: 4, label: 'Other', value: 'other'},
                    ]}
                    onValueChange={(itemValue: DropdownItemProps) => setFieldValue('foodGroup', itemValue)}
                    selectedValue={values.foodGroup}
                    errorMessage={errors.foodGroup}
                />
                <TextField
                    label="How Many Calories?"
                    placeholder="100"
                    keyboardType="numeric"
                    onChangeText={handleChange('calories')}
                    onBlur={handleBlur('calories')}
                    value={values.calories}
                    errorMessage={errors.calories}
                />
                <CheckBoxList
                    label="Which meals can it be used in?"
                    onValueChange={(items: DropdownItemProps) => setFieldValue('meal', items)}
                    defaultValues={values.meal}
                />
                <View style={styles.addButtonWrapper}>
                    <PrimaryButton disabled={!_.isEmpty(errors)} title="Add" onPress={()=> handleSubmit() }/>
                </View>
            </>
        )}
    </Formik>
)

const styles = StyleSheet.create({
    addButtonWrapper: {
        alignSelf: 'center',
        width: 300,
        marginTop: 20,
    }
});

export default AddFoodItemForm
