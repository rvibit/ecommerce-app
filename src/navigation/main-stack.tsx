import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Cart} from '@src/screens';
import {MainStackParamList} from './types';
const Stack = createNativeStackNavigator<MainStackParamList>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        options={{headerShown: true}}
        name="Cart"
        component={Cart}
      />
    </Stack.Navigator>
  );
};
