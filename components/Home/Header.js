import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import header from '../../assets/header-logo.png';
import Icon from 'react-native-vector-icons/Feather';
import like from '../../assets/Likewhite.png';
import plus from '../../assets/pluswhite.png';
import messenger from '../../assets/messenger.png';
const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={header} />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image source={plus} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={like} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.onredBadge}>
            <Text style={styles.onredBadgeText}>11</Text>
          </View>
          <Image source={messenger} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    padding: 10,
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  onredBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  onredBadgeText: {
    color: 'white',
    fontWeight: '600',
  },
});
