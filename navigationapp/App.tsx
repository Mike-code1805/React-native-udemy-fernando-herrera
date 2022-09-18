import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';


const App = () => {
  return (
    <NavigationContainer>
      <MenuLateralBasico />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
