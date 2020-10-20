import React, {useContext} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import MealDisplay from "../../components/MealDisplay";
import GlobalDataContext from "../../context/global/GlobalDataContext";
import ScreenWrapper from "../../components/ScreenWrapper";



const FavoritesScreen: React.FC = () =>  {
    const {favoriteMeals} = useContext(GlobalDataContext)
    console.log('favoriteMeals', favoriteMeals)
    return (
        <ScreenWrapper>
            <View style={styles.wrapper}>
                <FlatList
                    data={favoriteMeals}
                    renderItem={({item}) => <MealDisplay key={item.key} meal={item}/>}
                    keyExtractor={item => item.key}
                />
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 20,
        flex: 1
    },
});
export default FavoritesScreen
