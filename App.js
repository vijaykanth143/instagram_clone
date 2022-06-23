/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {getFirestore} from 'firebase/firestore';
import {initializeApp} from 'firebase/app';
import SignedInStack from './Navigation';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
const firebaseConfig = {
  apiKey: 'AIzaSyA3_oO5uELHS2_BzKyA62DpQ7Gd0tRl6bM',
  authDomain: 'rn-instagram-clone-6bf5e.firebaseapp.com',
  projectId: 'rn-instagram-clone-6bf5e',
  storageBucket: 'rn-instagram-clone-6bf5e.appspot.com',
  messagingSenderId: '887368227064',
  appId: '1:887368227064:web:76e368d006075666c9430d',
};

export const database = getFirestore(initializeApp(firebaseConfig));
const App = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyA3_oO5uELHS2_BzKyA62DpQ7Gd0tRl6bM',
    authDomain: 'rn-instagram-clone-6bf5e.firebaseapp.com',
    projectId: 'rn-instagram-clone-6bf5e',
    storageBucket: 'rn-instagram-clone-6bf5e.appspot.com',
    messagingSenderId: '887368227064',
    appId: '1:887368227064:web:76e368d006075666c9430d',
  };
  initializeApp(firebaseConfig);

  return <SignedInStack />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
