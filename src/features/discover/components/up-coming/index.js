import React from 'react';
import {Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../../../app/store';
import imagesIcon from '../../../../assets/images';
import axios from 'axios';

const Upcoming = (props) => {
  const dataUpComing = useAppSelector(state => state.counterSlice.dataUpComing);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          {dataUpComing.map((item, index) => {
              return (
                <TouchableOpacity onPress={()=> props.navigation.navigate('MovieDetail', {item})} style={styles.blockContent} key={index}>
                  <View style={styles.content}>
                    <Image
                      defaultSource={imagesIcon.LOGO_ICON}
                      style={styles.fullWidth}
                      resizeMode={'cover'}
                      source={{
                        uri: item.image,
                      }}
                    />
                  </View>
                  <Text numberOfLines={2} style={styles.textAlign}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
                // <View></View>
              );
            })
           }
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContent: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  blockContent: {
    width: '31.3%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 16,
  },
  content: {
    width: '100%',
    height: '80%',
    backgroundColor: 'yellow',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  fullWidth: {width: '100%', height: '100%', zIndex: 2},
  textAlign: {textAlign: 'center', paddingVertical: 3},
});

export default Upcoming;
