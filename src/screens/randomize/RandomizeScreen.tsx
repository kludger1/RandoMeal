import React, {useContext} from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import RandomizeForm from "./form/RandomizeForm";
import GlobalDataContext from "../../context/global/GlobalDataContext";
import MealDisplay from "../../components/MealDisplay";
import {FlatList, ScrollView, StyleSheet} from "react-native";

const RandomizeScreen: React.FC = () =>  {
    const {randomMealChoices} = useContext(GlobalDataContext)
    console.log('randomMealChoices', randomMealChoices)
    return (
        <ScreenWrapper>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.wrapper}
            >
                <RandomizeForm>
                    <FlatList
                        data={randomMealChoices}
                        renderItem={({item}) => <MealDisplay key={item.key}  meal={item}/>}
                        keyExtractor={item => item.key}
                        // horizontal={true}
                        // showsHorizontalScrollIndicator={false}
                    />
                </RandomizeForm>
            </ScrollView>
        </ScreenWrapper>
    );
}


const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 20,
    },
});

export default RandomizeScreen
