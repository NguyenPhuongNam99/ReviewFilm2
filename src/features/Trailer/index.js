import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';
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
      `https://imdb-api.com/en/API/YouTubeTrailer/k_ftyzt2lc/${id?.replace('showtimes','')}`,
    );
    if (data) {
      setVideoId(data?.videoId);
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
      <SafeAreaView style={{backgroundColor: 'black'}}>
        <YoutubePlayer
          ref={playerRef}
          height={height + 50}
          width={width}
          videoId={videoId}
          preventFullScreen={true}
          onFullScreenChange={e => console.log(e)}
          showFullscreenButton={false}
          fullscreen={true}
          controls = {1}
        //   webViewProps={{
        //     injectedJavaScript: `
        //   var element = document.getElementsByClassName('container')[0];
        //   element.style.position = 'unset';
        //   element.style.paddingBottom = 'unset';
        //   true;
        // `,
        //   }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
