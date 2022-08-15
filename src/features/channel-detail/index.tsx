import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import imagesIcon from '../../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const ChannelDetail = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        defaultSource={imagesIcon.LOGO_ICON}
        source={item.image}
        resizeMode={'stretch'}
        style={styles.imageBanner}
      />
      <Ionicons
        name="chevron-back-outline"
        color={'rgb(218,184,25)'}
        size={30}
        style={styles.back}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.viewHeader}>
        <Text style={styles.titleHeader}>{item.title}</Text>
        <MaterialCommunityIcons
          name="star-shooting"
          color={'yellow'}
          size={30}
          style={styles.star}
        />
      </View>

      <Text style={styles.new}>{item.new}</Text>
      <Text style={[styles.new, styles.lineheight]}>{item.decription}</Text>
      <View style={styles.iconBottom}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="share-variant"
            color={'white'}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="check" color={'white'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="like2" color={'white'} size={30} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.chat}>
        <Entypo name="chat" color={'black'} size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBanner: {width: '100%', height: 220, backgroundColor: 'black'},
  titleHeader: {
    color: 'yellow',
    marginTop: 18,
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 16,
  },
  new: {color: 'white', marginTop: 10, paddingLeft: 16},
  lineheight: {
    lineHeight: 22,
  },
  back: {position: 'absolute', top: 10, left: '2%', zIndex: 1},
  viewHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  star: {paddingTop: 10, marginRight: 16},
  iconBottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    // marginTop: 30,
    position: 'absolute',
    bottom: 10,
    left: 0,
  },
  chat: {
    width: 50,
    height: 50,
    borderRadius: 9,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '15%',
    right: 10,
  },
});
export default ChannelDetail;
