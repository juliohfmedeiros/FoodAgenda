import React from 'react';

import RegimeScreen from '../screens/RegimeScreen';
import MealScreen from '../screens/MealScreen';
import StockScreen from '../screens/StockScreen';
import ScanScreen from '../screens/ScanScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EvilIcons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();
const StockStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
  <Tab.Navigator screenOptions={({ route }) => ({
    headerShown: false,
    tabBarStyle: {
      height: 90,
      paddingTop: 0,
      backgroundColor: 'grey',
      position: 'absolute',
      borderTopWidth: 0,
    },
    tabBarIcon: ({ focused, color, size }) => {
      let iconName:any;

      if (route.name === 'Regime') {
        iconName = focused
          ? 'fast-food'
          : 'fast-food-outline';
      } else if (route.name === 'Stock') {
        iconName = focused ? 'file-tray-stacked' : 'file-tray-stacked-outline';
      }

      return <EvilIcons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'black',
})}>
    <Tab.Screen name="Regime" options={{ headerShown: false }}>
      {() => (
      <MainStack.Navigator initialRouteName="RegimeScreen">

        <MainStack.Screen 
          name="RegimeScreen" 
          component={RegimeScreen}
          options={{
            title:'Agenda Alimentar',
            headerTitleStyle: {color: 'white'},
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'grey',
            },
            headerRight: () => (
              <Button
              title='ola'
              onPress={() => console.log('ola')}
              icon={<EvilIcons name={'settings'} size={20} color={'white'} />}
              />
            ),
          }}
        />
        <MainStack.Screen 
          name="MealScreen" 
          component={MealScreen}
          options={{
            title:'Agenda Alimentar',
            headerTitleStyle: {color: '#fff'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'grey',
            }
          }}
        />
      </MainStack.Navigator>
      )}
      </Tab.Screen>    
      <Tab.Screen name="Stock" options={{ headerShown: false }}>
        {() => (
      <StockStack.Navigator initialRouteName="StockScreen">

        <StockStack.Screen name="StockScreen" component={StockScreen}
          options={{
            title:'Stock',
            headerTitleStyle: {color: '#fff'},
            headerTitleAlign: 'center',
            headerStyle: {
            backgroundColor: 'grey',
            },
          }}
        />

        <StockStack.Screen name="ScanScreen" component={ScanScreen}
          options={{
            title:'Scan',
            headerTitleStyle: {color: '#fff'},
            headerTitleAlign: 'center',
            headerStyle: {
            backgroundColor: 'grey',
            },
          }}
        />

      </StockStack.Navigator>
    )}
    </Tab.Screen>
  </Tab.Navigator>
  );
};

export default MainNavigator;