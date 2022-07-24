import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {images} from '../../assets';
import imagesIcon from '../../assets/images';

import Header from '../../components/header';

const ListDetail = ({route}: any) => {
  const {data, title} = route.params;
  return (
    <ScrollView>
      <View style={styles.contanier}>
        <Header title={title} iconLeft={images.ic_back} />
        <View style={styles.contentContainer}>
          {data.map((itemData, index) => {
            return (
              <TouchableOpacity style={styles.blockContainer} key={index}>
                <View style={styles.topContent}>
                  <Image
                    defaultSource={imagesIcon.LOGO_ICON}
                    source={{uri: itemData.image}}
                    style={styles.fullWidth}
                  />
                </View>
                <View style={styles.bottomContent}>
                  <Text style={styles.title}>{itemData.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contanier: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  blockContainer: {
    width: '31.3%',
    height: 200,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 5,
  },
  topContent: {
    width: '100%',
    height: '80%',
    backgroundColor: 'blue',
  },
  bottomContent: {
    width: '100%',
    height: '20%',
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  fullWidth: {width: '100%', height: '100%'},
  title: {textAlign: 'center', paddingVertical: 3},
});
export default ListDetail;
