import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const ContactScreen = () => {
  const {signIn, authState} = useContext(AuthContext);
  const {isLoggedIn} = authState;

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactScreen</Text>

      {!isLoggedIn && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
};
