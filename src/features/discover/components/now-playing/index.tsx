import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useAppSelector} from '../../../../app/store';
import images from '../../../../assets/images';

const NowPlaying = () => {
  const data = useAppSelector(state => state.counterSlice.data);
  const loadingData = useAppSelector(state => state.counterSlice.loadingData);
  return (
    <>
      {loadingData ? (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} color={'yellow'} />
        </View>
      ) : (
        <ScrollView style={styles.container}>
          <View style={styles.container}>
            <View style={styles.headerContent}>
              {data.map((item, index) => {
                return (
                  <View style={styles.blockContent} key={index}>
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
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
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