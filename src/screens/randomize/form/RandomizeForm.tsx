import React, {useContext} from "react";
import {Keyboard, StyleSheet, View} from "react-native";
import {Formik} from "formik";
import TextField from "../../../components/fields/TextInput";
import Dropdown, {DropdownItemProps} from "../../../components/fields/Dropdown";
import CheckBoxList from "../../../components/fields/CheckBoxList";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import {DATA} from "../../../FakeData";
import 'react-native-get-random-values';
import randomizeValuesSchema from "./yup.schema";
import GlobalDataContext from "../../../context/global/GlobalDataContext";


export interface RandomizeFormProps  {
  children: React.ReactNode;
}

export interface RandomizeFormValuesProps  {
  mealCategoryKey: string;
  foodAmount: number | string;
  foodGroupKeys: string[] | null;
}


const RandomizeForm: React.FC<RandomizeFormProps> = ({children}) =>  {

  const {randomizeMeal} = useContext(GlobalDataContext)

  const  initialValue = {
    mealCategoryKey: '',
    foodAmount: '',
    foodGroupKeys: null,
  }

  const handleSubmit = (values: RandomizeFormValuesProps, actions: { resetForm: () => void }) => {
    console.log(values)
    randomizeMeal(values)
    actions.resetForm()
  }


  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={randomizeValuesSchema}
    >
      {({
        handleBlur,
        handleSubmit, values,
        setFieldValue,
        errors
      }) => (
        <>
          <Dropdown
            label="Select a Meal Category "
            placeHolder="Breakfast"
            options={DATA.mealCategory}
            onValueChange={(itemValue: DropdownItemProps) => setFieldValue('mealCategoryKey', itemValue)}
            defaultValueKey={values.mealCategoryKey}
            errorMessage={errors.mealCategoryKey}
          />
          {        console.log(values)}
          <TextField
            label="How Many Items?"
            placeholder="1 - 10"
            keyboardType="numeric"
            onChangeText={(value) => setFieldValue('foodAmount', parseInt(value))}
            onBlur={handleBlur('foodAmount')}
            value={values.foodAmount.toString()}
            errorMessage={errors.foodAmount}
            returnKeyLabel='Done'
            returnKeyType='done'
            onSubmitEditing={Keyboard.dismiss}
            maxLength={10}
          />
          <CheckBoxList
            label="Which Food Group to Include?"
            options={DATA.foodGroups}
            onValueChange={(items: DropdownItemProps) => setFieldValue('foodGroupKeys', items)}
            defaultKeys={values.foodGroupKeys}
          />
          <View>
            {children}
          </View>

          <View style={styles.addButtonWrapper}>
            <PrimaryButton  title="Randomize" onPress={()=> handleSubmit() }/>
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

export default RandomizeForm
