import React from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
import ListMeal from '../components/ListMeal';
import { regimes } from "../regimes";
import Ionicons from 'react-native-vector-icons/Ionicons';

const RegimeScreen = ({navigation}: any) => {
  return(
    <View style={{flex:1}}>
      <View style={styles.time}>
        <Ionicons name='caret-back' size={20} color='white' />
        <View style={styles.day}><Text style={{fontSize:18, color:'black'}}>Refeições de hoje</Text></View>
        <Ionicons name='caret-forward' size={20} color='white' />
      </View>
      <FlatList
        data={regimes}
        renderItem={({item}: any) => <ListMeal item={item} navigation={navigation} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  time: { 
    flexDirection:'row', 
    backgroundColor:'lightgrey', 
    justifyContent:'center', 
    alignItems:'center',
    height:60
  },

  day: {
    margin:10,
    backgroundColor:'lightgrey',
    justifyContent:'center',
    alignItems:'center'
  }
})

export default RegimeScreen;