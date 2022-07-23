import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import {images} from '../../assets';
import {SaveMovie} from './MovieSlice';
import {useAppDispatch, useAppSelector} from '../../app/store';

const {width, height} = Dimensions.get('window');

export default function MovieDetail(props: any) {
  const {item} = props.route.params;
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.MovieSlice.data);
  const check = data.some(movie => movie.id === item.id);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header
        title={item?.title}
        iconLeft={images.ic_back}
        onLeftPress={() => props.navigation.goBack()}
        lStyle={styles.icLeft}
      />
      <ScrollView style={{flex: 1}}>
        <Image source={{uri: item?.image}} style={styles.thumnail} />
        <View style={{marginHorizontal: 16, marginBottom: 20}}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.time}>{item?.releaseState}</Text>

          <Text style={styles.Overview}>Overview</Text>
          <Text style={styles.plot}>{item?.plot}</Text>

          <View style={styles.rowBetween}>
            <Text style={styles.runtime}>Runtime</Text>
            <Text style={styles.runtime}>{item?.runtimeStr}</Text>
          </View>

          <Text style={{color: 'white'}}>Stars: {item?.stars}</Text>
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Trailer', {id: item.id})}>
          <Image source={images.ic_playtrailer} style={styles.iconPlay} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(SaveMovie(item));
          }}>
          <Image
            source={check ? images.ic_tick : images.ic_plus}
            style={styles.iconPlay}
          />
        </TouchableOpacity>
        <View />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icLeft: {
    tintColor: 'rgb(218,184,25)',
  },
  thumnail: {
    width: width,
    height: height,
  },
  iconPlay: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  bottom: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 9,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  time: {
    color: 'white',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    paddingBottom: 10,
  },
  Overview: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  plot: {
    color: 'white',
    lineHeight: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: 'white',
    marginBottom: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  runtime: {
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
  },
});
