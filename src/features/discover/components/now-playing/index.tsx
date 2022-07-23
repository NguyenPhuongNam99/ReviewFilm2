import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useAppSelector} from '../../../../app/store';
import images from '../../../../assets/images';
import {setVisiable, setDataClick} from '../../../popup-video/popupVideoSlice';
import {useAppDispatch} from '../../../../app/store';

const NowPlaying = (props: any) => {
  const data = useAppSelector(state => state.counterSlice.data);
  console.log('===========data=========', data);

  const loadingData = useAppSelector(state => state.counterSlice.loadingData);

  const dispatch = useAppDispatch();

  const _onPress = (item: any) => {
    dispatch(setDataClick(item));
    dispatch(setVisiable(true));
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.blockContent}
                onPress={() =>
                  props.navigation.navigate('MovieDetail', {item})
                }>
                <View style={styles.content}>
                  <Image
                    style={styles.fullWidth}
                    resizeMode={'stretch'}
                    source={{
                      uri: item.image,
                    }}
                  />
                  <Text numberOfLines={2} style={styles.textAlign}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}

    <>
      {loadingData ? (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} color={'yellow'} />
        </View>
      ) : (
        <>
          <ScrollView style={styles.container}>
            <View style={styles.container}>
              <View style={styles.headerContent}>
                {data.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={styles.blockContent}
                      key={index}
                      onPress={() => _onPress(item)}>
                      <View style={styles.content}>
                        <Image
                          defaultSource={images.LOGO_ICON}
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
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
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
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  fullWidth: {width: '100%', height: '100%', zIndex: 2},
  textAlign: {textAlign: 'center', paddingVertical: 3},
  loading: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default NowPlaying;
