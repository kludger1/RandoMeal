import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ROUTES} from "../routes";
import {COLORS} from "../styles/global";
import GroceriesScreen from "../screens/groceries/GroceriesScreen";
import RandomizeScreen from "../screens/RandomizeScreen";
import MealPlanScreen from "../screens/MealPlanScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

const RootNavigation: React.FC = () =>  (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName={ROUTES.RANDOMIZE}
            tabBarOptions={{
                activeTintColor: COLORS.PRIMARY,
                inactiveTintColor: COLORS.GREY,
            }}
        >
            <Tab.Screen name={ROUTES.GROCERIES} component={GroceriesScreen} />
            <Tab.Screen name={ROUTES.RANDOMIZE} component={RandomizeScreen} />
            <Tab.Screen name={ROUTES.MEAL_PLAN} component={MealPlanScreen} />
            <Tab.Screen name={ROUTES.FAVORITES} component={FavoritesScreen} />
        </Tab.Navigator>
    </NavigationContainer>
);

export default RootNavigation
