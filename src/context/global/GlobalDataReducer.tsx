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

export default (state: any, action: any) => {
    console.log('state', state)
    console.log('action', action)
    switch (action.type) {
        case REMOVE_FOOD:
            return {
                ...state,
                foods: state.foods.filter((food: any) => food.key !== action.payload)
            }
        case ADD_FOOD:
            return {
                ...state,
                foods: [...state.foods, action.payload]
            }
        case GET_GROCERIES:
            return {
                ...state,
                groceries: state.foodGroups.map((foodGroup: any) => {
                    const foodList = state.foods.filter((food: any) => food.foodGroupKey === foodGroup.key)
                    return {
                        key: foodGroup.key,
                        label: foodGroup.label,
                        foodList: foodList
                    }
                })
            }
        default:
            return state;
    }
}
