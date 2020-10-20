import {RandomizeFormValuesProps} from "./screens/randomize/form/RandomizeForm";

export const DATA = {
    mealCategory: [
        {key: '1', label: 'Breakfast', value: 'breakfast'},
        {key: '2', label: 'Lunch', value: 'lunch'},
        {key: '3', label: 'Dinner', value: 'dinner'},
        {key: '4', label: 'Snack', value: 'snack'},
    ],
    foods: [
        {key: '1', name: 'Yogurt', foodGroupKey: '5', calories: 100, mealCategoryKeys: ['1','2','4']},
        {key: '2', name: 'Cheese', foodGroupKey: '5', calories: 209, mealCategoryKeys: ['1','2','3']},
        {key: '3', name: 'Milk', foodGroupKey: '5', calories: 100, mealCategoryKeys: ['1','2','4']},
        {key: '4', name: 'Salmon', foodGroupKey: '4', calories: 200, mealCategoryKeys: ['1','2','3']},
        {key: '5', name: 'Shrimp', foodGroupKey: '4', calories: 250, mealCategoryKeys: ['1','2','3','4']},
        {key: '6', name: 'Eggs', foodGroupKey: '4', calories: 50, mealCategoryKeys: ['1','2','4']},
        {key: '7', name: 'Whole Grain Bread', foodGroupKey: '3', calories: 100, mealCategoryKeys: ['1','2','3']},
        {key: '8', name: 'Whole Grains Pasta', foodGroupKey: '3', calories: 120, mealCategoryKeys: ['1','2','3']},
        {key: '9', name: 'Whole Grain Rice', foodGroupKey: '3', calories: 110, mealCategoryKeys: ['1','2','3']},
        {key: '10', name: 'Broccoli', foodGroupKey: '1', calories: 50, mealCategoryKeys: ['1','2','3']},
        {key: '11', name: 'Kale', foodGroupKey: '1', calories: 50, mealCategoryKeys: ['1','2','3']},
        {key: '12', name: 'Spinach', foodGroupKey: '1', calories: 50, mealCategoryKeys: ['1','2','3']},
    ],
    foodGroups: [
        {key: '1', label: 'Vegetables', value: 'vegetables'},
        {key: '2', label: 'Fruits', value: 'fruits'},
        {key: '3', label: 'Grains', value: 'grains'},
        {key: '4', label: 'Protein', value: 'protein'},
        {key: '5', label: 'Dairy', value: 'dairy'},
        {key: '6', label: 'Other', value: 'other'},
    ],
    meals:[
        {key: 1, week: 1, day: 1, mealCategory: 1, foodList: [6,12,7], favorite: true},
    ],
    favoriteMeals: [],
    groceries: [],
    groceriesModalVisible: false,
    groceriesModal: false,
    selectedFood: {},
    randomMealChoices: []
}



export interface MealCategoryProps {
    key: string;
    label: string;
    value: string;
}

export interface FoodProps {
    key: string;
    name: string;
    foodGroupKey: string;
    calories: number | string;
    mealCategoryKeys: string[] | null
}

export interface FoodGroupProps {
    key: string;
    label: string;
    value: string;
}
export interface MealProps {
    key: string;
    week: number | null;
    day: number | null;
    mealCategory: number;
    foodList: FoodProps[];
    favorite: boolean
}
export interface GroceryProp {
    key: string;
    label: string,
    foodList: FoodProps[]

}

export interface GlobalDataProps {
    foods: FoodProps[];
    selectedFood: FoodProps;
    foodGroups: FoodGroupProps[];
    groceryList: GroceryProp[];
    groceriesEditMode: boolean;
    groceriesModalVisible: boolean;
    toggleGroceriesEditMode: () => void;
    toggleGroceriesModal: () => void;
    setSelectedFood: (key: string) => void;
    getGroceries: () => void;
    addFood: (food: FoodProps) => void;
    editFood: (food: FoodProps) => void;
    deleteFood: (key: string) => void;

    randomMealChoices: MealProps[];
    randomizeMeal: (values: RandomizeFormValuesProps) => void;

    addFavoriteMeal: (meal: MealProps) => void;
    removeFavoriteMeal: (key: string) => void;

    meals: MealProps[];
    mealCategories: MealCategoryProps[];
    favoriteMeals: MealProps[];
}

