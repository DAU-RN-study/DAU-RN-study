import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../HomeScreen';
import test1 from '../test1';
import test2 from '../test2';
import test3 from '../test3';
import test4 from '../test4';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="test1"
        component={test1}
        // options={{
        //   header: () => <CustomHeader title="" />,
        // }}
      />
      <Stack.Screen
        name="test2"
        component={test2}
        // options={{
        //   header: () => <CustomHeader title="" />,
        // }}
      />
      <Stack.Screen
        name="test3"
        component={test3}
        // options={{
        //   header: () => <CustomHeader title="" />,
        // }}
      />
      <Stack.Screen
        name="test4"
        component={test4}
        // options={{
        //   presentation: 'modal',
        //   headerShown: false,
        // }}
      />
    </Stack.Navigator>
  );
}
