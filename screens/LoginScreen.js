import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginForm from '../components/LoginScreen/LoginForm';
const INSTA_ICON = 'https://i.ibb.co/mCbMcVN/instaicon.png';
const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={{uri: INSTA_ICON, height: 100, width: 100}} />
      </View>
      <LoginForm navigation={navigation} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logo: {
    alignItems: 'center',
    marginTop: 60,
  },
});
