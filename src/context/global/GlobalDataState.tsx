import React, {useReducer} from "react";
import GlobalDataContext from './GlobalDataContext'
import GlobalDataReducer from './GlobalDataReducer'
import { Types } from '../types'
import {DATA, FoodProps} from "../../FakeData";


const GlobalDataState = (props: any) => {
    const [state, dispatch] = useReducer(GlobalDataReducer, DATA)


    const toggleGroceriesModal = () => {
        dispatch({
            type: Types.TOGGLE_GROCERIES_MODAL,
            payload: {}
        })
    }

    const toggleGroceriesEditMode = () => {
        dispatch({
            type: Types.TOGGLE_GROCERIES_EDIT_MODE,
            payload: {}
        })
    }

    const getGroceries = () => {
        dispatch({
            type: Types.GET_GROCERIES,
            payload: {}
        })
    }

    const addFood = (food: FoodProps) => {
        dispatch({
            type: Types.ADD_FOOD,
            payload: food
        })
    }

    const editFood = (food: FoodProps) => {
        dispatch({
            type: Types.EDIT_FOOD,
            payload: food
        })
    }

    const deleteFood = (key: string) => {
        dispatch({
            type: Types.DELETE_FOOD,
            payload: key
        })
    }


    return (
        <GlobalDataContext.Provider value={{
            foods: state.foods,
            foodGroups: state.foodGroups,
            groceryList: state.groceryList,
            groceriesEditMode: state.groceriesEditMode,
            groceriesModalVisible: state.groceriesModalVisible,
            toggleGroceriesEditMode,
            toggleGroceriesModal,
            getGroceries,
            addFood,
            editFood,
            deleteFood,

            meals: state.meals,
            mealCategories: state.mealCategories,
            favoriteMeals: state.favoriteMeals,
        }}
        >
            {props.children}
        </GlobalDataContext.Provider>
    )
}

export default GlobalDataState
