import {useEffect} from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> {}

export const Page01Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menú" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen </Text>

      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Page02Screen')}
      />

      <Text
        style={{
          marginVertical: 20,
          fontSize: 20,
        }}>
        Navegar con argumentos
      </Text>
      <Text>
        <Icon name="airplane-outline" size={50} color="#9D0" />
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
