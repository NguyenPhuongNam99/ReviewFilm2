import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import YouTube from 'react-native-youtube';
import axios from 'axios';
const {width, height} = Dimensions.get('window');

export default function Trailer({route}) {
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
      `https://imdb-api.com/en/API/YouTubeTrailer/k_ftyzt2lc/${id?.replace(
        'showtimes',
        '',
      )}`,
    );
    if (data) {
      setVideoId(data?.videoId);
    }
    setloading(false);
  };
  console.log('video0 id', videoId);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  } else {
    return (
      <SafeAreaView
        style={{backgroundColor: 'black', width: '100%', height: '100%'}}>
        <YouTube
          videoId={videoId} // The YouTube video ID
          play // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          style={{width: '100%', height: '100%', backgroundColor: 'black'}}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
