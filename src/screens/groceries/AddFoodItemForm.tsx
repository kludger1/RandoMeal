import React, {useContext} from "react";
import {StyleSheet, View} from "react-native";
import {Formik} from "formik";
import groceriesFoodItemSchema from "./yup.schema";
import TextField from "../../components/fields/TextInput";
import Dropdown, {DropdownItemProps} from "../../components/fields/Dropdown";
import CheckBoxList from "../../components/fields/CheckBoxList";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import _ from "lodash";
import {DATA} from "../../FakeData";
import GlobalDataContext from "../../context/global/GlobalDataContext";



export interface AddFoodItemProps  {
    onSubmit: any
}

// {key: 1, name: 'Yogurt', foodGroupKey: 5, calories: 100, mealCategory: [1,2,4]},
const AddFoodItemForm: React.FC<AddFoodItemProps> = ({onSubmit}) =>  {
    const {addFood} = useContext(GlobalDataContext)
    return (
        <Formik
            initialValues={{ name: '', foodGroupKey: null, calories: '', mealCategoryKeys: null}}
            onSubmit={(values, actions) => {
                actions.resetForm()
                console.log(values)
                addFood(values)
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

export default AddFoodItemForm
