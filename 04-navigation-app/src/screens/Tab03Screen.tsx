import {useEffect} from 'react';
import {Text, View} from 'react-native';

export const Tab03Screen = () => {
  useEffect(() => {
    console.log('Tab03Screen');
  }, []);
  return (
    <View>
      <Text>Tab03Screen</Text>
    </View>
  );
};
