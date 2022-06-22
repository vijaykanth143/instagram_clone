import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import activehome from '../../assets/activehome.png';
import inactivehome from '../../assets/inactivehome.png';
import activeheart from '../../assets/activeheart.png';
import inactiveheart from '../../assets/heart.png';
import activereels from '../../assets/activereels.png';
import activesearch from '../../assets/activesearch.png';
import inactivereels from '../../assets/reels.png';
import inactivesearch from '../../assets/search.png';
import {Divider} from 'react-native-elements';
import {USERS} from '../../data/users';
export const bottomTabIcons = [
  {
    name: 'Home',
    active: activehome,
    inactive: inactivehome,
  },
  {
    name: 'Search',
    active: activesearch,
    inactive: inactivesearch,
  },
  {
    name: 'Home',
    active: activereels,
    inactive: inactivereels,
  },
  {
    name: 'Show',
    active: activeheart,
    inactive: inactiveheart,
  },
  {
    name: 'Profile',
    active: USERS[0].image,
    inactive: USERS[0].image,
  },
];
const BottomTab = ({icons}) => {
  const [activetabs, setActivetabs] = useState('Home');
  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActivetabs(icon.name)}>
      <Image source={icon.inactive} style={styles.icon} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  wrapper: {},
  icon: {
    width: 30,
    height: 30,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },
});
