import React, {useContext} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {COLORS} from "../styles/global";
import {FoodProps, MealProps} from "../FakeData";
import GlobalDataContext from "../context/global/GlobalDataContext";


interface MealDisplay {
  meal: MealProps;
}


const MealDisplay: React.FC<MealDisplay> = ({meal}) =>  {
  const {addFavoriteMeal} = useContext(GlobalDataContext)
  const {favorite, foodList} = meal

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Breakfast</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity>
            <Text style={styles.mealIcon}>meal</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> addFavoriteMeal(meal)}>
            <Text style={[favorite ? styles.heartIconActive : styles.heartIcon]}>heart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        { foodList.map((food: FoodProps) => (
          <Text key={food.key} style={styles.text}>{food.name}</Text>
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Calories</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity>
            <Text style={styles.editIcon}>edit</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={styles.deleteIcon}>delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    marginRight: 20,
    borderWidth: 3,
    borderColor: COLORS.SECONDARY,
    // minWidth: '75%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.SECONDARY,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  buttonWrapper: {
    flexDirection: 'row',

  },
  mealIcon: {
    color: COLORS.WHITE,
    marginRight: 20
  },
  mealIconActive: {
    color: COLORS.PRIMARY,
    marginRight: 20,
    fontWeight: 'bold',
  },
  heartIcon: {
    color: COLORS.WHITE,
  },
  heartIconActive: {
    color: 'pink',
    marginRight: 20,
    fontWeight: 'bold',
  },
  body: {
    padding: 10,
    // minHeight: '40%'
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.SECONDARY,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 1,
    paddingBottom: 15,
    borderTopWidth: 3,
    borderTopColor: COLORS.SECONDARY,
    // minHeight: '5%'
  },
  editIcon: {
    marginRight: 20
  },
  deleteIcon: {

  },
});

export default MealDisplay
