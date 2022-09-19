import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, Text} from 'react-native';
import {Tab01Screen, Tab02Screen} from '../screens';
import {colores} from '../theme/appTheme';
import {StackNavigator} from './StackNavigator';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

export const MyTabs = () => {
  return Platform.OS === 'android' ? <TabsAndroid /> : <TabsIOS />;
};

const TabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <TabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 11,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab01Screen':
              iconName = 'Tab01';
              break;

            case 'Tab02Screen':
              iconName = 'Tab02';
              break;

            case 'StackNavigator':
              iconName = 'StackNavigator';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <TabIOS.Screen name="Tab01Screen" component={Tab01Screen} />
      <TabIOS.Screen name="Tab02Screen" component={Tab02Screen} />
      <TabIOS.Screen name="StackNavigator" component={StackNavigator} />
    </TabIOS.Navigator>
  );
};

const TabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <TabAndroid.Navigator
      barStyle={{backgroundColor: colores.primary}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab01Screen':
              iconName = 'bandage-outline';
              break;

            case 'Tab02Screen':
              iconName = 'basketball-outline';
              break;

            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
        headerShown: false,
      })}>
      <TabAndroid.Screen name="StackNavigator" component={StackNavigator} />
      <TabAndroid.Screen name="Tab01Screen" component={Tab01Screen} />
      <TabAndroid.Screen name="Tab02Screen" component={Tab02Screen} />
    </TabAndroid.Navigator>
  );
};
