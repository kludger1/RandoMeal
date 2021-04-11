import * as Yup from 'yup'
import {RandomizeFormValuesProps} from "./RandomizeForm";

const randomizeValuesSchema = Yup.object<RandomizeFormValuesProps>().shape({
  mealCategoryKey: Yup.string().required(),
  foodAmount: Yup.number().required().max(10),
  foodGroupKeys: Yup.array().of(Yup.string()).required(),
});

export default randomizeValuesSchema
