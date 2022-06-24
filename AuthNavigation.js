import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SignedInStack, SignedOutStack} from './Navigation';
import {auth} from './firebase';
import {onAuthStateChanged} from 'firebase/auth';
import {useGestureHandlerRef} from '@react-navigation/stack';
const AuthNavigation = () => {
  const [currentUser, setCurrentuser] = useState(null);
  const useHandler = user =>
    user ? setCurrentuser(user) : setCurrentuser(null);
  useEffect(() => auth.onAuthStateChanged(user => useHandler(user)), []);
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;

const styles = StyleSheet.create({});
