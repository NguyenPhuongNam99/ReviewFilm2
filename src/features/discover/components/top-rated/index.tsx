import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import imagesIcon from '../../../../assets/images';
import {useAppSelector, useAppDispatch} from '../../../../app/store';
import {setCount} from '../../discoverSlice';

const TopRated = props => {
  const dataTopRated = useAppSelector(state => state.counterSlice.dataTopRated);
  const dispatch = useAppDispatch();
  const _onClick = (item: any) => {
    props.navigation.navigate('MovieDetail', {item}), dispatch(setCount());
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          {dataTopRated.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.blockContent}
                onPress={() => _onClick(item)}>
                <View style={styles.content}>
                  <Image
                    defaultSource={imagesIcon.LOGO_ICON}
                    style={styles.fullWidth}
                    resizeMode={'cover'}
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
        </View>
      </View>
    </ScrollView>
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
    marginBottom: 20,
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
export default TopRated;
