import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

const {width, height} = Dimensions.get('window');

export default function Trailer({route, navigation}) {
  const {id} = route.params;
  const playerRef = useRef();
  const [videoId, setVideoId] = useState('');
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getTrailer();
    return () => {};
  }, []);

  const getTrailer = async () => {
    setloading(true);
    const {data} = await axios.get(
      `https://imdb-api.com/en/API/Title/k_ftyzt2lc/${id?.replace(
        'showtimes',
        '',
      )}/Trailer`,
    );
    if (data) {
      console.log('=======videoId=====', data.trailer);
      const movie = await axios.post(
        `https://freedownloadvideo.net/wp-json/aio-dl/video-data?url=${data.trailer.linkEmbed}`,
      );
      console.log('=========movie========', movie.data);
      const {medias} = movie.data;
      if (medias?.length > 0) {
        setVideoId(medias[0]?.url);
      }
    }
    setloading(false);
  };

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <VideoPlayer
          source={{
            uri: videoId,
          }}
          navigator={navigation}
          style={{flex: 1}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
