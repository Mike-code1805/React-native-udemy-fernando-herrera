import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {MyTabs} from './MyTabs';
import {TopTab} from './TopTab';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 600 ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="MyTabs" component={MyTabs} />
      <Drawer.Screen name="TopTab" component={TopTab} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('MyTabs')}>
          <Text style={styles.menuTexto}>My Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('TopTab')}>
          <Text style={styles.menuTexto}>TopTab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="cog-outline" size={26} color="black" />
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
