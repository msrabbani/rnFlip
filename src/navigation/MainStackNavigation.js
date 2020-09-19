import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Transaction from '../screens/Transaction';
import DetailTransaction from '../screens/DetailTransaction';

const Stack = createStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen
        name="Detail"
        options={{headerShown: false}}
        component={DetailTransaction}
      />
    </Stack.Navigator>
  );
}
