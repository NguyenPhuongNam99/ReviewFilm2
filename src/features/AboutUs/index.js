import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Fonts from '../../assets/Fonts';
import Header from '../../components/header';
import {images} from '../../assets';

const AboutUs = (navigation) => {
  return (
    <View style={styles.container}>
      <Header
        iconLeft={images.ic_back}
        onLeftPress={() => navigation.goBack()}
        lStyle={{tintColor: 'white'}}
        title="About Us"
      />
      <Text style={styles.txt}>Movies Box - IT Dev - LH team</Text>
    </View>
  )
}

export default AboutUs;

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    backgroundColor:"black"
  },
  txt:{
    color:"#FFF",
    margin:10
  }
    
})