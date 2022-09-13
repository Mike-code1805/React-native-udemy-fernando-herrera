import {Text, View} from 'react-native';

const HiWorldScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center',
        }}>
        Hola Mike
      </Text>
    </View>
  );
};

export default HiWorldScreen;
