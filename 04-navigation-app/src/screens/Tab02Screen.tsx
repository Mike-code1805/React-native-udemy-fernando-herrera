import {useEffect} from 'react';
import {Text, View} from 'react-native';

export const Tab02Screen = () => {
  useEffect(() => {
    console.log('Tab02Screen');
  }, []);
  return (
    <View>
      <Text
        style={{
          color: 'black',
        }}>
        Tab02Screen xd
      </Text>
    </View>
  );
};
