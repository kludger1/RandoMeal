import * as Yup from 'yup'
import {GroceriesFoodItem} from "./GroceriesScreen";

const groceriesFoodItemSchema = Yup.object<GroceriesFoodItem>().shape({
    name: Yup.string().required(),
    foodGroupKey: Yup.number().required(),
    calories: Yup.number().required(),
    mealCategoryKeys: Yup.array().of(Yup.number()).required(),
});

export default groceriesFoodItemSchema
