import React, {useState} from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { stock } from "../stock";

const MealScreen = ({route: { params }}: any) => {
  const {regime, suggestions} = params;
  const [foodStock, setFoodStock] = useState(stock);
  
  const meal = suggestions.map((meal:any) => {
    let totalProtein: number = 0;
    let totalCarbohydrates: number = 0;
    let totalFats: number = 0;

    meal.goals.filter((goal: any) => {
      goal.ingredients.map(
      (ingredient:any) => {return ingredient.protein})
      .reduce((total:number, curr:any) =>{
        total=0
        totalProtein += total + 4*curr
      },0)
    })

    meal.goals.filter((goal: any) => {
      goal.ingredients.map(
      (ingredient:any) => {return ingredient.carbohydrates})
      .reduce((total:number, curr:any) =>{
        total=0
        totalCarbohydrates += total + 4*curr
      },0)
    })

    meal.goals.filter((goal: any) => {
      goal.ingredients.map(
      (ingredient:any) => {return ingredient.fats})
      .reduce((total:number, curr:any) =>{
        total=0
        totalFats += total + 9*curr
      },0)
    })
    
    return <View key={meal.uuid} style={{flexDirection: 'column', padding:10}}>
            <View style={{flexDirection:'row', alignItems:'center', marginBottom: 10}}>
              <Text style={{fontSize:24, fontWeight: 'bold', color:'black'}}>{ meal.title }</Text>
            </View>
            <View style={{marginBottom: 10}}>
                <Text style={{color:'black'}}>Total Calorias: {Math.round(totalProtein+totalCarbohydrates+totalFats)}</Text>
                <Text style={{color:'black'}}>Proteinas: {Math.round(totalProtein)} calorias</Text>
                <Text style={{color:'black'}}>Carbohidratos: {Math.round(totalCarbohydrates)} calorias</Text>
                <Text style={{color:'black'}}>Gorduras: {Math.round(totalFats)} calorias</Text>
              </View>
            <ScrollView style={{backgroundColor:'white', height:340}}>
              <Text style={{fontWeight:'bold',color:'black', padding:8}}>Objetivos</Text>
              <View style={{paddingLeft:16}}>{meal.goals.map((goal:any) => {return <Text key={goal.name} style={{color:'black'}}>{'- ' + goal.name}</Text>})}</View>
              <BouncyCheckbox
                  size={30}
                  fillColor="grey"
                  unfillColor="#FFFFFF"  
                  text="Utilizar stock"
                  onPress={(isChecked: boolean) => {
                      let eatFood = [...foodStock];
                      meal.goals.filter((goal: any) => {
                        goal.ingredients.map(
                        (ingredient:any) => {
                          eatFood.forEach((food:any)=>{
                            if(isChecked == true && food.uuid == ingredient.uuid)
                              food.stock = food.stock - ingredient.quantity
                          })
                        })
                      })
                      setFoodStock(eatFood);
                  }}
                />
                <BouncyCheckbox
                  size={30}
                  fillColor="grey"
                  unfillColor="#FFFFFF"  
                  text="Comer fora"
                  onPress={(isChecked: boolean) => {
                    if(isChecked == true){
                      Alert.alert('Comi fora')
                    }
                  }}
                />
            </ScrollView>
          </View>
    })

  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'row', height:60, justifyContent:'space-between'}}>
        <View style={{flex:1, flexDirection:'row', backgroundColor:'lightgrey', justifyContent:'center', alignItems:'center', height:60 }}>
        <Ionicons name='caret-back' size={20} color='white' />
          <Text style={{fontSize:18, color:'black', margin:10}}>{'Sugestões ' + regime + ' de hoje'}</Text>
          <Ionicons name='caret-forward' size={20} color='white' />
        </View>
      </View>
      <ScrollView>
      {meal}
      </ScrollView>
    </View>
  )
};

export default MealScreen;