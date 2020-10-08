import * as Yup from 'yup'
import {GroceriesFoodItem} from "./GroceriesScreen";

const groceriesFoodItemSchema = Yup.object<GroceriesFoodItem>().shape({
    name: Yup.string().required(),
    foodGroup: Yup.object().shape(({
        key: Yup.number(),
        label: Yup.string(),
        value: Yup.string(),
    })).typeError('please choose a food group'),
    calories: Yup.number().required(),
    meal: Yup.array().of(Yup.object().shape(({
        key: Yup.number(),
        label: Yup.string(),
        value: Yup.string(),
        checked: Yup.boolean(),
    }))).required(),
});

export default groceriesFoodItemSchema
