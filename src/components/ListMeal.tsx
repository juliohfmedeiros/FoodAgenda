import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { recipes } from "../recipes";
import {firebase} from '@react-native-firebase/database';

const ListMeal = ({item, navigation}: any) => {

  const [weight, setWeight] = useState(0);
  firebase.app().database('https://foodagenda-201d7-default-rtdb.europe-west1.firebasedatabase.app').ref('/scale').on('value', snapshot => {
    setWeight(snapshot.val())
  });
  let suggestions: any = [];
  recipes.filter(
    (check: any) => {
        check.goals.filter((goal: any) => {
          goal.ingredients.filter((ingredient: any) => {
            if(goal.ingredients.length == 1 && ingredient.ingredient.includes("laranja") && ingredient.quantity <= weight && check.meal == item.name){
              suggestions.push(check);
            }
            return suggestions;
          })
        })
  })
  return (
    <TouchableOpacity
      onPress={(): any =>
        navigation.navigate('MealScreen',
        {
          suggestions: suggestions,
          regime: item.name
        })}
      style={styles.meal}
    >
      <View style={styles.mealView}>
          <Text style={styles.mealName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
};
const styles = StyleSheet.create({
  meal: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 86
  },
  mealView: {
    flex: 1,
    flexDirection: 'column'
  },
  mealName: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default ListMeal;