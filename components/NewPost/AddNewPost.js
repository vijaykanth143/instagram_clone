import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import back from '../../assets/back.png';
const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};
const Header = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image source={back} style={{height: 30, width: 30}} />
    </TouchableOpacity>

    <Text style={styles.headerText}>NEW POST</Text>
 <Text></Text>
  </View>
);
export default AddNewPost;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
  },
  headerText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 5,
  },
});
