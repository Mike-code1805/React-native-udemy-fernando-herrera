import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AlbumsScreen, ChatScreen, ContactScreen} from '../screens';
import {useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {
  const {top} = useSafeAreaInsets();
  useEffect(() => {
    console.log('TopTab');
  }, []);
  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarShowIcon: false,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarActiveTintColor: 'black',
        tabBarPressColor: colores.primary,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          elevation: 1,
          paddingVertical: 12,
          backgroundColor: 'white',
        },
        tabBarIconStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
        tabBarIcon: ({focused, color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'C';
              break;

            case 'ContactScreen':
              iconName = 'C';
              break;

            case 'AlbumsScreen':
              iconName = 'A';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="ChatScreen" options={{title: 'Chat'}} component={ChatScreen} />
      <Tab.Screen name="ContactScreen" options={{title: 'Contact'}} component={ContactScreen} />
      <Tab.Screen name="AlbumsScreen" options={{title: 'Album'}} component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
