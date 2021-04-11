import * as Yup from 'yup'
import {FoodProps} from "../../../FakeData";

const groceriesFoodSchema = Yup.object<FoodProps>().shape({
  key: Yup.string().required(),
  name: Yup.string().required(),
  foodGroupKey: Yup.string().required(),
  calories: Yup.number().required(),
  mealCategoryKeys: Yup.array().of(Yup.string()).required(),
});

export default groceriesFoodSchema
