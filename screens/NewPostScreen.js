import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddNewPost from '../components/NewPost/AddNewPost';
import FormikPost from '../components/NewPost/FormikPost';

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <AddNewPost navigation={navigation} />
      <FormikPost navigation={navigation} />
    </SafeAreaView>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({});
