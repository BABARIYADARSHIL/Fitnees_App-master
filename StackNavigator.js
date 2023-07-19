import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import FitScreen from './Screens/FitScreen';
import RestScreen from './Screens/RestScreen';
import WorkOutScreen from './Screens/WorkoutScreen';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  // const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Workout"
          component={WorkOutScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Fit"
          component={FitScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Rest"
          component={RestScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
