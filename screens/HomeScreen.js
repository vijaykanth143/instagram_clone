import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Home/Header';
import Stories from '../components/Home/Stories';
import Post from '../components/Home/Post';
import {POSTS} from '../data/Post';
import BottomTab, {bottomTabIcons} from '../components/Home/BottomTab';
import {database} from '../App';
import {db} from '../firebase';
import {
  collection,
  getDocs,
  collectionGroup,
  onSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';
const HomeScreen = ({navigation}) => {
  const [data, setData] = useState(null);
  const snapshot = onSnapshot;

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTab icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
