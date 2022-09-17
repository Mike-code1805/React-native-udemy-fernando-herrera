import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Page01Screen,
  Page02Screen,
  Page03Screen,
  PersonScreen,
} from '../screens';

export type RootStackParams = {
  Page01Screen: undefined;
  Page02Screen: undefined;
  Page03Screen: undefined;
  PersonScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Pagina2Screen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Page01Screen"
        options={{title: 'Página 1'}}
        component={Page01Screen}
      />
      <Stack.Screen
        name="Page02Screen"
        options={{title: 'Página 2'}}
        component={Page02Screen}
      />
      <Stack.Screen
        name="Page03Screen"
        options={{title: 'Página 3'}}
        component={Page03Screen}
      />
      <Stack.Screen name="PersonScreen" component={PersonScreen} />
    </Stack.Navigator>
  );
};
