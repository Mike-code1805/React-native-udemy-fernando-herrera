import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
// import {useNavigation} from '@react-navigation/core';
import {styles} from '../theme/appTheme';

export const Page02Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: '',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina2Screen </Text>

      <Button
        title="Ir página 3"
        onPress={() =>
          navigator.dispatch(CommonActions.navigate('Page03Screen'))
        }
      />
    </View>
  );
};
