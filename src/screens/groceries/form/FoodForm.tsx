import React, {useContext} from "react";
import {StyleSheet, View} from "react-native";
import {Formik} from "formik";
import groceriesFoodItemSchema from "./yup.schema";
import TextField from "../../../components/fields/TextInput";
import Dropdown, {DropdownItemProps} from "../../../components/fields/Dropdown";
import CheckBoxList from "../../../components/fields/CheckBoxList";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {DATA, FoodProps} from "../../../FakeData";
import GlobalDataContext from "../../../context/global/GlobalDataContext";
import { v4 as uuid } from 'uuid'


export interface FoodFormProps  {

}


const FoodForm: React.FC<FoodFormProps> = () =>  {
    const {addFood, getGroceries, toggleGroceriesModal} = useContext(GlobalDataContext)

    const  initialValue = {
        key: '',
        name: '',
        foodGroupKey: '',
        calories: '',
        mealCategoryKeys: null
    }

    const handleSubmit = (values: FoodProps, actions: { resetForm: () => void; }) => {
        addFood({...values, key: uuid()})
        getGroceries()
        actions.resetForm()
        toggleGroceriesModal()
        console.log(values)

    }


    return (
        <Formik
            initialValues={initialValue}
            onSubmit={handleSubmit}
            validationSchema={groceriesFoodItemSchema}
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
                        onChangeText={handleChange('calories')}
                        onBlur={handleBlur('calories')}
                        value={values.calories}
                        errorMessage={errors.calories}
                    />
                    <CheckBoxList
                        label="Which meals can it be used in?"
                        options={DATA.mealCategory}
                        onValueChange={(items: DropdownItemProps) => setFieldValue('mealCategoryKeys', items)}
                        defaultKeys={values.mealCategoryKeys}
                    />
                    <View style={styles.addButtonWrapper}>
                        <PrimaryButton  title="Add" onPress={()=> handleSubmit() }/>
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
