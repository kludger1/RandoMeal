import { Types } from '../types'
import {FoodGroupProps, FoodProps, GlobalDataProps} from "../../FakeData";
import {RandomizeFormValuesProps} from "../../screens/randomize/form/RandomizeForm";

import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid'

const formatGroceryList = (state: GlobalDataProps) => (
  state.foodGroups.map((foodGroup: FoodGroupProps) => {
    const foodList = state.foods.filter((food: FoodProps) => food.foodGroupKey === foodGroup.key)
    return {
      key: foodGroup.key,
      label: foodGroup.label,
      foodList
    }
  })
)

const chooseRandomMeals = (state: GlobalDataProps, values: RandomizeFormValuesProps) => {
  const chosenFoods: FoodProps[] = []
  const passedFilter = state.foods.filter((food: FoodProps) => (
        food.mealCategoryKeys?.includes(values.mealCategoryKey) && values.foodGroupKeys?.includes(food.foodGroupKey)
  ))

  for(let i = 0; i < values.foodAmount; i++) {
    const randomIndex = Math.floor(Math.random() * passedFilter.length)
    chosenFoods.push(passedFilter[randomIndex])
    passedFilter.splice(randomIndex, 1);
  }

  return [
    ...state.randomMealChoices,
    {
      key: uuid(),
      week: null,
      day: null,
      mealCategory: values.mealCategoryKey,
      foodList: chosenFoods,
      favorite: false
    }
  ]
}

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
    case Types.SET_SELECTED_FOOD:
      const firstResult = 0
      return {
        ...state,
        selectedFood: state.foods.filter((food: FoodProps) => food.key === action.payload)[firstResult]
      }
    case Types.GET_GROCERIES:
      return {
        ...state,
        groceryList: formatGroceryList(state),
        selectedFood: {}
      }
    case Types.ADD_FOOD:
      return {
        ...state,
        foods: [...state.foods, action.payload]
      }
    case Types.EDIT_FOOD:
      const updatedFood = action.payload
      const updatedFoods = state.foods.map((food: FoodProps) => {
        if(food.key === updatedFood.key){
          return updatedFood
        }
        return food
      })
      return {
        ...state,
        foods: updatedFoods
      }
    case Types.DELETE_FOOD:
      return {
        ...state,
        foods: state.foods.filter((food: FoodProps) => food.key !== action.payload)
      }

    case Types.RANDOMIZE_MEALS:
      return {
        ...state,
        randomMealChoices: chooseRandomMeals(state, action.payload)
      }

    case Types.ADD_FAVORITE_MEAL:
      return {
        ...state,
        favoriteMeals:  [...state.favoriteMeals, action.payload]
      }
    case Types.REMOVE_FAVORITE_MEAL:
      return {
        ...state,
        randomMealChoices: chooseRandomMeals(state, action.payload)
      }
    default:
      return state;
  }
}
