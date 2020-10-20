import React, {useContext} from "react";
import {StyleSheet, View} from "react-native";
import {Formik} from "formik";
import groceriesFoodSchema from "./yup.schema";
import TextField from "../../../components/fields/TextInput";
import Dropdown, {DropdownItemProps} from "../../../components/fields/Dropdown";
import CheckBoxList from "../../../components/fields/CheckBoxList";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {DATA, FoodProps} from "../../../FakeData";
import GlobalDataContext from "../../../context/global/GlobalDataContext";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid'
import _ from "lodash";


export interface FoodFormProps  {

}


const FoodForm: React.FC<FoodFormProps> = () =>  {
    const {
        addFood,
        editFood,
        getGroceries,
        selectedFood,
        groceriesEditMode,
        toggleGroceriesModal,
        toggleGroceriesEditMode
    } = useContext(GlobalDataContext)


    const editFormMode = !_.isEmpty(selectedFood)  && groceriesEditMode
    const buttonTitle = editFormMode ? 'Save' : 'Add'

    const  initialValue = {
        key: '',
        name: '',
        foodGroupKey: '',
        calories: '',
        mealCategoryKeys: null
    }

    const handleSubmit = (values: FoodProps, actions: { resetForm: () => void; }) => {
        editFormMode ? editFood(values) :  addFood({...values, key: uuid()})
        editFormMode && toggleGroceriesEditMode()
        getGroceries()
        actions.resetForm()
        toggleGroceriesModal()

    }


    return (
        <Formik
            initialValues={editFormMode ? selectedFood : initialValue}
            onSubmit={handleSubmit}
            validationSchema={groceriesFoodSchema}
        >
            {({
                  handleChange,
                  handleBlur,
                  handleSubmit, values,
                  setFieldValue,
                  errors
            }) => (
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
                        options={DATA.foodGroups}
                        onValueChange={(itemValue: DropdownItemProps) => setFieldValue('foodGroupKey', itemValue)}
                        defaultValueKey={values.foodGroupKey}
                        errorMessage={errors.foodGroupKey}
                    />
                    <TextField
                        label="How Many Calories?"
                        placeholder="100"
                        keyboardType="numeric"
                        onChangeText={value => setFieldValue('calories', parseInt(value))}
                        onBlur={handleBlur('calories')}
                        value={values.calories.toString()}
                        errorMessage={errors.calories}
                    />
                    <CheckBoxList
                        label="Which meals can it be used in?"
                        options={DATA.mealCategory}
                        onValueChange={(items: DropdownItemProps) => setFieldValue('mealCategoryKeys', items)}
                        defaultKeys={values.mealCategoryKeys}
                    />
                    <View style={styles.addButtonWrapper}>
                        <PrimaryButton  title={buttonTitle} onPress={()=> handleSubmit() }/>
                    </View>
                </>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    addButtonWrapper: {
        alignSelf: 'center',
        width: 300,
        marginTop: 20,
    }
});

export default FoodForm
