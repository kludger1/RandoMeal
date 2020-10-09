import React, {useReducer} from "react";
import GlobalDataContext from './GlobalDataContext'
import GlobalDataReducer from './GlobalDataReducer'
import {
    GET_GROCERIES,
    GET_ALL_FOODS,
    GET_FOOD,
    ADD_FOOD,
    UPDATE_FOOD,
    REMOVE_FOOD,
    GET_ALL_MEALS,
    GET_MEAL,
    ADD_MEAL,
    UPDATE_MEAL,
    REMOVE_MEAL,
} from '../types'
import {DATA} from "../../FakeData";


const GlobalDataState = (props: any) => {
    const [state, dispatch] = useReducer(GlobalDataReducer, DATA)

    const removeFood = (key: number) => {
        dispatch({
            type: REMOVE_FOOD,
            payload: key
        })
    }
    const addFood = (food: any) => {
        dispatch({
            type: ADD_FOOD,
            payload: food
        })
    }

    const getGroceries = () => {
        dispatch({
            type: GET_GROCERIES,
            payload: {}
        })
    }

    return (
        <GlobalDataContext.Provider value={{
            mealCategory: state.mealCategory,
            foods: state.foods,
            foodGroups: state.foodGroups,
            meals: state.meals,
            favoriteMeals: state.favoriteMeals,
            groceries: state.groceries,
            getGroceries,
            addFood,
        }}
        >
            {props.children}
        </GlobalDataContext.Provider>
    )
}

export default GlobalDataState
