import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './styles';

const Header = () => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <TouchableOpacity style={[styles.widthItem, styles.firtShow]}>
          <Feather name="align-justify" size={20} color={'white'} />
        </TouchableOpacity>
        <View style={[styles.widthItem, styles.center]}>
          <Text style={styles.colorWhite}>Movies</Text>
        </View>
        <View style={styles.widthItem} />
      </View>
    </>
  );
};

export default Header;
