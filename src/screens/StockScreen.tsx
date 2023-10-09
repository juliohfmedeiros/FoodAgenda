import React, { useState } from 'react';
import { StyleSheet,View, Text, TouchableOpacity} from 'react-native';
import {firebase} from '@react-native-firebase/database';
import { Button } from 'react-native-elements';

const StockScreen = ({navigation}: any) => {
  const [weight, setWeight] = useState(0);
  firebase.app().database('https://foodagenda-201d7-default-rtdb.europe-west1.firebasedatabase.app').ref('/scale').on('value', snapshot => {
    setWeight(snapshot.val())
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ScanScreen')}><Text>ola</Text></TouchableOpacity>
      <View style={styles.listItem}>
        <Text style={styles.text}>Laranja</Text>
        <Text style={styles.text}>
          1000g/{weight}g
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center'
  },

  listItem: {
    padding:12,
    alignSelf:'stretch',
    backgroundColor:'white',
    display:'flex', 
    flexDirection:'row',
    justifyContent:'space-between'
  },

  text: {
    color:'black',
    fontSize:18,
  }
});

export default StockScreen;