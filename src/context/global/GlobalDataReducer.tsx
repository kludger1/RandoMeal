import { Types } from '../types'
import {FoodGroupProps, FoodProps, GlobalDataProps} from "../../FakeData";

const formatGroceryList = (state: GlobalDataProps) => (
    state.foodGroups.map((foodGroup: FoodGroupProps) => {
        const foodList = state.foods.filter((food: FoodProps) => food.foodGroupKey === foodGroup.key)
        return {
            key: foodGroup.key,
            label: foodGroup.label,
            foodList: foodList
        }
    })
)

export default (state: any, action: any) => {
    console.log('STATE', state)
    console.log('ACTION', action)
    switch (action.type) {
        case Types.TOGGLE_GROCERIES_MODAL:
            return {
                ...state,
                groceriesModalVisible: !state.groceriesModalVisible
            }
        case Types.TOGGLE_GROCERIES_EDIT_MODE:
            return {
                ...state,
                groceriesEditMode: !state.groceriesEditMode
            }
        case Types.GET_GROCERIES:
            return {
                ...state,
                groceryList: formatGroceryList(state)
            }
        case Types.ADD_FOOD:
            return {
                ...state,
                foods: [...state.foods, action.payload]
            }
        case Types.EDIT_FOOD:
            return {
                ...state,
                foods: state.foods.map((food: FoodProps) =>  {
                    food.key === action.payload.key ? action.payload : food
                })
            }
        case Types.DELETE_FOOD:
            return {
                ...state,
                foods: state.foods.filter((food: FoodProps) => food.key !== action.payload)
            }
        default:
            return state;
    }
}
